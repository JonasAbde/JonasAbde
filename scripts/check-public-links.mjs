#!/usr/bin/env node
// JonasAbde profile URL re-probe
//
// Re-validates the public-repo URLs quoted in README.md and PROJECTS.md.
// Runs as part of the local "site renders, docs match the work, the
// links resolve" gate. Read-only network check; no state mutation.
//
// Usage:
//   node scripts/check-public-links.mjs
//
// Exit 0 if every URL in the source list returns HTTP 200 (after
// following redirects). Exit 1 with a JSON report on the first
// failure or summary if any URL fails. The list is intentionally
// inline below so the script has zero external dependencies.

import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

// Inline list — keep in sync with README.md and PROJECTS.md.
// Update both the source markdown and this list together.
const PUBLIC_LINKS = [
  { name: 'hermes-forge-cli', url: 'https://github.com/JonasAbde/hermes-forge-cli' },
  { name: 'hermes-forge-mcp', url: 'https://github.com/JonasAbde/hermes-forge-mcp' },
  { name: 'worldmind-core', url: 'https://github.com/JonasAbde/worldmind-core' },
  { name: 'leadradar', url: 'https://github.com/JonasAbde/leadradar' },
]

// Cross-check that the URL is mentioned in the source files.
function isInSource(name) {
  const needles = {
    'hermes-forge-cli': ['README.md'],
    'hermes-forge-mcp': ['README.md'],
    'worldmind-core': ['README.md', 'PROJECTS.md'],
    'leadradar': ['README.md', 'PROJECTS.md'],
  }
  for (const file of needles[name] ?? []) {
    const text = readFileSync(resolve(repoRoot, file), 'utf8')
    if (text.includes(`JonasAbde/${name}`)) return true
  }
  return false
}

async function probe({ name, url }) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      headers: { 'user-agent': 'jonasabde-profile-public-link-probe/1.0' },
      signal: AbortSignal.timeout(15_000),
    })
    return {
      name,
      url,
      status: response.status,
      finalUrl: response.url,
      reachable: response.status >= 200 && response.status < 400,
      inSource: isInSource(name),
    }
  } catch (error) {
    return {
      name,
      url,
      status: null,
      finalUrl: null,
      reachable: false,
      inSource: isInSource(name),
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

const results = await Promise.all(PUBLIC_LINKS.map(probe))
const failed = results.filter((r) => !r.reachable)
const orphan = results.filter((r) => !r.inSource)
const ok = results.filter((r) => r.reachable && r.inSource)

const report = {
  check: 'jonasabde-public-links',
  runAt: new Date().toISOString(),
  total: results.length,
  reachable: results.filter((r) => r.reachable).length,
  inSource: results.filter((r) => r.inSource).length,
  ok: ok.length,
  failed: failed.length,
  orphan: orphan.length,
  status: failed.length === 0 && orphan.length === 0 ? 'PASS' : 'FAIL',
  results,
}

console.log(JSON.stringify(report, null, 2))
if (failed.length > 0 || orphan.length > 0) process.exitCode = 1
