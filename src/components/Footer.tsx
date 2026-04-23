import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { localizeInternalHref } from '../lib/i18n'
import { useLocale } from '../lib/use-locale'

function getQuickLinks(locale: 'pt' | 'en') {
  return [
    { label: locale === 'en' ? 'Home' : 'Início', href: '/' },
    { label: locale === 'en' ? 'About Us' : 'Sobre Nós', href: '/sobre-nos' },
    { label: locale === 'en' ? 'Services' : 'Serviços', href: '/#servicos' },
    { label: 'Blog', href: '/blog' },
    { label: locale === 'en' ? 'Contacts' : 'Contactos', href: '/contactos' },
  ] as const
}

function getOfficeItems(locale: 'pt' | 'en') {
  return [
    {
      icon: MessageCircle,
      label: locale === 'en' ? 'Call us' : 'Ligue-nos',
      value: '+258 21 505 000 / +258 84 382 2494',
      href: 'https://wa.me/258843822494',
    },
    {
      icon: Mail,
      label: locale === 'en' ? 'Email us' : 'Envie-nos um e-mail',
      value: 'consulting@rec.co.mz',
      href: 'mailto:consulting@rec.co.mz',
    },
    {
      icon: MapPin,
      label: locale === 'en' ? 'Office address' : 'A nossa morada',
      value: 'Av. FPLM, nº 857, Maputo',
      href: 'https://maps.google.com/?q=Av.+FPLM,+857,+Maputo',
    },
  ] as const
}

const socialLinks = [
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/share/18M9FZFAPJ/?mibextid=wwXIfr',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/rec.co.mz?igsh=MXFocXphOXpjbWk2Yw==',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/rec-real-estate-consulting/',
  },
] as const

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-sm text-white/66 no-underline transition hover:gap-4 hover:!text-white"
    >
      <ArrowRight size={18} strokeWidth={2} />
      {label}
    </a>
  )
}

function OfficeItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone
  label: string
  value: string
  href: string
}) {
  return (
    <div className="flex items-start gap-5">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[var(--color-accent)]">
        <Icon size={20} strokeWidth={2.1} />
      </span>
      <div>
        <p className="m-0 text-white/68">{label}</p>
        <a
          href={href}
          target={href.startsWith('https://') ? '_blank' : undefined}
          rel={href.startsWith('https://') ? 'noreferrer' : undefined}
          className="mt-1 inline-block font-semibold !text-white no-underline transition hover:!text-[var(--color-accent-light)]"
        >
          {value}
        </a>
      </div>
    </div>
  )
}

export default function Footer() {
  const locale = useLocale()
  const quickLinks = getQuickLinks(locale)
  const officeItems = getOfficeItems(locale)

  const logoAlt = locale === 'en' ? 'REC logo' : 'Logótipo da REC'
  const companyDescription =
    locale === 'en'
      ? 'REC, Lda. provides real estate consultancy with technical rigour, close client support and commitment to robust, evidence-based decisions.'
      : 'A REC, Lda. presta consultoria imobiliária com rigor técnico, proximidade e compromisso com decisões seguras e sustentadas.'
  const quickLinksLabel = locale === 'en' ? 'Quick Links' : 'Ligações Rápidas'
  const officeInfoLabel = locale === 'en' ? 'Office Information' : 'Informações do Escritório'
  const copyright =
    locale === 'en'
      ? 'REC, Lda. © 2025. All rights reserved. | Meridian 32 Group'
      : 'REC, Lda. © 2025. Todos os direitos reservados. | Grupo Meridian 32'

  return (
    <footer className="site-footer mt-0 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_1.1fr]">
          <div>
            <img
              src="/logo.jpg"
              alt={logoAlt}
              width="198"
              height="107"
              className="h-14 w-auto object-contain"
            />
            <p className="mt-8 max-w-md text-white/62">{companyDescription}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-12 items-center justify-center bg-white text-[var(--color-accent)] no-underline transition hover:-translate-y-1 hover:bg-[var(--color-accent-light)]"
                  >
                    <Icon size={20} strokeWidth={2.1} />
                  </a>
                ) : (
                  <span
                    key={label}
                    aria-label={label}
                    className="inline-flex h-10 w-12 items-center justify-center bg-white text-[var(--color-accent)] opacity-50"
                  >
                    <Icon size={20} strokeWidth={2.1} />
                  </span>
                )
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-white">
              {quickLinksLabel}
            </h2>
            <div className="mt-8 flex flex-col gap-4">
              {quickLinks.map((link) => (
                <FooterLink key={link.label} label={link.label} href={localizeInternalHref(link.href, locale)} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-white">
              {officeInfoLabel}
            </h2>
            <div className="mt-8 space-y-8">
              {officeItems.map((item) => (
                <OfficeItem key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/78">
          {copyright}
        </div>
      </div>
    </footer>
  )
}
