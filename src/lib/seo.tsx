import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../data/settings'

interface SeoHelmetProps {
  title: string
  description: string
  path: string
  ogImage?: string
}

const isHome = (path: string): boolean => path === '/' || path === ''

export function SeoHelmet({ title, description, path, ogImage }: SeoHelmetProps) {
  const fullTitle = isHome(path)
    ? `${siteConfig.name} — ${siteConfig.title}`
    : `${title} — ${siteConfig.name}`

  const ogImagePath = ogImage ?? siteConfig.ogImage
  const canonicalUrl = `${siteConfig.url}${path}`
  const imageUrl = `${siteConfig.url}${ogImagePath}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    jobTitle: siteConfig.title,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.split(',')[0]?.trim(),
      addressCountry: siteConfig.location.split(',')[1]?.trim(),
    },
    email: siteConfig.email,
    sameAs: [siteConfig.github, siteConfig.linkedin],
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  )
}
