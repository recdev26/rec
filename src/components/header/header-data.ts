import { Clock3, Mail, MapPin, MessageCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { serviceNavItems } from '../../lib/services'
import type { Locale } from '../../lib/i18n'

export interface NavLinkItem {
  key: string
  label: string
  href: string
  match: (pathname: string) => boolean
}

export interface NavDropdownItem {
  label: string
  href: string
}

export interface NavDropdownGroup {
  key: string
  label: string
  href: string
  match: (pathname: string) => boolean
  items: readonly NavDropdownItem[]
}

export interface HomeInfoItem {
  icon: LucideIcon
  eyebrow: string
  value: string
  href: string | null
}

export type NavigationItem = NavLinkItem | NavDropdownGroup

const serviceItems = serviceNavItems

export function getNavigationItems(locale: Locale): readonly NavigationItem[] {
  const labels = {
    pt: {
      home: 'Início',
      about: 'Sobre Nós',
      services: 'Serviços',
      blog: 'Blog',
    },
    en: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      blog: 'Blog',
    },
  } as const

  const copy = labels[locale]

  return [
  {
    key: 'home',
    label: copy.home,
    href: '/',
    match: (pathname) => pathname === '/',
  },
  {
    key: 'about',
    label: copy.about,
    href: '/sobre-nos',
    match: (pathname) => pathname === '/about' || pathname === '/sobre-nos',
  },
  {
    key: 'services',
    label: copy.services,
    href: '/#servicos',
    match: (pathname) => pathname.startsWith('/servicos'),
    items: serviceItems,
  },
  {
    key: 'blog',
    label: copy.blog,
    href: '/blog',
    match: (pathname) => pathname.startsWith('/blog'),
  },
  ] as const
}

export function getHomeInfoItems(locale: Locale): readonly HomeInfoItem[] {
  return [
    {
      icon: Mail,
      eyebrow: 'Email',
      value: 'consulting@rec.co.mz',
      href: 'mailto:consulting@rec.co.mz',
    },
    {
      icon: MessageCircle,
      eyebrow: locale === 'en' ? 'Call us' : 'Ligue-nos',
      value: '+258 21 505 000 / +258 84 382 2494',
      href: 'https://wa.me/258843822494',
    },
    {
      icon: Clock3,
      eyebrow: locale === 'en' ? 'Hours' : 'Horário',
      value: locale === 'en' ? 'Mon-Fri: 08h00-17h00' : 'Seg-Sex: 08h00-17h00',
      href: null,
    },
    {
      icon: MapPin,
      eyebrow: locale === 'en' ? 'Location' : 'Localização',
      value: 'Av. FPLM, nº 857, Maputo',
      href: 'https://maps.google.com/?q=Av.+FPLM,+857,+Maputo',
    },
  ] as const
}

export function isDropdownItem(item: NavigationItem): item is NavDropdownGroup {
  return 'items' in item
}
