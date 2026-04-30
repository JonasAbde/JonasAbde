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
    id: 'tekup',
    title: 'TekUp',
    slug: 'tekup',
    subtitle: 'AI-drevet drift til service-SMB\'er',
    description: 'Platform der gør det muligt for små servicevirksomheder at automatisere booking, fakturering og kundekommunikation.',
    longDescription: 'TekUp er en AI-drevet driftsplatform til danske service-SMB\'er. Platformen håndterer booking, fakturering, kundekommunikation og planlægning — så ejeren kan fokusere på driften. Bygget med moderne webteknologi og fokuseret på enkelhed.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'TailwindCSS', 'Docker'],
    status: 'development',
    highlight: true,
  },
  {
    id: 'rendetalje',
    title: 'Rendetalje',
    slug: 'rendetalje',
    subtitle: 'Driftssystem til rengøringsvirksomhed',
    description: 'Komplet bookingsystem, kalenderstyring, fakturering og medarbejderstyring til en voksende rengøringsvirksomhed.',
    longDescription: 'Rendetalje er et selvstændigt driftssystem bygget til en rengøringsvirksomhed i vækst. Systemet dækker alt fra automatisk booking og kundeadministration til fakturering, lønberegning og månedsluk. Bygget med fokus på automatisering og minimal manuel indsats.',
    tech: ['Flutter', 'FastAPI', 'PostgreSQL', 'Google API', 'Docker', 'CI/CD'],
    status: 'live',
    url: 'https://foodtruckfiesta.dk',
    highlight: true,
  },
  {
    id: 'foodtruck-fiesta',
    title: 'Foodtruck Fiesta',
    slug: 'foodtruck-fiesta',
    subtitle: 'Book din yndlingsfoodtruck',
    description: 'Bookingsplatform hvor gæster kan finde og booke foodtrucks til events, markeder og private fester.',
    longDescription: 'Foodtruck Fiesta er en bookingsplatform der forbinder gæster med foodtrucks. Platformen tilbyder søgning, booking og betaling — alt samlet ét sted. Bygget som en selvstændig service med fokus på brugeroplevelse.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx'],
    status: 'live',
    url: 'https://foodtruckfiesta.dk',
    highlight: true,
  },
  {
    id: 'webtjek',
    title: 'WebTjek',
    slug: 'webtjek',
    subtitle: 'Automatisk website-overvågning',
    description: 'Overvågningsværktøj der automatisk scanner hjemmesider for tekniske problemer, sikkerhedshuller og performance.',
    longDescription: 'WebTjek er et automatisk overvågningsværktøj der scanner hjemmesider for tekniske problemer. Fra broken links og sikkerhedshuller til performance-metrics — WebTjek giver et komplet overblik over din websites sundhed.',
    tech: ['FastAPI', 'Python', 'SQLite', 'LLM', 'Cron', 'VPS'],
    status: 'live',
    highlight: true,
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
    subtitle: 'AI-agent infrastruktur',
    description: 'Avanceret multi-model AI-agent platform med værktøjsintegration, automatisering og selvstændig eksekvering.',
    longDescription: 'Hermes Forge er en AI-agent platform der kombinerer flere sprogmodeller med værktøjsintegration, cron-job-styring og autonom eksekvering. Platformen understøtter alt fra kodegenerering til forretningsprocesautomatisering.',
    tech: ['Python', 'LLM', 'MCP', 'API Gateway', 'Docker', 'Cron'],
    status: 'live',
    highlight: false,
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
