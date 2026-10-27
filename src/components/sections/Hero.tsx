import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Floating accent element */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-24 h-24 rounded-full bg-accent/15 blur-2xl animate-float pointer-events-none" style={{ animationDelay: "1s" }} />

      <Container className="relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="primary">IT Support · Technical Operations · Software & Automation</Badge>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl lg:text-8xl font-display text-gradient leading-tight">
            Jonas Abde
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-2xl text-lg sm:text-xl text-pearl-dark/80 leading-relaxed">
            Jeg kombinerer praktisk IT-support, deployment og teknisk fejlfinding med udvikling af software og automatisering til virkelige arbejdsgange.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button to="/om" variant="primary" size="lg">
              Se min erfaring
            </Button>
            <Button to="/projekter" variant="outline" size="lg">
              Se projekter
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
