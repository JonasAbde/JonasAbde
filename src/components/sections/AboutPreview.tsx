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
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none" />
              <div className="text-center relative z-10">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-surface-lighter flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted">
                      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
                      <path d="M20 21a8 8 0 1 0-16 0"/>
                    </svg>
                  </div>
                  <p className="text-sm text-muted">Profilbillede kommer snart</p>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
