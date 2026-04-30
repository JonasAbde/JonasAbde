import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import { siteConfig } from '../../data/settings';
import { Container } from '../ui/Container';

export default function Footer() {
  return (
    <footer className="bg-surface-light">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Jonas Abde</h3>
            <p className="text-pearl-dark">{siteConfig.title}</p>
            <div className="flex gap-4 pt-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github
                  size={20}
                  className="text-pearl-dark hover:text-primary transition-colors"
                />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={20}
                  className="text-pearl-dark hover:text-primary transition-colors"
                />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
              >
                <Mail
                  size={20}
                  className="text-pearl-dark hover:text-primary transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-pearl mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-pearl-dark hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-pearl mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-pearl-dark hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-pearl-dark">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="glow-line" />
        <p className="text-center text-pearl-dark py-6 text-sm">
          © {new Date().getFullYear()} Jonas Abde. Alle rettigheder forbeholdes.
        </p>
      </Container>
    </footer>
  );
}
