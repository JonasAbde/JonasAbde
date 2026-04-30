import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

export default function AboutPreview() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-display text-gradient mb-6">
              Om mig
            </h2>
            <p className="text-pearl-dark/80 leading-relaxed mb-6">
              Jeg er fullstack-udvikler og AI-automatiseringsekspert baseret i Aarhus. Jeg bygger digitale produkter der gør en forskel – fra webapplikationer og API&apos;er til intelligente agent-systemer og forretningsværktøjer.
            </p>
            <Button to="/om" variant="outline">
              Læs mere om mig →
            </Button>
          </div>

          {/* Right: Photo placeholder */}
          <div className="flex justify-center">
            <div className="relative glass rounded-xl w-full max-w-sm aspect-[3/4] flex items-center justify-center border border-primary/20">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent-purple/10 pointer-events-none" />
              <span className="text-pearl-dark/40 text-lg font-medium relative z-10">
                Foto
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
