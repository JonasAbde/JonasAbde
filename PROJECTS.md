# Selected Project Portfolio

## Current shortlist for technical recruiters (October 2026)

For **IT support and operations**, start with the practical employer experience in the [profile README](README.md): Lineage Logistics (Microsoft 365, Okta, ServiceNow, onboarding and workplace troubleshooting) and Onitio / Danske Bank (onsite deployment).

For **software and automation**, these are the most defensible examples:

- **Rendetalje:** working customer-facing React/TypeScript website and quote workflow. [Customer site](https://rendetalje.dk). Do not infer a complete internal payroll, accounting or booking suite from the public website.
- **Tilsyn:** private, ongoing AI/software systems engineering. Work in progress, not a public production release; no customer data or private implementation details are shared here.
- **[WorldMind Core](https://github.com/JonasAbde/worldmind-core):** inspectable experimental simulation software with event-oriented modeling and verification tooling.
- **[LeadRadar](https://github.com/JonasAbde/leadradar):** inspectable FastAPI prototype; live hosting, integration readiness and all claimed metrics need fresh evidence.

**Provenance:** Detailed project writeups below are historical case notes first prepared in July 2026. Some retain earlier product names (including FridayOS). They are preserved for technical interview context, not as an authoritative statement about current platform naming, deployed state, professional employment duration, or passing CI. The [evidence ledger](PORTFOLIO_EVIDENCE.md) specifies what requires fresh verification.

---

This portfolio prioritizes projects that demonstrate real operational use, coherent architecture, testing and verification discipline, deployment experience, and decisions I can explain in a technical interview.

Repository size and commit count are not selection criteria by themselves. Some projects are private because they contain active business logic or unreleased product code.

## 1. Rendetalje production platform

**Type:** live customer-facing business platform
**Status:** production
**Live:** https://rendetalje.dk
**Repository:** private

A React and TypeScript platform supporting quotes, pricing, customer enquiries, search visibility, and digital workflows for a real cleaning company.

### What it demonstrates

- React 19, Vite, TypeScript strict mode, and Tailwind CSS
- Cloudflare Pages Functions and transactional email integration
- Multi-step quote flow and pricing logic
- SEO, structured data, analytics, accessibility, and performance work
- Security headers and production deployment
- Iteration based on real customer and operations feedback

### My role

Product direction, workflow definition, requirements, review, deployment, operational validation, and AI-assisted implementation management.

### Honest boundary

This is the strongest business and production case, but its current package scripts document build and TypeScript validation rather than a broad unit/E2E test suite. I do not claim test coverage that has not been freshly verified.

---

## 2. Project Thea

**Type:** private safety-aware health-tech platform
**Status:** advanced prototype and pilot foundation
**Repository:** private

A Danish citizen-centered platform for understanding health information, structuring symptoms and timelines, preparing questions, generating summaries, and surfacing red-flag guidance.

### What it demonstrates

- React 19, TypeScript, Node.js, SQLite, authentication, persistence, and rate limiting
- Safety engine with product and safety evaluation suites
- RAG, Danish health-source handling, document interpretation, and citation surfaces
- FHIR/EHDS-oriented export work and audit/consent concepts
- Playwright, Vitest, trust checks, prompt-injection tests, source-license gates, and release tooling
- Detailed product, architecture, governance, safety, and operations documentation

### My role

Product architecture, requirements, safety boundaries, task decomposition, agent coordination, review, verification-gate definition, deployment direction, and release decisions.

### Honest boundary

The product is not an autonomous doctor. The canonical project state documents a mainly rule-based conversation core, custom-model R&D, staged identity integration, and open operational/governance launch gates.

---

## 3. FridayOS

**Type:** private governed agentic operations platform
**Status:** active foundation and staged release work
**Repository:** private

A control plane for agents, providers, workspaces, approvals, permissions, runtime jobs, artifacts, usage records, audit trails, MCP tools, and operational verification.

### What it demonstrates

- Next.js App Router and API architecture
- Repository abstractions across JSON, PGlite, and PostgreSQL
- Approval gates, security middleware, rate limiting, and negative-path tests
- Runtime ledgers, jobs, artifacts, usage records, backups, and diagnostics
- Local CI profiles, database migration tools, deployment checks, and browser smoke tooling

### My role

Product architecture, requirements, decomposition, coding-agent coordination, review, security decisions, test-gate definition, release management, and operational verification.

### Honest boundary

The platform has substantial engineering foundations, but some provider activation, live-smoke, asset, and production-readiness checks remain staged. It is not presented as universally production-ready.

---

## 4. WorldMind Core

**Type:** public deterministic simulation and gameplay engine
**Status:** active v1 platform
**Repository:** https://github.com/JonasAbde/worldmind-core

A simulation-first engine where an authoritative event log drives agent memory, relationships, rumors, economy, incidents, saves, branches, and evidence-gated story outcomes.

### What it demonstrates

- TypeScript and Node.js architecture with SQLite persistence
- Deterministic save, restore, branch, timeline, and state-diff workflows
- CLI, browser play UI, 3D client, and browser authoring tools
- Scenario, state, event-log, risk, content-pack, asset, and release validators
- Procedural GLB and texture tooling

### My role

Product and simulation design, system boundaries, data contracts, deterministic requirements, feature decomposition, review, test/validator design, and AI-assisted implementation orchestration.

### Honest boundary

The repository contains a long historical README and its default test command excludes some legacy patterns. Test totals must be quoted only after a fresh `test:all` and release-gate run.

---

## 5. Project Exodus

**Type:** developer-preview AI platform
**Status:** developer preview
**Repository:** access-controlled or otherwise not anonymously verified; public link intentionally omitted

A FastAPI and React platform combining OpenAI-compatible API surfaces, RAG, model/provider routing, sessions, evaluation tooling, documentation, and readiness views.

### What it demonstrates

- Python/FastAPI backend and React/TypeScript product surfaces
- OpenAI-compatible endpoints, model registry, RAG, and provider routing
- llama.cpp/GGUF-oriented model serving paths
- SDK, deployment, monitoring, security, and claims-governance work

### Honest boundary

It remains a developer preview. Billing, some traces, SDK hardening, hosted CI availability, and parts of the data/model pipeline are incomplete or environment-dependent. It should not be presented as a public repository until an anonymous visitor can reach the intended source and documentation.

---

## 6. LeadRadar

**Type:** public business-intelligence prototype
**Status:** prototype / shipping preparation
**Repository:** https://github.com/JonasAbde/leadradar

A FastAPI application that aggregates public procurement and company signals, enriches them, and scores potential leads.

### What it demonstrates

- Python, FastAPI, SQLAlchemy, SQLite, and Jinja2
- EU TED tenders, CVR enrichment, and RSS ingestion
- Authentication, CSRF protection, rate limiting, background jobs, and CRM queue concepts
- Filtering, lead actions, alerts, and CSV export

### Honest boundary

The recorded deployment used a raw IP without HTTPS, and Stripe, SMTP, domain, scheduling, and broader user validation remained incomplete. Parts of the test suite also need hardening.

---

## Supporting work

- **Foodtruck Fiesta web platform:** live static/FastAPI/SQLite system with booking, events, admin APIs, nginx/systemd deployment, backups, monitoring, SEO, and structured data.
- **Rendetalje Workspace / Nora:** versioned Hermes agent workspace with skills, memory separation, golden-case evaluations, automation scripts, approval workflows, and data-safety policies.
- **Friday Voice App:** Flutter/BLoC voice-assistant interface using WebSockets, speech-to-text, text-to-speech, and automated tests.
- **IT and embedded projects:** Raspberry Pi Pico networking, UDP/MicroPython work, MQTT robot-car experiments, NAS/ZFS setup, and infrastructure exercises.

## Portfolio evidence policy

A project is described according to its actual state:

1. **Production** only when it supports a live operational workflow.
2. **Developer preview, prototype, or R&D** when launch or product gates remain open.
3. Test totals are used only after a fresh reproducible run.
4. Private repositories are supported with architecture, selected code review, screenshots, or live demonstration rather than unverifiable claims.
5. AI-assisted code is described transparently. My contribution is requirements, architecture direction, decomposition, review, debugging, verification, security, deployment, and operational ownership — not a claim that every line was typed manually.

See [PORTFOLIO_EVIDENCE.md](PORTFOLIO_EVIDENCE.md) for the current claims ledger and known limitations.
