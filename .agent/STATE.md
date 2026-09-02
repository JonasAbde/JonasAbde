# JonasAbde profile agent state

## Current state

- Status: `PROFILE-LIVE` (portfolio site served by the existing GitHub Pages / Cloudflare Pages contract; this repository is the source of truth for the source files but not for the live deployment).
- Branch: `main`
- HEAD: `b2000fc` (post slice: lint fixes + concise landing page + community/research operating doc + AGENTS.md + `.agent/` ledger seed + public-link probe + `verify:links` script wiring + `verify:local-gate` gate that re-runs lint + build + verify:links in a single command).
- Remote: `origin/main` — local ahead 7, behind 0. No push in this session per `slice-brief.md` scope.
- Last verified local state: `npm run verify:local-gate` status PASS on HEAD `b2000fc` — lint (exit 0, 1719 ms) + build (exit 0, 2111 ms, vite 8.0.10) + `verify:links` (exit 0, 8622 ms, 4/4 URLs reachable). `git diff --check` exit 0.
- Active work item: none — all backlog rows are DONE. The repo is in a clean steady state until the next bounded slice is requested or the owner opens the `git push` decision.
- Session posture: owner-engineer loop on a portfolio repository. The "maturity ladder" gates from the cross-repo mandate do not apply here — see `AGENTS.md`.

## What is proven

- Concise landing page: 4 publicly-reachable repos (HTTP 200 verified for `hermes-forge-cli`, `hermes-forge-mcp`, `worldmind-core`, `leadradar`).
- Honest boundaries: `Project Exodus` is qualified as access-controlled / not anonymously verified; the public GitHub link is intentionally omitted.
- `COMMUNITY_AND_RESEARCH.md` operating plan: 90-day research focus on MCP / OpenTelemetry GenAI / WebAssembly Component Model, weekly + monthly cadence, observable success criteria, official channels per topic, and a research-note + community-post template. Public-vault and historical-secret security blockers still open.
- Lint and build pass on a clean tree; the two pre-existing lint errors (Navbar setState-in-effect, Services unused `_idx`) are fixed.

## Known boundary and blockers

- Live deployment is owned outside this repository (GitHub Pages or Cloudflare Pages), and the exact deployment SHA, deployment timestamp, and post-deploy health check are not recorded here. The slice-brief scope excludes pushing, profile-field edits, and community posts.
- The four public-repo URLs are correct as of the last URL audit but can rot without further notice; the next session should re-probe them before any external claim.
- The 90-day research plan is a plan, not permission. The session rule in `AGENTS.md` keeps community posting and profile-field edits as `Ask first` operations.

## Next actions

1. Re-run the gate with `npm run verify:local-gate` (the single-command re-verify). The four public-repo URLs are re-probed on every `verify:links` run; if any rot, qualify them in `README.md` and `PROJECTS.md` the same way `Project Exodus` is qualified.
2. The only open path that lives outside this repository is `git push origin main`, which the `slice-brief.md` and `AGENTS.md` both reserve for explicit owner approval. When the owner opens that decision, the local gate is already green (lint, build, `verify:links` PASS, `verify:local-gate` PASS, `git diff --check`).
3. Re-baseline this state file and `BACKLOG.md` if a new bounded slice is requested.

## Session rule

This is a portfolio repository. The maturity ladder from the cross-repo mandate is replaced here by a single local gate: the site renders, the docs match the work, the links resolve. Update this file and the backlog after every coherent slice and before stopping.
