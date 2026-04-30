import Hero from '../components/sections/Hero'
import TrustStrip from '../components/sections/TrustStrip'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import ServicesOverview from '../components/sections/ServicesOverview'
import CasesHighlight from '../components/sections/CasesHighlight'
import HowIWork from '../components/sections/HowIWork'
import AboutPreview from '../components/sections/AboutPreview'
import FinalCta from '../components/sections/FinalCta'
import { SeoHelmet } from '../lib/seo'

export default function HomePage() {
  return (
    <>
      <SeoHelmet
        title=""
        description="Fullstack developer og AI-automatisering baseret i Aarhus. Jeg bygger hjemmesider, webapps, AI-agenter og forretningssystemer til danske virksomheder."
        path="/"
      />
      <Hero />
      <TrustStrip />
      <FeaturedProjects />
      <ServicesOverview />
      <CasesHighlight />
      <HowIWork />
      <AboutPreview />
      <FinalCta />
    </>
  )
}
