import { SeoHelmet } from '../lib/seo'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { GlassCard } from '../components/ui/GlassCard'
import { motion } from 'framer-motion'
import { Mail, MapPin, ExternalLink } from 'lucide-react'
import { Github, Linkedin } from '../components/ui/Icons'

const inputClass = 'w-full px-4 py-3 rounded-lg bg-surface-lighter border border-border text-pearl placeholder:text-muted focus:outline-none focus:border-primary'

function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Tak for din besked! Jeg vender tilbage hurtigst muligt.')
  }

  return (
    <GlassCard hover={false}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-pearl mb-1.5">
            Navn
          </label>
          <input
            id="name"
            type="text"
            placeholder="Dit navn"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-pearl mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="din@email.dk"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-pearl mb-1.5">
            Emne
          </label>
          <select id="subject" className={inputClass} defaultValue="">
            <option value="" disabled>Vælg emne</option>
            <option value="projekt">Projekt</option>
            <option value="samarbejde">Samarbejde</option>
            <option value="spørgsmål">Spørgsmål</option>
            <option value="andet">Andet</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-pearl mb-1.5">
            Besked
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Fortæl om din opgave..."
            className={inputClass}
            required
          />
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Send besked
        </Button>

        <p className="text-pearl-dark text-sm text-center">
          Dette er en UI-demo. Send en mail direkte til jonas@rendetalje.dk for hurtigst svar.
        </p>
      </form>
    </GlassCard>
  )
}

function ContactInfo() {
  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'jonas@rendetalje.dk',
      href: 'mailto:jonas@rendetalje.dk',
      external: false,
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'Github',
      value: 'github.com/jonasabde',
      href: 'https://github.com/jonasabde',
      external: true,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/jonasabde',
      href: 'https://linkedin.com/in/jonasabde',
      external: true,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Lokation',
      value: 'Aarhus, Danmark',
      href: null,
      external: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {contactItems.map((item, index) => (
        <motion.div key={index} variants={itemVariants}>
          <GlassCard hover={false}>
            <a
              href={item.href || '#'}
              className="flex items-center gap-4 group"
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted uppercase tracking-wider mb-0.5">
                  {item.label}
                </p>
                <p className="text-pearl font-medium truncate">
                  {item.value}
                </p>
              </div>
              {item.external && (
                <ExternalLink className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
              )}
            </a>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function ContactPage() {
  return (
    <>
      <SeoHelmet
        title="Kontakt"
        description="Klar til at bygge noget fedt? Fortæl om din opgave og få et uforpligtende tilbud."
        path="/kontakt"
      />
      <Section>
        <Container>
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gradient">Kontakt</span>
            </motion.h1>
            <motion.p
              className="text-lg text-muted max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Fortæl om din opgave
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </Container>
      </Section>
    </>
  )
}
