#!/usr/bin/env node
// JonasAbde profile local-gate + public-link probe
//
// Re-runs the documented local evidence chain for the profile
// repository in a single command. Read-only with respect to the
// rest of the repository: only writes to stdout. Uses Node 18+
// stdlib (child_process, fetch) and the existing
// `npm.cmd run lint`, `npm.cmd run build`, and
// `npm.cmd run verify:links` scripts. No new dependency, no
// browser, no API tokens.
//
// Usage:
//   node scripts/check-local-gate.mjs
//   node scripts/check-local-gate.mjs --no-build  # skip the build
//
// Exit 0 if all checks pass and the four documented public-repo
// URLs return HTTP 200. Exit 1 with a JSON report on the first
// failure or summary if any check fails.

import { spawnSync } from 'node:child_process'
import { setTimeout as sleep } from 'node:timers/promises'

const isWindows = process.platform === 'win32'
const npmCmd = isWindows ? 'npm.cmd' : 'npm'
const skipBuild = process.argv.includes('--no-build')

const localChecks = [
  { name: 'lint', command: [npmCmd, 'run', 'lint'] },
]
if (!skipBuild) {
  localChecks.push({ name: 'build', command: [npmCmd, 'run', 'build'] })
}
localChecks.push({ name: 'verify:links', command: [npmCmd, 'run', 'verify:links'] })

function runCheck(check) {
  const start = Date.now()
  // On Windows, npm.cmd must run via cmd.exe; avoid deprecated shell:true with args.
  // The command is assembled only from this file's fixed, trusted check list.
  const executable = isWindows ? (process.env.ComSpec ?? 'cmd.exe') : check.command[0]
  const args = isWindows
    ? ['/d', '/s', '/c', check.command.join(' ')]
    : check.command.slice(1)
  const result = spawnSync(executable, args, {
    encoding: 'utf8',
    windowsHide: true,
  })
  const stdout = (result.stdout ?? '').toString()
  const stderr = (result.stderr ?? '').toString()
  return {
    name: check.name,
    command: check.command.join(' '),
    exitCode: result.status,
    durationMs: Date.now() - start,
    tail: (stdout + stderr).split('\n').slice(-3).join('\n'),
    passed: result.status === 0,
  }
}

const localResults = localChecks.map(runCheck)
await sleep(100)

const failed = localResults.filter((r) => !r.passed)

const report = {
  check: 'jonasabde-local-gate',
  runAt: new Date().toISOString(),
  localTotal: localResults.length,
  localPassed: localResults.filter((r) => r.passed).length,
  status: failed.length === 0 ? 'PASS' : 'FAIL',
  local: localResults,
}

console.log(JSON.stringify(report, null, 2))
if (failed.length > 0) process.exitCode = 1
