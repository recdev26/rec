import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

type TopBarVariant = 'home' | 'inner'

interface TopBarProps {
  variant: TopBarVariant
}

const socialLinks = [
  {
    href: 'https://www.facebook.com',
    label: 'Facebook',
    icon: Facebook,
  },
  {
    href: 'https://www.instagram.com',
    label: 'Instagram',
    icon: Instagram,
  },
  {
    href: 'https://www.linkedin.com',
    label: 'LinkedIn',
    icon: Linkedin,
  },
] as const

export default function TopBar({ variant }: TopBarProps) {
  if (variant === 'home') {
    return (
      <div className="hidden border-b border-[var(--color-gray-light)] bg-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 lg:px-8">
          <p className="m-0 flex items-center gap-3 text-sm font-medium text-[var(--color-text)]">
            <span>Estamos prontos para valorizar o seu património</span>
            <a
              href="/contactos"
              className="inline-flex items-center gap-2 font-semibold text-[var(--color-accent)] no-underline hover:text-[var(--color-accent-hover)]"
            >
              Contacte-nos
              <span aria-hidden="true">-&gt;</span>
            </a>
          </p>

          <div className="flex items-center gap-5 text-sm text-[var(--color-text)]">
            <span className="font-semibold">Siga-nos:</span>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text)] no-underline transition hover:bg-white hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                >
                  <Icon size={18} strokeWidth={2.2} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="hidden bg-[var(--color-accent)] text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-8">
        <div className="flex items-center gap-6 text-sm">
          <a
            href="mailto:consulting@rec.co.mz"
            className="inline-flex items-center gap-2 text-white no-underline transition hover:text-[var(--color-accent-light)]"
          >
            <Mail size={16} strokeWidth={2.1} />
            <span>consulting@rec.co.mz</span>
          </a>
          <div className="h-8 w-px bg-white/30" />
          <p className="m-0 inline-flex items-center gap-2">
            <Phone size={16} strokeWidth={2.1} />
            <span>Seg-Sex: 08h00-17h00</span>
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <div className="flex items-center gap-5">
            <a href="/blog" className="text-white no-underline transition hover:text-[var(--color-accent-light)]">
              Noticias
            </a>
            <a href="/faq" className="text-white no-underline transition hover:text-[var(--color-accent-light)]">
              FAQ
            </a>
            <a href="/contactos" className="text-white no-underline transition hover:text-[var(--color-accent-light)]">
              Contacto
            </a>
          </div>
          <div className="h-8 w-px bg-white/30" />
          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white no-underline transition hover:bg-white/10 hover:text-[var(--color-accent-light)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon size={18} strokeWidth={2.2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
