# Jonas Abde — Asset Requirements

## Needed before production launch

| Asset | Description | Priority |
|-------|-------------|----------|
| `public/images/og-default.jpg` | 1200×630px OG image til sociale medier | High |
| Profilfoto | Til About-siden | Medium |
| Projektscreenshots | Til hvert projekt-kort | Medium |
| Custom 404 illustration | Valgfri | Low |

## Domain & DNS

- Domæne: jonasabde.dk (skal registreres/købes)
- DNS A record → VPS IP
- HTTPS via Let's Encrypt / Certbot

## Sociale medier

- GitHub: github.com/jonasabde ✓
- LinkedIn: linkedin.com/in/jonasabde ✓
- Email: jonas@rendetalje.dk ✓

## Contact Form

Formen er UI-only. For at aktivere:
1. Opsæt SMTP/email service (f.eks. Gmail API eller self-hosted)
2. Implementer form submission til backend
3. Fjern "UI-demo" disclaimer
