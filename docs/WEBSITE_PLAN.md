# Jonas Abde — Personligt Website

**Domæne:** https://jonasabde.dk (planlagt)
**Stack:** React + Vite + TypeScript + TailwindCSS v4 + Framer Motion
**Status:** Pre-lancering (byggeri færdig, mangler DNS + HTTPS)

## Arkitektur

```
src/
├── data/           # Types og data (projects.ts, services.ts, settings.ts)
├── lib/            # Hjælpefunktioner (schema.ts, seo.tsx)
├── components/
│   ├── ui/         # Primitives (Button, Container, GlassCard, Section, Badge, Icons)
│   ├── layout/     # Navbar, Footer
│   └── sections/   # Homepage sektioner (Hero, TrustStrip, FeaturedProjects, etc.)
├── pages/          # Routes (Home, Projects, ProjectDetail, Services, About, Contact, NotFound)
├── App.tsx         # Router setup med AnimatePresence
├── main.tsx        # Entry point med BrowserRouter + HelmetProvider
└── index.css       # Tailwind v4 theme tokens
```

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | HomePage | Hero + featured projects + services + CTA |
| `/projekter` | ProjectsPage | All projects grid |
| `/projekter/:slug` | ProjectDetail | Single project |
| `/services` | ServicesPage | All services |
| `/om` | AboutPage | About me |
| `/kontakt` | ContactPage | Contact form (UI only) |
| `*` | NotFound | 404 |

## Build & Deploy

```bash
npm run build           # tsc + vite build → dist/
npm run dev             # Development server
```

## Nginx Preview (current)

Kører på port 3002 på VPS: http://VPS-IP:3002

For HTTPS: Sæt DNS A record → `sudo certbot --nginx -d jonasabde.dk`

## Missing Assets

- `/public/images/og-default.jpg` — Open Graph default image (1200×630px)
- Profilbillede til About-siden
- Screenshots til projekt-kort

## Design System

- **Primary:** `#6366f1` (indigo)
- **Accent:** `#22d3ee` (cyan)
- **Surface:** `#0a0a0f` (deep dark)
- **Fonts:** Inter (sans), JetBrains Mono (mono), Playfair Display (display)
- **Components:** Glassmorphism, gradient accents, framer-motion scroll animations
