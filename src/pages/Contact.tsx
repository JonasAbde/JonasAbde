import { SeoHelmet } from '../lib/seo'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { GlassCard } from '../components/ui/GlassCard'
import { Mail, MapPin, ExternalLink } from 'lucide-react'
import { siteConfig } from '../data/settings'

const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent('Henvendelse via portfolio')}`

export default function ContactPage() {
  return (
    <>
      <SeoHelmet
        title="Kontakt"
        description="Kontakt mig direkte om IT-support, teknisk drift, software, automatisering og samarbejde i Aarhus."
        path="/kontakt"
      />
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">Kontakt</h1>
            <p className="text-lg text-pearl-muted max-w-xl mx-auto">
              Har du en relevant IT-stilling, et samarbejde eller en konkret teknisk opgave?
              Kontakt mig direkte, så vi kan afklare behov og næste skridt.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <GlassCard hover={false} className="space-y-5">
              <Mail className="w-8 h-8 text-primary-light" aria-hidden="true" />
              <h2 className="text-2xl font-semibold text-pearl">Send en e-mail</h2>
              <p className="text-pearl-muted leading-relaxed">
                Brug din egen mailapp. Der er ingen indbygget formular, som kan miste din besked
                eller fejlagtigt bekræfte en afsendelse.
              </p>
              <Button href={emailHref} variant="primary" size="lg">
                Åbn e-mail
              </Button>
              <p className="text-pearl-dark text-sm break-all">
                Alternativt: <a className="underline hover:text-pearl" href={emailHref}>{siteConfig.email}</a>
              </p>
            </GlassCard>
            <GlassCard hover={false} className="space-y-5">
              <h2 className="text-2xl font-semibold text-pearl">Professionelle profiler</h2>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-pearl-dark hover:text-pearl">
                LinkedIn <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-pearl-dark hover:text-pearl">
                GitHub <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="https://github.com/Aftergraph" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-pearl-dark hover:text-pearl">
                Aftergraph <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <p className="flex items-center gap-2 text-pearl-muted text-sm">
                <MapPin className="w-4 h-4" aria-hidden="true" /> Aarhus, Danmark
              </p>
            </GlassCard>
          </div>
        </Container>
      </Section>
    </>
  )
}
