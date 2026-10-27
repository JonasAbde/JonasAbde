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
        description="Praktisk erfaring med IT-support, workstation deployment, React/TypeScript og automation. Baseret i Aarhus."
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
                  Jeg hedder Jonas Abde og bor i Aarhus. Jeg har arbejdet med IT-support hos Lineage Logistics
                  og projektbaseret workstation deployment for Onitio/Danske Bank. Jeg har fulgt
                  IT-teknologuddannelsen ved Erhvervsakademi Aarhus, men har ikke afsluttet forløbet.
                </p>
                <p>
                  Jeg arbejder med React, TypeScript, API&apos;er, Linux og automatisering, blandt andet
                  i forbindelse med digitale arbejdsgange hos Rendetalje, som jeg driver. Andre
                  systemprojekter er stadig prototyper eller under udvikling og bliver beskrevet som sådan.
                </p>
                <p>
                  Jeg prioriterer tydelig kommunikation, dokumenterbar fejlsøgning, tests og ærlig
                  status for, hvad der virker i praksis. Jeg bruger også AI-værktøjer i udviklingsarbejdet,
                  men er ansvarlig for krav, review og verifikation.
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



