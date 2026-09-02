# JonasAbde profile agent state

## Current state

- Status: `PROFILE-LIVE` (portfolio site served by the existing GitHub Pages / Cloudflare Pages contract; this repository is the source of truth for the source files but not for the live deployment).
- Branch: `main`
- HEAD: `928e725` (post slice: lint fixes + concise landing page + community/research operating doc).
- Remote: `origin/main` — local ahead 2, behind 0. No push in this session per `slice-brief.md` scope.
- Last verified local state: `npm run lint` exit 0, `npm run build` exit 0, dev server `GET /` and `/projects` HTTP 200, `git diff --check` exit 0.
- Active work item: `JONAS-DOC-001` (closed; see backlog). The repo is in a clean steady state until the next bounded slice is requested.
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

1. Re-probe the four public-repo URLs in `README.md` and `PROJECTS.md`; qualify or replace any that no longer return HTTP 200.
2. When the owner wants to publish: `git push origin main` (slice-brief-scope permitting) and the standard Vite deploy path; do not touch the GitHub profile fields or community accounts from this repository.
3. Re-baseline this state file and `BACKLOG.md` if a new bounded slice is requested.

## Session rule

This is a portfolio repository. The maturity ladder from the cross-repo mandate is replaced here by a single local gate: the site renders, the docs match the work, the links resolve. Update this file and the backlog after every coherent slice and before stopping.
