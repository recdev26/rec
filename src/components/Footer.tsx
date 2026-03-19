import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const quickLinks = [
  { label: 'Início', href: '/' },
  { label: 'Sobre Nós', href: '/about' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contactos', href: '/contactos' },
] as const

const officeItems = [
  {
    icon: Phone,
    label: 'Ligue-nos',
    value: '+258 21 505 000',
    href: 'tel:+25821505000',
  },
  {
    icon: Mail,
    label: 'Envie-nos um e-mail',
    value: 'consulting@rec.co.mz',
    href: 'mailto:consulting@rec.co.mz',
  },
  {
    icon: MapPin,
    label: 'A nossa morada',
    value: 'Av. FPLM, nº 857, Maputo',
    href: 'https://maps.google.com/?q=Av.+FPLM,+857,+Maputo',
  },
] as const

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com' },
] as const

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 text-lg text-white/66 no-underline transition hover:gap-4 hover:!text-white"
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
      <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[var(--color-accent)]">
        <Icon size={24} strokeWidth={2.1} />
      </span>
      <div>
        <p className="m-0 text-xl text-white/68">{label}</p>
        <a
          href={href}
          target={href.startsWith('https://') ? '_blank' : undefined}
          rel={href.startsWith('https://') ? 'noreferrer' : undefined}
          className="mt-1 inline-block text-2xl font-semibold !text-white no-underline transition hover:!text-[var(--color-accent-light)]"
        >
          {value}
        </a>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer mt-0 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_1.1fr]">
          <div>
            <img
              src="/logo.jpg"
              alt="Logótipo da REC"
              width="198"
              height="107"
              className="h-14 w-auto object-contain brightness-[1.18] saturate-0 invert"
            />
            <p className="mt-8 max-w-md text-xl leading-10 text-white/62">
              A REC, Lda. presta consultoria imobiliária com rigor técnico,
              proximidade e compromisso com decisões seguras e sustentadas.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-14 w-14 items-center justify-center bg-white text-[var(--color-accent)] no-underline transition hover:-translate-y-1 hover:bg-[var(--color-accent-light)]"
                >
                  <Icon size={24} strokeWidth={2.1} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-4xl font-bold text-white">
              Ligações Rápidas
            </h2>
            <div className="mt-8 flex flex-col gap-6">
              {quickLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-4xl font-bold text-white">
              Informações do Escritório
            </h2>
            <div className="mt-8 space-y-8">
              {officeItems.map((item) => (
                <OfficeItem key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xl text-white/78">
          REC, Lda. © 2025. Todos os direitos reservados. | Grupo Meridian 32
        </div>
      </div>
    </footer>
  )
}
