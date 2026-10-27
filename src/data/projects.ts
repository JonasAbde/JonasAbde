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
    description: 'Arkitekturarbejde med AI-assisterede brugerflader, agenter, godkendelsesgrænser og verificerbare handlinger.',
    longDescription: 'Tilsyn er et privat udviklingsprojekt i Aftergraph. Arbejdet omfatter softwarearkitektur, testdesign, agenter og driftsrelaterede arbejdsgange. Projektet er ikke præsenteret som en offentligt tilgængelig eller fuldt produktionsklar tjeneste. Privat kildekode og kundedata offentliggøres ikke.',
    tech: ['TypeScript', 'React', 'Testing', 'CI/CD'],
    status: 'development',
    highlight: true,
  },
  {
    id: 'aftergraph-works',
    title: 'Aftergraph WORKS',
    slug: 'aftergraph-works',
    subtitle: 'Execution og pålidelighed',
    description: 'Teknisk udviklingsområde for koordinering af arbejde, testbarhed, sporbarhed og kontrolleret eksekvering.',
    longDescription: 'Aftergraph WORKS samler tekniske idéer og kode omkring arbejdsgange, koordinering og verifikation. Det offentlige repository kan undersøges som kildekode, men denne case lover ikke, at alle planlagte komponenter er deployed eller integrationstestet.',
    tech: ['Systems Engineering', 'CI/CD', 'Automation'],
    status: 'development',
    url: 'https://github.com/Aftergraph/works-execution',
    highlight: true,
  },
  {
    id: 'aftergraph-studio',
    title: 'Aftergraph Studio',
    slug: 'aftergraph-studio',
    subtitle: 'Udviklingsværktøjer og interfacearbejde',
    description: 'Arbejde med værktøjer, brugerflader og softwarefunktioner på tværs af Aftergraph-workspacet.',
    longDescription: 'Studio-arbejdet dækker udviklerorienterede brugerflader, værktøjer og integrationer. Kildekoden kan findes i organisationens repository. Projektets modenhed og konkrete releases skal verificeres på en bestemt commit før de citeres som færdige funktioner.',
    tech: ['Frontend', 'TypeScript', 'Developer Tools'],
    status: 'development',
    url: 'https://github.com/Aftergraph/studio',
    highlight: true,
  },
  {
    id: 'rendetalje',
    title: 'Rendetalje',
    slug: 'rendetalje',
    subtitle: 'Kundeside og digitale arbejdsgange',
    description: 'Kundevendt website, tilbudsforespørgsler og løbende procesforbedringer for en reel rengøringsvirksomhed.',
    longDescription: 'Rendetalje giver praktisk erfaring med produktkrav, kundekontakt, formularer og arbejdsgange i en aktiv servicevirksomhed. Det offentlige website er ikke bevis for et fuldt automatiseret regnskabs-, løn- eller bookingsystem.',
    tech: ['React', 'TypeScript', 'Web Forms', 'Operations'],
    status: 'live',
    url: 'https://rendetalje.dk',
    highlight: true,
  },
  {
    id: 'foodtruck-fiesta',
    title: 'Foodtruck Fiesta',
    slug: 'foodtruck-fiesta',
    subtitle: 'Catering og eventhenvendelser',
    description: 'Kundevendt website med cateringinformation og kontakt om events.',
    longDescription: 'Foodtruck Fiesta viser information om catering og events og understøtter indledende kundehenvendelser. Denne case påstår ikke, at der er et fuldt integreret betalings- eller reservationssystem.',
    tech: ['Web', 'Customer Experience', 'Operations'],
    status: 'live',
    url: 'https://foodtruckfiesta.dk',
    highlight: false,
  },
]
