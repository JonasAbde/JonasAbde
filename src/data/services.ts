export interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  details: string[]
  iconName: string
}

export const services: Service[] = [
  {
    id: 'websites',
    title: 'Hjemmesider & Landingssider',
    subtitle: 'Moderne, responsive sites der konverterer',
    description: 'Jeg bygger professionelle hjemmesider og landingssider med fokus på hastighed, SEO og konvertering. Fra en enkel underside til en komplet brand-oplevelse.',
    details: [
      'React/Vite frontend med TypeScript',
      'TailwindCSS design-system',
      'Responsivt og mobil-optimeredet',
      'SEO-optimeret med JSON-LD',
      'Framer Motion animationer',
      'Lighthouse score 95+'
    ],
    iconName: 'Monitor',
  },
  {
    id: 'webapps',
    title: 'Webapps & Dashboards',
    subtitle: 'Funktionelle værktøjer til din forretning',
    description: 'Jeg udvikler skræddersyede webapplikationer — fra interne dashboards til kundevendte platforme med brugere, autentificering og data.',
    details: [
      'React SPA med routing',
      'FastAPI eller Node.js backend',
      'PostgreSQL / SQLite database',
      'REST/JSON API design',
      'Autentificering & adgangsstyring',
      'Responsiv admin-panel'
    ],
    iconName: 'LayoutDashboard',
  },
  {
    id: 'ai-automation',
    title: 'AI-agenter & Automatisering',
    subtitle: 'Intelligent automatisering af dine processer',
    description: 'Jeg bygger AI-drevne systemer der automatiserer opgaver, analyserer data og træffer beslutninger — fra leadgenerering til driftsovervågning.',
    details: [
      'Multi-model AI agenter',
      'Automatiseret data-analyse',
      'LLM-integration & prompt engineering',
      'Cron-baserede arbejdsgange',
      'MCP-server integration',
      'Webhook & event-drevet arkitektur'
    ],
    iconName: 'Brain',
  },
  {
    id: 'business-systemer',
    title: 'Forretningssystemer',
    subtitle: 'Interne værktøjer der sparer tid',
    description: 'Jeg bygger interne systemer der automatiserer dine forretningsprocesser — booking, fakturering, kundeadministration og planlægning.',
    details: [
      'Bookingsystemer med kalender',
      'Fakturering & betalingsflow',
      'Kunde-CRM & administration',
      'Medarbejderstyring & planlægning',
      'Rapportering & dashboards',
      'Integration med Google Workspace'
    ],
    iconName: 'Building2',
  },
  {
    id: 'portaler',
    title: 'Booking & Kundportaler',
    subtitle: 'Selvbetjening for dine kunder',
    description: 'Jeg udvikler kundevendte portaler hvor dine kunder selv kan booke, betale, følge op og få overblik — uden at belaste din support.',
    details: [
      'Online booking med tidsvalg',
      'Betalingsintegration (MobilePay)',
      'Kundeprofil & historik',
      'Automatisk bekræftelse & påmindelser',
      'Admin-panel til håndtering',
      'Mobil-first design'
    ],
    iconName: 'CalendarCheck',
  },
  {
    id: 'seo',
    title: 'SEO, Analytics & Deployment',
    subtitle: 'Få dit site i luften — og fundet',
    description: 'Jeg sørger for at dit site er korrekt sat op med SEO, analytics, hosting og deployment — så du kan fokusere på forretningen.',
    details: [
      'Teknisk SEO & struktur',
      'JSON-LD schema markup',
      'Google Analytics / Plausible',
      'VPS deployment med Docker',
      'SSL, DNS & email opsætning',
      'Performance-optimering'
    ],
    iconName: 'Search',
  },
]
