# Flagship Verification Runbook

**Prepared:** 2026-07-11  
**Purpose:** create fresh, reproducible evidence before quoting test totals, benchmarks, live status, performance, or production-readiness claims in a CV, application, case study, LinkedIn post, or interview.

## Evidence rule

A repository document, old PR description, or commit message is historical evidence—not a fresh pass.

A claim becomes current only when the following are recorded together:

- repository and exact commit SHA;
- date and time;
- operating system and runtime versions;
- clean or intentionally documented working tree;
- install command and dependency-lock result;
- complete verification command;
- exit code;
- pass/fail counts copied from the actual output;
- environment-dependent checks separated from local checks;
- artifact, log, or sanitized screenshot location;
- known skipped, waived, or unavailable gates.

Do not treat an absent GitHub status check as a pass. Hosted GitHub Actions may be unavailable because of account/billing restrictions; use local verification plus Fly.io or Cloudflare production checks where appropriate.

## Baselines observed during documentation review

These SHAs identify the repository state that was inspected. They are not proof that the commands below passed.

| Project | Default branch | Observed head | Verification state |
|---|---|---|---|
| Rendetalje Worker | `main` | `ce3c0e531cae57145440eb3be738cef77125cf72` | Package scripts and quote handler inspected; fresh commands not run in this review |
| Project Thea | `main` | `2792fa295e29d314748c7d171837b157dcef1dcb` | Package gates and canonical status inspected; no current hosted status checks returned |
| FridayOS | `main` | `50798033a418671df13c204b7a481928faff5240` | Package gates and remaining-work document inspected; fresh commands not run in this review |
| WorldMind Core | `master` | `638042b8ddd266c90d02fd31bdfcecb3bfe59531` | Package gates and architecture README inspected; fresh commands not run in this review |

## Standard evidence header

Copy this block into a dated log for every run:

```text
Project:
Repository:
Branch:
Commit SHA:
Date/time:
Machine/OS:
Node:
npm/pnpm:
Python (if relevant):
Working tree:
Install command:
Verification command:
Exit code:
Tests passed/failed/skipped:
Build output:
Security findings:
Environment-dependent checks:
Artifacts/logs:
Known limitations:
Verdict: VERIFIED / PARTIAL / FAILED / BLOCKED
```

---

# 1. Rendetalje Worker

## Repository-local verification

```bash
git switch main
git pull --ff-only
git status --short
git rev-parse HEAD
node --version
npm --version
npm ci
npm run lint
npm run build
```

Expected meaning:

- `npm run lint` is currently `tsc --noEmit`; it verifies TypeScript, not stylistic lint rules.
- `npm run build` verifies the Vite production bundle.
- There is currently no documented root unit/E2E test command, so do not report automated test coverage.

## Safe quote-handler checks

Do not send a real customer email from an automated test without an explicitly controlled test recipient and test Resend credential.

Minimum test matrix to add or run with a mocked email endpoint:

- OPTIONS returns 204;
- GET returns 405;
- forbidden origin returns 403;
- non-JSON returns 415;
- oversized body returns 413;
- invalid JSON returns 400;
- missing fields return 422;
- invalid service type returns 422;
- honeypot/spam input is rejected;
- missing or malformed email configuration returns 503;
- valid request calls the primary email path;
- auto-reply failure does not fail the primary request;
- Resend timeout or primary error returns a safe 500 response without secret leakage.

## Production smoke — read-only

Use Cloudflare/HTTP checks without submitting customer data:

```bash
curl -sS -o /dev/null -w '%{http_code}\n' https://rendetalje.dk/
curl -sS -o /dev/null -w '%{http_code}\n' https://rendetalje.dk/kontakt
curl -sS https://rendetalje.dk/robots.txt
curl -sSI https://rendetalje.dk/ | sed -n '1,30p'
```

Record:

- status codes;
- canonical redirect behavior;
- CSP, HSTS, X-Content-Type-Options, Referrer-Policy, and other relevant headers;
- no public exposure of server-side credentials;
- manual browser test of responsive navigation and quote steps.

## Verdict rules

- **VERIFIED:** clean install, typecheck, build, read-only production smoke, and a controlled quote integration test pass.
- **PARTIAL:** typecheck/build pass but quote integration or production smoke is not executed.
- **FAILED:** build/typecheck fails or production/customer flow is broken.

---

# 2. Project Thea

## Fast local gate

```bash
git switch main
git pull --ff-only
git status --short
git rev-parse HEAD
node --version
pnpm --version
pnpm install --frozen-lockfile
pnpm typecheck
pnpm test
pnpm safety:eval
pnpm product:eval
pnpm trust:verify
```

## Repository verification gate

```bash
pnpm verify:all
```

This combines typecheck, API/marketing builds, tests, marketing verification, safety and product evals, source checks, third-party-LLM guard, commercial-license guard, and model-rollout checks according to the current package script.

## Full CI-style gate

```bash
pnpm ci:full
```

Run this only after reading the current script and confirming required ports, services, browser dependencies, and environment variables. Record any skipped E2E or marketing phases explicitly.

## E2E and operational checks

```bash
pnpm test:e2e
pnpm ops:readiness
pnpm ops:smoke
pnpm gate:closure
```

