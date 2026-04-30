import { services } from "../../data/services";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

export default function ServicesOverview() {
  const firstThree = services.slice(0, 3);

  return (
    <Section dark>
      <Container>
        <h2 className="text-3xl sm:text-4xl font-display text-gradient mb-3 text-center">
          Services
        </h2>
        <p className="text-center text-pearl-dark/70 mb-12 text-lg">
          Hvad jeg kan hjælpe med
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {firstThree.map((service) => (
            <GlassCard key={service.id}>
              <div className="text-lg font-semibold text-pearl mb-1">{service.title}</div>
              <p className="text-sm text-primary-light/80 mb-3">{service.subtitle}</p>
              <p className="text-sm text-pearl-dark/80">{service.description}</p>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/services" variant="outline">
            Se alle services →
          </Button>
        </div>
      </Container>
    </Section>
  );
}
