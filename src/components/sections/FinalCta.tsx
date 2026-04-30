import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export default function FinalCta() {
  return (
    <section className="gradient-hero py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-gradient mb-6">
            Klar til at bygge noget fedt?
          </h2>
          <p className="text-lg text-pearl-dark/80 mb-8">
            Fortæl mig om din opgave, så finder vi ud af om jeg kan hjælpe.
          </p>
          <Button to="/kontakt" variant="primary" size="lg">
            Fortæl om din opgave
          </Button>
        </div>
      </Container>
    </section>
  );
}
