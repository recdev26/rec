export type Locale = 'pt' | 'en'

function isExternalHref(href: string) {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  )
}

function mapPathnameForLocale(pathname: string, locale: Locale) {
  if (locale === 'en' && pathname === '/sobre-nos') {
    return '/about'
  }

  if (locale === 'pt' && pathname === '/about') {
    return '/sobre-nos'
  }

  return pathname
}

export function resolveLocale(pathname: string, search: Record<string, unknown>): Locale {
  const lang = search.lang

  if (typeof lang === 'string' && (lang === 'pt' || lang === 'en')) {
    return lang
  }

  if (pathname === '/about') {
    return 'en'
  }

  return 'pt'
}

export function buildLocaleSwitchHref(pathname: string, targetLocale: Locale) {
  const mappedPath = mapPathnameForLocale(pathname, targetLocale)
  const query = targetLocale === 'en' ? '?lang=en' : ''
  return `${mappedPath}${query}`
}

export function localizeInternalHref(href: string, locale: Locale) {
  if (!href.startsWith('/') || isExternalHref(href)) {
    return href
  }

  const hashIndex = href.indexOf('#')
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : ''
  const baseHref = hashIndex >= 0 ? href.slice(0, hashIndex) : href
  const queryIndex = baseHref.indexOf('?')
  const path = queryIndex >= 0 ? baseHref.slice(0, queryIndex) : baseHref
  const queryString = queryIndex >= 0 ? baseHref.slice(queryIndex + 1) : ''
  const params = new URLSearchParams(queryString)

  if (locale === 'en') {
    params.set('lang', 'en')
  } else {
    params.delete('lang')
  }

  const localizedPath = mapPathnameForLocale(path || '/', locale)
  const search = params.toString()

  return `${localizedPath}${search ? `?${search}` : ''}${hash}`
}
