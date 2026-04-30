import { siteConfig } from "../../data/settings";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";

export default function TrustStrip() {
  return (
    <section className="py-8 border-y border-surface-lighter/50 bg-surface/50">
      <Container>
        <div className="text-center mb-4">
          <span className="text-xs font-medium text-pearl-dark/60 uppercase tracking-wider">
            Teknologier & værktøjer
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {siteConfig.skills.map((skill) => (
            <Badge key={skill} variant="default">
              {skill}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
