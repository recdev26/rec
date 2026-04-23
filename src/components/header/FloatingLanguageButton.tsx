import { Languages } from 'lucide-react'
import { buildLocaleSwitchHref, type Locale } from '../../lib/i18n'

interface FloatingLanguageButtonProps {
  locale: Locale
  pathname: string
}

export default function FloatingLanguageButton({ locale, pathname }: FloatingLanguageButtonProps) {
  const targetLocale: Locale = locale === 'pt' ? 'en' : 'pt'
  const href = buildLocaleSwitchHref(pathname, targetLocale)
  const label = locale === 'pt' ? 'EN' : 'PT'
  const ariaLabel =
    locale === 'pt'
      ? 'Switch website language to English'
      : 'Mudar idioma do website para português'

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="fixed right-5 bottom-5 z-[65] inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold !text-white no-underline shadow-[0_14px_30px_rgba(13,107,101,0.35)] transition hover:bg-[var(--color-accent-hover)] hover:!text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
    >
      <Languages size={16} strokeWidth={2.2} />
      <span>{label}</span>
    </a>
  )
}
