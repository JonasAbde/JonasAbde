# JonasAbde profile repository rules

This repository is a Vite + React 19 + Tailwind v4 single-page application that
backs the public `JonasAbde` GitHub profile landing page and portfolio. It is
the only piece of the profile that is owned by the profile maintainer and
that runs in the open; the actual profile README, pinned repositories, profile
fields, and community posts are owned by the GitHub account.

## Scope of this repository

- The SPA itself: `src/`, `public/`, `index.html`, `vite.config.ts`,
  `tsconfig*.json`, `eslint.config.js`, `package.json`.
- Repository-internal documentation: `README.md`, `PROJECTS.md`, `NOW.md`,
  `PORTFOLIO_EVIDENCE.md`, `INTERVIEW_CASES.md`, `STACK.md`, `ROADMAP.md`,
  `BUILDING.md`, `LEARNING.md`, `LABS.md`, `LINKEDIN_PROFILE.md`,
  `VERIFICATION_RUNBOOK.md`, `case-studies/`, `docs/`.

## Out of scope for this repository

- Editing the GitHub profile fields (bio, links, pinned repos, avatar).
- Creating issues, pull requests, discussions, or social posts on the
  GitHub profile, in MCP / OpenTelemetry / CNCF communities, or anywhere
  else. The community and research cadence lives in
  `COMMUNITY_AND_RESEARCH.md` as an operating plan, not as a
  permission to publish.
- Touching other Jonas-owned repositories from here. Each repository
  has its own owner-engineer loop and its own `AGENTS.md` rules.

## Owner-engineer loop

This repository follows the same loop as the other Jonas-owned
repositories:

1. If `.agent/STATE.md` exists, read it; trust it; spot-verify the top
   three claims; resume the queue.
2. If no state, full audit (read README, AGENTS.md, `package.json`,
   lint/build scripts, `git log -30`, open branches, secret scan,
   `npm run lint`, `npm run build`, dev-server smoke probe).
3. Bounded slice, conventional commit, fresh evidence recorded in
   `.agent/BACKLOG.md`.
4. Update `.agent/STATE.md` and `.agent/BACKLOG.md` after every
   completed slice.

## Definition of done for any change

- `npm run lint` exit 0
- `npm run build` exit 0
- Dev server starts and `GET /` and the primary routes (`/`,
  `/projects`, `/services`, `/om`, `/kontakt`, `/projekter/:slug`)
  return HTTP 200
- `git diff --check` exit 0
- For doc changes: no broken internal links and no new credential-shaped
  patterns in the diff
- For behavior changes: a short note in `CHANGELOG.md` is not required
  (this is a portfolio, not a release), but the rationale is recorded
  in the commit body

## Autonomy

- Pre-approved locally: read, edit code/tests/docs/config in scope,
  add standard dev dependencies (`react`, `vite`, `tailwindcss`,
  `eslint`, `typescript`, etc.), commit on the local feature branch.
- Ask first: external accounts and comms (GitHub profile field edits,
  issues, pull requests, community posts, dependency changes that
  cross the `react`/`vite`/`typescript` boundary into runtime tools
  that pull in additional services).
- Never: commit secrets, force-push without an explicit rollback
  decision, or rewrite history that has been pushed.

## Failure

- Three failed attempts on one task: document the findings in the
  commit message, move to the next independent task, flag it in
  `.agent/BACKLOG.md`.
- All tasks blocked: write a blocker report in `.agent/STATE.md` and
  stop.

## Session rule

This is a portfolio repository, not a product repository. The maturity
ladder does not apply; the only gate is "the public site renders, the
docs match the current work, the links resolve". Do not claim a
maturity ceiling or production gate here.
