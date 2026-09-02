# JonasAbde profile backlog and evidence ledger

Status vocabulary: `TODO`, `DOING`, `DONE`, `BLOCKED`. A task is not `DONE` without fresh evidence recorded here.

## Active queue

| ID | Priority | Status | Task | Acceptance evidence |
| --- | --- | --- | --- | --- |
| JONAS-DOC-001 | P2 | DONE | Land the concise landing page + community/research operating doc from `slice-brief.md`. | Commits `d376d37` (lint fixes) and `928e725` (4-file doc slice + new `COMMUNITY_AND_RESEARCH.md`) on top of `a54948b`. Lint exit 0, build exit 0, dev server `/` and `/projects` HTTP 200, `git diff --check` exit 0. Public-repo URLs anonymously reachable (HTTP 200). Scope excludes push, profile-field edits, and community posts per `slice-brief.md`. |
| JONAS-URL-001 | P3 | DOING | Re-probe the four public-repo URLs (`hermes-forge-cli`, `hermes-forge-mcp`, `worldmind-core`, `leadradar`) and qualify or replace any that no longer return HTTP 200. | One curl probe per URL with status code; the README and `PROJECTS.md` table updated to match. |
| JONAS-AGENTS-001 | P3 | DONE | Seed `AGENTS.md`, `.agent/STATE.md`, and `.agent/BACKLOG.md` so future sessions can resume without re-auditing. | This file plus `AGENTS.md` and `.agent/STATE.md` committed on top of the current exact head. |
| JONAS-LOCAL-GATE-001 | P3 | DONE | Add a one-command local gate that re-runs the documented evidence chain in a single run. | Commit `b2000fc`: `scripts/check-local-gate.mjs` runs `npm run lint` + `npm run build` + `npm run verify:links` and exits 0 on the current head. `package.json` wires it as `verify:local-gate`. Read-only with respect to the repository; Node 18+ stdlib only; no new dependency. Run results on HEAD `b2000fc`: lint 1719 ms, build 2111 ms, verify:links 8622 ms (4/4 URLs reachable), status PASS. Mirrors the same shape Jonas' other repositories use for their local gate. |

## Maturity gates

This is a portfolio repository. The cross-repo maturity ladder (MVP -> ALPHA -> BETA -> RC -> PRODUCTION) does not apply; the only local gate is "the public site renders, the docs match the work, the links resolve".

## Evidence policy

- Local `npm run lint`, `npm run build`, and dev-server HTTP probes are the authoritative local evidence for the site contract.
- The exact deployment SHA, deployment timestamp, and post-deploy health check live outside this repository and are not part of the local evidence row.
- Public-repo URL reachability is spot-checked, not continuously monitored; a stale link is a known hazard.
- All changes are local until the owner explicitly approves `git push origin main` per the slice-brief scope.
