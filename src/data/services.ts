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
    id: 'it-support',
    title: 'IT-support & Deployment',
    subtitle: 'Hands-on hjælp til arbejdspladser og udstyr',
    description: 'Afgrænsede opgaver med workstation-klargøring, brugerhjælp, fejlsøgning og dokumentation med udgangspunkt i praktisk enterprise-support og onsite deployments.',
    details: [
      'Windows- og arbejdsstationsfejlsøgning',
      'Klargøring og udrulning af PC-udstyr',
      'Microsoft 365 og brugerorienteret support',
      'Onboarding og dokumentation',
    ],
    iconName: 'Monitor',
  },
  {
    id: 'websites',
    title: 'Websites & Workflow-værktøjer',
    subtitle: 'Praktiske digitale løsninger til mindre virksomheder',
    description: 'Udvikling og forbedring af webgrænseflader, formularer og interne værktøjer med klart afgrænset funktionalitet og test.',
    details: [
      'React og TypeScript',
      'Responsivt design og tilgængelighed',
      'Formularer og validering',
      'Tekniske rettelser og fejlretning',
    ],
    iconName: 'LayoutDashboard',
  },
  {
    id: 'automation',
    title: 'Procesautomatisering',
    subtitle: 'Små, verificerbare piloter først',
    description: 'Analyse af gentagne arbejdsgange og kontrolleret implementering af simple API- og AI-assisterede pilotløsninger med menneskelig godkendelse.',
    details: [
      'Behovsanalyse og arbejdsgangsdesign',
      'API- og webhook-integrationer',
      'AI-assisterede prototyper med review',
      'Sikker håndtering af adgang og data',
    ],
    iconName: 'Brain',
  },
  {
    id: 'quality',
    title: 'Teknisk kvalitet & Deployment',
    subtitle: 'Dokumentation, tests og pålidelig levering',
    description: 'Afgrænsede tekniske opgaver omkring webfejl, builds, Git-workflows, CI og dokumentation, uden at love specialistydelser ud over den dokumenterede erfaring.',
    details: [
      'Fejlsøgning og reproducerbare tests',
      'Git og code review',
      'Byg- og deploychecks',
      'Dokumentation og overdragelse',
    ],
    iconName: 'Search',
  },
]
