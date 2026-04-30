const BASE_URL = "https://jonasabde.dk";

export function generatePersonSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jonas Abde",
    jobTitle: "Fullstack Developer & AI Automation",
    description:
      "Fullstack developer and AI automation specialist based in Aarhus, Denmark. Building modern web applications and intelligent automation solutions.",
    url: BASE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aarhus",
      addressCountry: "DK",
    },
    sameAs: [
      "https://github.com/jonasabde",
      "https://linkedin.com/in/jonasabde",
    ],
  };
}

export function generateProfessionalServiceSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jonas Abde",
    description:
      "Fullstack development and AI automation services — custom web applications, API integrations, and intelligent workflow automation.",
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
            name: "Fullstack Web Development",
            description:
              "End-to-end web application development with modern frameworks and scalable architectures.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Automation",
            description:
              "Intelligent workflow automation using LLMs, agents, and custom AI integrations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "API Development & Integration",
            description:
              "Custom API design, third-party integrations, and data pipeline engineering.",
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
