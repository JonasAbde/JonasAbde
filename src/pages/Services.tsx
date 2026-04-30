import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { GlassCard } from '../components/ui/GlassCard'
import { SeoHelmet } from '../lib/seo'
import { services } from '../data/services'
import {
  Monitor,
  LayoutDashboard,
  Brain,
  Building2,
  CalendarCheck,
  Search,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Monitor,
  LayoutDashboard,
  Brain,
  Building2,
  CalendarCheck,
  Search,
}

export default function ServicesPage() {
  return (
    <>
      <SeoHelmet
        title="Services"
        description="Jeg tilbyder udvikling af hjemmesider, webapps, AI-automation, forretningssystemer, bookingportaler og SEO — tilpasset din virksomhed."
        path="/services"
      />
      <Section id="services">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Services
            </h1>
            <p className="text-lg text-pearl-dark max-w-2xl mx-auto">
              End-to-end udvikling fra hjemmeside til AI-drevne systemer —
              skræddersyet til din forretning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, _idx) => {
              const IconComponent = iconMap[service.iconName]
              return (
                <GlassCard key={service.id} className="flex flex-col">
                  <div className="mb-4">
                    {IconComponent && (
                      <IconComponent size={32} className="text-primary-light" />
                    )}
                  </div>
                  <h3 className="font-semibold text-lg text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-pearl-dark text-sm mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-pearl-dark text-sm mb-4 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-pearl-dark text-sm"
                      >
                        <span className="text-primary-light mt-0.5 flex-shrink-0">
                          •
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Button to="/kontakt" variant="outline" size="sm" className="self-start">
                    Hør mere
                  </Button>
                </GlassCard>
              )
            })}
          </div>
        </Container>
      </Section>
    </>
  )
}
