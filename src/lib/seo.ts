type HeadMetaTag =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string }

type HeadLinkTag = {
  rel: string
  href: string
  hrefLang?: string
}

type HeadScriptTag = {
  type: string
  children: string
}

interface AlternateLocalePath {
  hrefLang: string
  path: string
}

interface BuildSeoHeadInput {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
  noIndex?: boolean
  locale?: string
  alternates?: AlternateLocalePath[]
  publishedTime?: string
  modifiedTime?: string
}

interface BuildArticleSchemaInput {
  canonicalUrl: string
  title: string
  description: string
  imageUrl: string
  datePublished: string
  dateModified: string
  category: string
  readTime?: string
}

const DEFAULT_SITE_URL = 'https://rec.co.mz'
const DEFAULT_OG_IMAGE_PATH = '/logo.jpg'
const SITE_NAME = 'REC — Real Estate Consulting'
const ORGANIZATION_NAME = 'REC, Lda. — Real Estate Consulting'

function getSiteUrl() {
  return (
    import.meta.env.VITE_SITE_URL ??
    (typeof process !== 'undefined' ? process.env.VITE_SITE_URL : undefined) ??
    DEFAULT_SITE_URL
  ).replace(/\/$/, '')
}

export function resolveAbsoluteUrl(value: string) {
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value
  }

  const normalizedPath = value.startsWith('/') ? value : `/${value}`
  return `${getSiteUrl()}${normalizedPath}`
}

function formatPageTitle(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
}

function parseReadTimeMinutes(readTime?: string) {
  if (!readTime) {
    return null
  }

  const match = readTime.match(/(\d+)/)
  const minutes = match ? Number(match[1]) : Number.NaN

  if (!Number.isFinite(minutes) || minutes < 1) {
    return null
  }

  return minutes
}

export function buildSeoHead(input: BuildSeoHeadInput): {
  meta: HeadMetaTag[]
  links: HeadLinkTag[]
} {
  const canonicalUrl = resolveAbsoluteUrl(input.path)
  const ogImageUrl = resolveAbsoluteUrl(input.image || DEFAULT_OG_IMAGE_PATH)
  const pageTitle = formatPageTitle(input.title)
  const robots = input.noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  const locale = input.locale ?? 'pt_PT'
  const alternates = input.alternates ?? [
    { hrefLang: 'pt-PT', path: input.path },
    { hrefLang: 'x-default', path: input.path },
  ]

  const links: HeadLinkTag[] = [
    { rel: 'canonical', href: canonicalUrl },
    ...alternates.map((alternate) => ({
      rel: 'alternate',
      hrefLang: alternate.hrefLang,
      href: resolveAbsoluteUrl(alternate.path),
    })),
  ]

  const meta: HeadMetaTag[] = [
    { title: pageTitle },
    { name: 'description', content: input.description },
    { name: 'robots', content: robots },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: input.description },
    { property: 'og:type', content: input.type ?? 'website' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: locale },
    { property: 'og:image', content: ogImageUrl },
    { property: 'og:image:alt', content: input.imageAlt ?? 'Logótipo da REC' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: input.description },
    { name: 'twitter:image', content: ogImageUrl },
  ]

  if (input.publishedTime) {
    meta.push({ property: 'article:published_time', content: input.publishedTime })
  }

  if (input.modifiedTime) {
    meta.push({ property: 'article:modified_time', content: input.modifiedTime })
  }

  return {
    meta,
    links,
  }
}

export function buildOrganizationSchema(): HeadScriptTag {
  return {
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: ORGANIZATION_NAME,
      url: getSiteUrl(),
      telephone: '+258215050000',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. FPLM, nº 857',
        addressLocality: 'Maputo',
        addressCountry: 'MZ',
      },
      logo: resolveAbsoluteUrl('/logo.jpg'),
    }),
  }
}

export function buildArticleSchema(input: BuildArticleSchemaInput): HeadScriptTag {
  const readTimeMinutes = parseReadTimeMinutes(input.readTime)

  return {
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: input.title,
      description: input.description,
      image: [input.imageUrl],
      articleSection: input.category,
      inLanguage: 'pt-PT',
      datePublished: input.datePublished,
      dateModified: input.dateModified,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': input.canonicalUrl,
      },
      author: {
        '@type': 'Organization',
        name: ORGANIZATION_NAME,
      },
      publisher: {
        '@type': 'Organization',
        name: ORGANIZATION_NAME,
        logo: {
          '@type': 'ImageObject',
          url: resolveAbsoluteUrl('/logo.jpg'),
        },
      },
      ...(readTimeMinutes
        ? {
            timeRequired: `PT${readTimeMinutes}M`,
          }
        : {}),
    }),
  }
}
