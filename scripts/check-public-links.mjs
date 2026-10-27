#!/usr/bin/env node
// Verify that public organisation links used in the current portfolio
// resolve without private repository credentials. Exit non-zero on
// unreachable links or links no longer appearing in published source.

import { readFileSync } from 'node:fs'

const sources = [
  'src/data/projects.ts',
  'src/pages/Contact.tsx',
].map((file) => readFileSync(new URL(`../${file}`, import.meta.url), 'utf8'))

const PUBLIC_LINKS = [
  { name: 'aftergraph-organisation', url: 'https://github.com/Aftergraph' },
  { name: 'aftergraph-works', url: 'https://github.com/Aftergraph/works-execution' },
  { name: 'aftergraph-studio', url: 'https://github.com/Aftergraph/studio' },
]

async function probe({ name, url }) {
  const inSource = sources.some((source) => source.includes(url))
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      headers: { 'user-agent': 'jonasabde-profile-public-links/2.0' },
      signal: AbortSignal.timeout(15_000),
    })
    return {
      name,
      url,
      status: response.status,
      reachable: response.status >= 200 && response.status < 400,
      inSource,
    }
  } catch (error) {
    return {
      name,
      url,
      status: null,
      reachable: false,
      inSource,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

const results = await Promise.all(PUBLIC_LINKS.map(probe))
const passed = results.filter((r) => r.reachable && r.inSource).length
const report = {
  check: 'aftergraph-public-links',
  runAt: new Date().toISOString(),
  total: results.length,
  passed,
  status: passed === results.length ? 'PASS' : 'FAIL',
  results,
}

console.log(JSON.stringify(report, null, 2))
if (passed !== results.length) process.exitCode = 1
