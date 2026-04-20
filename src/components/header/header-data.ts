import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { serviceNavItems } from '../../lib/services'

export interface NavLinkItem {
  label: string
  href: string
  match: (pathname: string) => boolean
}

export interface NavDropdownItem {
  label: string
  href: string
}

export interface NavDropdownGroup {
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

export const navigationItems: readonly NavigationItem[] = [
  {
    label: 'Início',
    href: '/',
    match: (pathname) => pathname === '/',
  },
  {
    label: 'Sobre Nós',
    href: '/sobre-nos',
    match: (pathname) => pathname === '/about' || pathname === '/sobre-nos',
  },
  {
    label: 'Serviços',
    href: '/#servicos',
    match: (pathname) => pathname.startsWith('/servicos'),
    items: serviceItems,
  },
  {
    label: 'Blog',
    href: '/blog',
    match: (pathname) => pathname.startsWith('/blog'),
  },
  {
    label: 'Contactos',
    href: '/contactos',
    match: (pathname) => pathname.startsWith('/contactos'),
  },
] as const

export const homeInfoItems: readonly HomeInfoItem[] = [
  {
    icon: Mail,
    eyebrow: 'Email',
    value: 'consulting@rec.co.mz',
    href: 'mailto:consulting@rec.co.mz',
  },
  {
    icon: Phone,
    eyebrow: 'Ligue-nos',
    value: '+258 21 505 000 / +258 84 382 2494',
    href: 'tel:+258843822494',
  },
  {
    icon: Clock3,
    eyebrow: 'Horário',
    value: 'Seg-Sex: 08h00-17h00',
    href: null,
  },
  {
    icon: MapPin,
    eyebrow: 'Localização',
    value: 'Av. FPLM, nº 857, Maputo',
    href: 'https://maps.google.com/?q=Av.+FPLM,+857,+Maputo',
  },
] as const

export function isDropdownItem(item: NavigationItem): item is NavDropdownGroup {
  return 'items' in item
}
