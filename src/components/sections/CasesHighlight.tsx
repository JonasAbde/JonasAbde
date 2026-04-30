import { projects } from "../../data/projects";
import { Badge } from "../ui/Badge";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

export default function CasesHighlight() {
  const caseProjects = projects
    .filter((p) => p.highlight && p.status === "live")
    .slice(0, 3);

  return (
    <Section>
      <Container>
        <h2 className="text-3xl sm:text-4xl font-display text-gradient mb-12 text-center">
          Cases & Resultater
        </h2>

        <div className="space-y-6">
          {caseProjects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-lg bg-surface-lighter/50 border border-surface-lighter/60 p-6 transition-all hover:border-primary/30"
            >
              {/* Gradient left border */}
              <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-gradient-to-b from-primary to-accent-purple" />

              <div className="pl-4">
                <h3 className="text-xl font-semibold text-pearl mb-2">{project.title}</h3>
                <p className="text-sm text-pearl-dark/80 mb-4">{project.description}</p>

                <div className="flex flex-wrap items-center gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="primary">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="default">+{project.tech.length - 4}</Badge>
                  )}
                </div>

                <a
                  href={`/projekter/${project.slug}`}
                  className="inline-block mt-4 text-sm text-primary-light hover:text-primary transition-colors"
                >
                  Læs mere →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