Environment-sensitive items must be separated from local correctness. A live smoke may require the deployed API, valid non-production credentials, and explicit authorization.

## Safety evidence to record

- total unit/integration result from the current run;
- safety eval pass/fail and any changed cases;
- product eval pass/fail;
- trust-boundary tests;
- source-registry and license result;
- prompt-injection/security-runtime result if run separately;
- one emergency, one urgent, one normal, and one medication-change case;
- proof that citizen/workspace ownership tests pass;
- model/provider status and whether the custom model is actually in the product path.

## Verdict rules

- **VERIFIED TECHNICAL BASELINE:** `verify:all` passes at the recorded SHA.
- **VERIFIED PILOT GATE:** technical baseline plus E2E, readiness, operational smoke, governance and pilot checks pass.
- **PARTIAL:** core tests pass but source, rollout, E2E, production, or governance gates remain open.
- Never convert a technical pass into a clinical-validation claim.

---

# 3. FridayOS

## Strict local verification

```bash
git switch main
git pull --ff-only
git status --short
git rev-parse HEAD
node --version
npm --version
npm ci
npm run scan:security
npm run typecheck
npm run build
npm test
npm run test:security
```

Equivalent packaged gate:

```bash
npm run verify:strict
```

## Release-oriented local gate

```bash
npm run ci:release
npm run ci:smoke
```

Or:

```bash
npm run ci:repo-green
```

Do not assume these commands are identical to production verification. Record the steps selected by the pipeline profile and the resulting artifacts.

## Additional release checks

```bash
npm run deploy:check
npm run db:check
npm run asset:validate
npm run deploy:verify
```

Some checks require a deployed environment or generated/tracked bundles. Mark them BLOCKED rather than passing them by omission.

## Provider and Marketplace evidence

Before describing a provider as production-active, record:

- required OAuth/API secrets are configured through the approved secret store;
- encryption key and token-exchange flags are configured;
- live-provider smoke is enabled only in the intended environment;
- readiness endpoint passes;
- manual provider smoke passes with a controlled account;
- activation is blocked after a failed or missing smoke;
- rollback checkpoint is documented;
- no token or sensitive response data appears in logs, screenshots, or evidence docs.

## Verdict rules

- **VERIFIED LOCAL FOUNDATION:** strict and release local gates pass.
- **VERIFIED PROVIDER:** local foundation plus readiness and controlled live-provider smoke pass for that named provider.
- **VERIFIED PRODUCTION RELEASE:** local foundation, asset/deploy checks, migration/backup posture, deployed smoke, and rollback evidence pass.
- **PARTIAL:** any provider, asset, production-secret, or deploy gate remains open.

---

# 4. WorldMind Core

## Full local verification

The default `npm test` excludes selected patterns. Use `test:all` for current totals.

```bash
git switch master
git pull --ff-only
git status --short
git rev-parse HEAD
node --version
npm --version
npm ci
npm run typecheck
npm run test:all
npm run ci:gate
npm run audit:worldmind
npm run release:verify
```

## Determinism evidence

Record at least:

- two identical canonical runs and the event-log diff result;
- scenario and state validation;
- strict risk/permission validation;
- save creation and inspect output;
- restore result;
- branch origin metadata;
- structured diff between two snapshots;
- Leno hidden-truth/evidence guard result;
- secret-leakage and audit result.

Useful individual commands when isolating a failure:

```bash
npm run check
npm run validate:state
npm run validate:risk:strict
npm run validate:event-log:strict
npm run diff:canonical
npm run diff:event-log
npm run validate:leno
npm run validate:web-play
npm run validate:play-api
npm run assets:validate
```

## Manual demo evidence

```bash
npm run demo:play
npm run play:server
```

Then record a short, sanitized screen capture demonstrating:

- a player action;
- an authoritative event;
- resulting state or relationship change;
- save and branch;
- restore or diff;
- evidence-gated Leno response.

## Verdict rules

- **VERIFIED ENGINE:** typecheck, `test:all`, `ci:gate`, audit, and release verification pass.
- **VERIFIED DEMO:** engine verification plus a repeatable browser/CLI demonstration.
- **PARTIAL:** default tests pass but full, deterministic, asset, audit, or release gates do not.

---

# Evidence log structure

Store sanitized logs under a non-sensitive portfolio evidence location, for example:

```text
evidence/
  2026-07-11-rendetalje-worker.md
  2026-07-11-project-thea.md
  2026-07-11-fridayos.md
  2026-07-11-worldmind-core.md
```

Do not commit:

- `.env` files;
- tokens, keys, cookies, session identifiers, or provider payloads;
- customer names, emails, addresses, messages, invoices, or lead data;
- production database dumps;
- raw health data;
- private agent memory;
- screenshots with browser autofill, internal URLs, notifications, or credentials.

# Updating public claims after verification

Only after a successful dated run:

1. update `PORTFOLIO_EVIDENCE.md` with the SHA and command;
2. quote only the current result;
3. state skipped or environment-dependent gates;
4. keep the product-status boundary unchanged unless launch evidence also changed;
5. use the same wording across CV, LinkedIn, GitHub, and interview notes.
