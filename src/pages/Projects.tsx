import { Link } from 'react-router-dom'
import { projects, type Project } from '../data/projects'
import { SeoHelmet } from '../lib/seo'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Badge } from '../components/ui/Badge'

const statusConfig: Record<
  Project['status'],
  { label: string; className: string }
> = {
  live: {
    label: 'Live',
    className:
      'bg-success/10 text-success border border-success/20',
  },
  development: {
    label: 'Under udvikling',
    className:
      'bg-warning/10 text-warning border border-warning/20',
  },
  planning: {
    label: 'Planlægning',
    className:
      'bg-primary/10 text-primary-light border border-primary/20',
  },
}

function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status]

  return (
    <div className="glass rounded-xl p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-display text-gradient leading-tight">
          {project.title}
        </h3>
        <span
          className={`shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      {/* Subtitle */}
      <p className="text-pearl-dark text-sm font-medium">
        {project.subtitle}
      </p>

      {/* Description */}
      <p className="text-pearl-muted text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech} variant="primary">
            {tech}
          </Badge>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-auto pt-2">
        <Link
          to={`/projekter/${project.slug}`}
          className="text-sm font-medium text-primary-light hover:text-primary transition-colors"
        >
          Læs mere →
        </Link>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-pearl-muted hover:text-pearl transition-colors"
          >
            Besøg site ↗
          </a>
        )}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <>
      <SeoHelmet
        title="Projekter"
        description="Se de digitale produkter jeg har bygget — fra webapplikationer og AI-systemer til forretningsplatforme."
        path="/projekter"
      />

      <Section>
        <Container>
          {/* Hero */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-display text-gradient mb-4">
              Projekter
            </h1>
            <p className="text-pearl-muted text-lg leading-relaxed">
              Fra idé til lancering — her er de produkter og platforme jeg har
              bygget for kunder og som selvstændige projekter.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
