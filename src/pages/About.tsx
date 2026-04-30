import { SeoHelmet } from '../lib/seo'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { GlassCard } from '../components/ui/GlassCard'
import { Badge } from '../components/ui/Badge'
import { siteConfig } from '../data/settings'

export default function AboutPage() {
  return (
    <>
      <SeoHelmet
        title="Om mig"
        description="Fullstack-udvikler og AI-automatiseringsekspert baseret i Aarhus. Læs om min baggrund, tilgang og de teknologier jeg arbejder med."
        path="/om"
      />
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-gradient">
                Om mig
              </h1>
              <div className="space-y-5 text-pearl/80 leading-relaxed">
                <p>
                  Jeg hedder Jonas Abde og er fullstack-udvikler og AI-automatiseringsekspert baseret i Aarhus.
                  Jeg har en baggrund inden for IT med speciale i network, security og embedded systems fra EAAA.
                </p>
                <p>
                  Jeg bygger digitale produkter der løser reelle problemer — fra webapplikationer og API&apos;er
                  til intelligente agent-systemer og komplette forretningsplatforme. Mit arbejde spænder fra
                  enkle landingssider til komplekse multi-service systemer med AI-automation.
                </p>
                <p>
                  Jeg tror på at god teknologi skal være praktisk, gennemtænkt og leveret med omhu. Derfor
                  arbejder jeg tæt sammen med dig om at forstå dine behov og levere en løsning der virker —
                  ikke bare en der ser godt ud.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button to="/projekter" variant="primary" size="lg">
                  Se mine projekter →
                </Button>
                <Button to="/kontakt" variant="secondary" size="lg">
                  Kontakt mig
                </Button>
              </div>
            </div>

            {/* Right column */}
            <GlassCard hover={false}>
              <h2 className="text-xl font-semibold text-pearl mb-6">
                Teknologier jeg arbejder med
              </h2>
              <div className="flex flex-wrap gap-2">
                {siteConfig.skills.map((skill) => (
                  <Badge key={skill} variant="primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>
    </>
  )
}



