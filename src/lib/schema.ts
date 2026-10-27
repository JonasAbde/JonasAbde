const BASE_URL = "https://jonasabde.dk";

export function generatePersonSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jonas Abde",
    jobTitle: "IT Support, Technical Operations & Software Engineering",
    description:
      "Practical experience in enterprise IT support and workplace deployments, with software and automation engineering in Aftergraph, Aarhus.",
    url: BASE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aarhus",
      addressCountry: "DK",
    },
    sameAs: [
      "https://github.com/JonasAbde",
      "https://github.com/Aftergraph",
      "https://www.linkedin.com/in/jonas-abde-22691a12/",
    ],
  };
}

export function generateProfessionalServiceSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jonas Abde",
    description:
      "Scoped IT support, workplace device deployment, web software improvements and practical workflow automation.",
    url: BASE_URL,
    provider: generatePersonSchema(),
    areaServed: {
      "@type": "Country",
      name: "Denmark",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Workplace IT Support and Deployment",
            description:
              "Windows workplace troubleshooting, device preparation, onboarding support and documentation for bounded assignments.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Websites and Workflow Improvements",
            description:
              "React/TypeScript interface and web workflow improvements with review and testing.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical Quality and Automation Pilots",
            description:
              "Small integration prototypes, reproducible tests, technical documentation and deployment checks.",
          },
        },
      ],
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}
