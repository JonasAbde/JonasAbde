export interface Project {
  id: string
  title: string
  slug: string
  subtitle: string
  description: string
  longDescription: string
  tech: string[]
  status: 'live' | 'development' | 'planning'
  url?: string
  image?: string
  highlight: boolean
}

export const projects: Project[] = [
  {
    id: 'tilsyn',
    title: 'Tilsyn',
    slug: 'tilsyn',
    subtitle: 'Privat AI- og softwareplatform under udvikling',
    description: 'Systemarkitektur og prototypearbejde med agenter, godkendelser, testbarhed og driftssporbarhed.',
    longDescription: 'Tilsyn er et igangværende privat softwareprojekt med fokus på brugerflader, agent-workflows, sikkerhedsgrænser, test og verificerbare handlinger. Arbejdet er under udvikling, og denne portfolio offentliggør hverken privat kildekode, kundedata eller udokumenterede produktionspåstande.',
    tech: ['TypeScript', 'React', 'Systems Engineering', 'CI/CD'],
    status: 'development',
    highlight: true,
  },
  {
    id: 'tekup',
    title: 'TekUp',
    slug: 'tekup',
    subtitle: 'Teknisk udvikling og driftsautomatisering',
    description: 'Selvstændigt teknologiarbejde med softwareintegrationer og procesautomatisering for mindre virksomheder.',
    longDescription: 'TekUp er rammen om min udvikling af interne værktøjer, integrationer og målrettede automatiseringsløsninger. De enkelte projekter er på forskellige udviklingsstadier. Dette er ikke en påstand om én færdig, kommerciel SaaS-platform.',
    tech: ['TypeScript', 'React', 'Python', 'API Integration', 'Automation'],
    status: 'development',
    highlight: true,
  },
  {
    id: 'rendetalje',
    title: 'Rendetalje',
    slug: 'rendetalje',
    subtitle: 'Kundeside og digitale arbejdsgange',
    description: 'Live kundevendt React/TypeScript-website med tilbudsflow og driftsrelaterede integrationer til en reel servicevirksomhed.',
    longDescription: 'Rendetalje-platformen hjælper kunder med at beskrive deres rengøringsbehov og sende strukturerede forespørgsler. Jeg arbejder med produktkrav, prislogik, frontend, Cloudflare-baserede funktioner og løbende driftsforbedringer. Fuldt booking-, løn- og regnskabssystem er ikke dokumenteret som leveret i denne offentlige case.',
    tech: ['React', 'TypeScript', 'Vite', 'Cloudflare', 'Web Forms'],
    status: 'live',
    url: 'https://rendetalje.dk',
    highlight: true,
  },
  {
    id: 'foodtruck-fiesta',
    title: 'Foodtruck Fiesta',
    slug: 'foodtruck-fiesta',
    subtitle: 'Cateringwebsite og bookingforespørgsler',
    description: 'Kundevendt website med eventinformation, cateringtilbud og formular til bookingforespørgsler.',
    longDescription: 'Foodtruck Fiesta viser menuer og cateringkoncepter, håndterer indledende bookingforespørgsler og formidler praktisk eventinformation. Den offentlige side dokumenterer ikke en fuldt integreret betalings- eller reservationsplatform.',
    tech: ['Web', 'Contact Forms', 'Business Operations'],
    status: 'live',
    url: 'https://foodtruckfiesta.dk',
    highlight: true,
  },
  {
    id: 'webtjek',
    title: 'WebTjek',
    slug: 'webtjek',
    subtitle: 'Eksperiment med websitekontrol',
    description: 'Privat prototype til analyse af hjemmesiders tekniske kvalitet og vedligeholdelsesopgaver.',
    longDescription: 'WebTjek undersøger automatiseret teknisk kvalitetskontrol som links, metadata og fejlrapporter. Projektet er ikke offentligt verificeret som en kontinuerlig produktionstjeneste eller en komplet sikkerhedsscanner.',
    tech: ['Python', 'FastAPI', 'Automation', 'HTTP'],
    status: 'development',
    highlight: false,
  },
  {
    id: 'leadradar',
    title: 'LeadRadar',
    slug: 'leadradar',
    subtitle: 'Intelligent leadgenerering',
    description: 'Automatiseret system der opsporer og kvalificerer leads gennem offentlige data og smart analyse.',
    longDescription: 'LeadRadar er et automatiseret leadgenereringssystem der scanner offentlige datakilder, analyserer virksomheder og leverer kvalificerede leads direkte. Designet til SMB\'er der vil vækste uden at bruge timer på manuel research.',
    tech: ['Python', 'FastAPI', 'SQLite', 'CVR API', 'LLM', 'Cron'],
    status: 'development',
    highlight: true,
  },
  {
    id: 'hermes-forge',
    title: 'Hermes Forge',
    slug: 'hermes-forge',
    subtitle: 'Værktøjer til AI-agentintegration',
    description: 'Udviklingsarbejde omkring CLI, MCP-værktøjer og agent-workflows med offentligt tilgængelige kodeprojekter.',
    longDescription: 'Hermes Forge-arbejdet undersøger udviklerværktøjer, MCP-integrationer og automatisering. Delprojekter kan undersøges i de offentlige repositories, men fuld platformdrift, eksterne services og produktionsstatus er ikke verificeret af denne portfolio.',
    tech: ['TypeScript', 'MCP', 'Node.js', 'Automation'],
    status: 'development',
    highlight: true,
  },
  {
    id: 'roro-luxury',
    title: 'Roro Luxury House',
    slug: 'roro-luxury',
    subtitle: 'Luksus brand-oplevelse (kommende)',
    description: 'Premium brand-hjemmeside med booking, e-commerce og medlemsportal for et luksus skønhedshus.',
    longDescription: 'Roro Luxury House bliver en komplet digital oplevelse for et luksus skønhedshus. Platformen inkluderer booking, e-commerce, medlemsportal og admin-dashboard — alt med et eksklusivt, gennemført design.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'TailwindCSS', 'Stripe'],
    status: 'planning',
    highlight: false,
  },
]
