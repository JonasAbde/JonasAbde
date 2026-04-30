import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { SeoHelmet } from '../lib/seo'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

const statusConfig: Record<string, { label: string; variant: 'success' | 'warning' | 'primary' }> = {
  live: { label: 'Live', variant: 'success' },
  development: { label: 'Under udvikling', variant: 'warning' },
  planning: { label: 'Planlægning', variant: 'primary' },
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <Section>
        <Container>
          <div className="text-center py-20">
            <h2 className="text-2xl font-display text-gradient mb-4">
              Projekt ikke fundet
            </h2>
            <p className="text-pearl-muted mb-6">
              Det projekt du leder efter eksisterer ikke.
            </p>
            <Button to="/projekter" variant="outline">
              ← Tilbage til projekter
            </Button>
          </div>
        </Container>
      </Section>
    )
  }

  const status = statusConfig[project.status]

  return (
    <>
      <SeoHelmet
        title={project.title}
        description={project.description}
        path={`/projekter/${project.slug}`}
      />

      <Section>
        <Container>
          {/* Back link */}
          <Link
            to="/projekter"
            className="inline-flex items-center text-pearl-dark hover:text-primary transition-colors mb-6"
          >
            ← Tilbage til projekter
          </Link>

          {/* Project header */}
          <div className="mb-10">
            <h1 className="text-4xl font-display text-gradient mb-2">
              {project.title}
            </h1>
            <p className="text-pearl-dark text-lg mb-4">{project.subtitle}</p>
            <Badge variant={status.variant}>{status.label}</Badge>
          </div>

          {/* Description */}
          <div className="prose prose-sm max-w-none mb-10">
            {project.longDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-pearl-muted leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mb-10">
            <h2 className="text-lg font-display text-gradient mb-4">
              Teknologier
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Visit link */}
          {project.url && (
            <div className="mb-10">
              <Button href={project.url} variant="outline" size="lg">
               Besøg site ↗
              </Button>
            </div>
          )}

          {/* CTA section */}
          <div className="mt-16 pt-10 border-t border-primary/10 text-center">
            <h2 className="text-2xl font-display text-gradient mb-4">
              Vil du have noget lignende?
            </h2>
            <Button to="/kontakt" variant="primary" size="lg">
              Fortæl om din opgave
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
