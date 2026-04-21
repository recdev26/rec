import { Facebook, Instagram, Linkedin } from 'lucide-react'

const socialLinks = [
  {
    href: 'https://www.facebook.com/share/18M9FZFAPJ/?mibextid=wwXIfr',
    label: 'Facebook',
    icon: Facebook,
  },
  {
    href: 'https://www.instagram.com/rec.co.mz?igsh=MXFocXphOXpjbWk2Yw==',
    label: 'Instagram',
    icon: Instagram,
  },
  {
    href: 'https://www.linkedin.com/company/rec-real-estate-consulting/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
] as const

export default function TopBar() {
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
              href ? (
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
              ) : (
                <span
                  key={label}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text)] opacity-50"
                >
                  <Icon size={18} strokeWidth={2.2} />
                </span>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
