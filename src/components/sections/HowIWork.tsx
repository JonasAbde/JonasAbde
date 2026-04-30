import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

const steps = [
  {
    number: "1",
    title: "Afklaring",
    description: "Jeg forstår din vision, behov og budget",
  },
  {
    number: "2",
    title: "Planlægning",
    description: "Vi lægger en teknisk plan og tidslinje",
  },
  {
    number: "3",
    title: "Byg & test",
    description: "Jeg bygger løsningen med løbende feedback",
  },
  {
    number: "4",
    title: "Levering",
    description: "Du får en klar, dokumenteret og deployet løsning",
  },
];

export default function HowIWork() {
  return (
    <Section dark>
      <Container>
        <h2 className="text-3xl sm:text-4xl font-display text-gradient mb-12 text-center">
          Sådan arbejder jeg
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-lg bg-surface-lighter/40 border border-surface-lighter/50 p-6"
            >
              <div className="text-2xl font-display font-bold text-gradient mb-3">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-pearl mb-2">{step.title}</h3>
              <p className="text-sm text-pearl-dark/80">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
