# Portfolio Evidence and Claims Ledger

**Review date:** 2026-07-11  
**Purpose:** provide a truthful, recruiter-safe record of what each flagship project demonstrates, what evidence exists, and what must not be overstated.

This document is based on repository metadata, README files, package scripts, canonical status documents, and pull-request history. It is **not** a substitute for a fresh local test/build/deployment run. Test totals and live claims should be refreshed immediately before use in a CV, application, case study, or interview.

## Status definitions

- **Production:** supports a live operational or customer workflow.
- **Advanced prototype / pilot foundation:** substantial working software with open operational, governance, or launch gates.
- **Developer preview:** usable for technical evaluation, but incomplete or environment-dependent.
- **Prototype:** demonstrates an end-to-end concept without full production hardening.
- **R&D:** experimental model, data, or architecture work that must not be presented as proven production capability.

## Evidence matrix

| Project | Current claim | Evidence reviewed | Known limitation | Recruiter-safe wording |
|---|---|---|---|---|
| Rendetalje production platform | Live production business platform | React/Vite/TypeScript package, live domain, Cloudflare-oriented implementation and business workflow documentation | Root scripts currently show build and TypeScript validation, not a broad unit/E2E suite | Built and operates a live React/TypeScript customer platform for a real service business |
| Project Thea | Advanced health-tech prototype and pilot foundation | Canonical product state, React/TypeScript/Node/SQLite architecture, safety/product evals, RAG, trust/security/source gates, extensive test tooling | Conversation core mainly rule-based; custom models remain R&D; identity and launch/governance gates are incomplete | Designed and governed a safety-aware health-tech platform with API, persistence, RAG, evals, security gates, and structured export |
| FridayOS | Governed agentic operations platform in staged release work | Next.js package scripts, repository adapters, security scan, local CI profiles, tests, migration/backup/deploy verification tooling, remaining-work document | Live-provider activation, production smoke, asset, and some release gates remain staged | Built the architecture and verification workflow for an agentic operations control plane with approvals, tools, jobs, artifacts, and audit trails |
| WorldMind Core | Public deterministic simulation/game engine | Public repository, TypeScript/Node/SQLite package, custom validators, save/branch/diff workflows, browser play and authoring tools | Default test command excludes selected patterns; historical README contains inconsistencies; fresh full gate required before quoting counts | Built a deterministic agent simulation engine with authoritative event logs, saves, branching, evidence guards, and custom release validators |
| Project Exodus | Public developer-preview AI platform | Public README/status, FastAPI/React architecture, OpenAI-compatible endpoints, RAG, provider routing, model/eval and readiness tooling | Billing and some traces are placeholders; SDK/data/model/CI work remains incomplete or environment-dependent | Developed a Danish-first AI platform preview with FastAPI, React, compatible APIs, RAG, provider routing, and readiness tooling |
| LeadRadar | Public business-intelligence prototype | Public FastAPI code, TED/CVR/RSS integrations, auth/CSRF, CRM queue, alerts, backup and test files | Raw-IP deployment record, missing HTTPS/domain/SMTP/Stripe/scheduling, limited user data, some weak tests | Built a FastAPI lead-intelligence prototype integrating procurement data, company enrichment, scoring, alerts, and CRM workflows |
| Foodtruck Fiesta web platform | Live supporting web/backend case | Live domain documentation, static/Tailwind frontend, FastAPI/SQLite backend, admin APIs, nginx/systemd, backup and monitoring | Smaller engineering surface and private repository; current live state should be checked before quoting route or event totals | Delivered and operated a live catering website with booking APIs, database-backed admin functions, VPS deployment, monitoring, and SEO |
| Rendetalje Workspace / Nora | Production agent-operations workspace | Private Hermes workspace, skills, scripts, golden-case evals, memory separation, approval/data-safety policies | Not a conventional deployed web application; effectiveness must be demonstrated through workflows and eval evidence | Built a versioned operations-agent workspace with reusable skills, safety policies, evaluations, and automation workflows |

## Verified role statement

Across the flagship projects, my defensible responsibility is:

- identify the user and operational problem;
- define product requirements, scope, workflow, and acceptance criteria;
- choose architecture direction and system boundaries;
- decompose work for coding agents and tools;
- review changes, detect contradictions, and prioritize fixes;
- define and run test, security, release, and deployment gates;
- operate or validate the resulting system in real workflows;
- document limitations rather than presenting roadmap work as shipped.

This does **not** mean every code line was written manually. I use AI coding agents as implementation collaborators and remain accountable for the decisions, review, verification, and operational outcome.

## Claims that require fresh verification

Do not place the following in a CV or application until a current command/output or live check has been recorded:

- exact test totals;
- exact coverage percentages;
- benchmark scores;
- uptime or performance figures;
- active-user or customer counts;
- conversion, productivity, or time-saving percentages;
- production-readiness claims;
- live endpoint availability;
- claims that a model is trained, promoted, or used in the main product path.

## Claims to avoid

- “Senior full-stack engineer” or “AI engineer” without role-specific evidence.
- “Production-ready” for Thea, FridayOS, Exodus, LeadRadar, or experimental model work.
- “Built Hermes Agent” when the upstream framework is from Nous Research.
- “Wrote all code” when coding agents contributed implementation.
- “1,200+ tests pass” or similar totals based only on historical docs or PR descriptions.
- “100% security/compliance” or unsupported automation/productivity percentages.

## Interview evidence package to prepare

For each project selected for a specific job, prepare:

1. A two-minute problem and outcome explanation.
2. A simple architecture diagram.
3. One concrete data flow or user workflow.
4. One failure, defect, or security risk that was found and corrected.
5. One live or recorded demonstration.
6. A current test/build/verification log.
7. A clear explanation of personal responsibility and AI-agent contribution.
8. A known-limitations section.

## Recommended project selection by role

### IT Support / Technical Operations

1. Rendetalje production platform and operations
2. Rendetalje Workspace / Nora
3. Foodtruck Fiesta web/backend operations
4. Lineage Logistics and Onitio experience remain more important than project depth

### Application Support / Implementation

1. Rendetalje production platform
2. Project Thea
3. LeadRadar
4. Foodtruck Fiesta web platform

### Automation / Internal Tools

1. FridayOS
2. Rendetalje Workspace / Nora
3. Project Thea
4. Rendetalje production platform

### Junior Full-Stack

1. Project Thea
2. Rendetalje production platform
3. WorldMind Core
4. Project Exodus or LeadRadar depending on the stack

### AI Platform / Agent Operations

1. FridayOS
2. Project Exodus
3. Project Thea
4. Rendetalje Workspace / Nora

## Security blockers outside the portfolio narrative

The following must be resolved independently of CV/profile improvements:

- make the public personal vault repository private and review exposed operational/personal content;
- complete rotation of any credentials previously committed to the REN repository;
- purge exposed credentials from Git history where required;
- avoid publishing customer data, internal memory, secrets, production logs, or personal operational notes in recruiter-facing repositories.
