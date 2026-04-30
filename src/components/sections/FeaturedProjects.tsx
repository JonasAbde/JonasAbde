import { projects } from "../../data/projects";
import { GlassCard } from "../ui/GlassCard";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

const statusColors: Record<string, string> = {
  live: "bg-success",
  development: "bg-warning",
  planning: "bg-pearl-dark/40",
};

const statusLabels: Record<string, string> = {
  live: "Live",
  development: "Under udvikling",
  planning: "Planlægning",
};

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.highlight);

  return (
    <Section>
      <Container>
        <h2 className="text-3xl sm:text-4xl font-display text-gradient mb-12 text-center">
          Udvalgte projekter
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <GlassCard key={project.id} className="flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-pearl mb-1">{project.title}</h3>
                  <p className="text-sm text-pearl-dark/70">{project.subtitle}</p>
                </div>
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full flex-shrink-0 ml-3 mt-2 ${statusColors[project.status]}`}
                  title={statusLabels[project.status]}
                />
              </div>

              <p className="text-sm text-pearl-dark/80 mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="primary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button to={`/projekter/${project.slug}`} variant="ghost" size="sm">
                Se projekt →
              </Button>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/projekter" variant="outline">
            Se alle projekter →
          </Button>
        </div>
      </Container>
    </Section>
  );
}
