import type { Locale } from '../../lib/i18n'
import { getHomeInfoItems } from './header-data'

interface HomeInfoBandProps {
  locale: Locale
}

export default function HomeInfoBand({ locale }: HomeInfoBandProps) {
  const homeInfoItems = getHomeInfoItems(locale)

  return (
    <div className="hidden bg-[#1c2f35] text-white lg:block">
      <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-white/10 border-x border-white/10 px-0">
        {homeInfoItems.map(({ icon: Icon, eyebrow, value, href }) => {
          const content = (
            <>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-[var(--color-accent-light)]">
                <Icon size={10} strokeWidth={2.1} />
              </span>
              <span className="space-y-1">
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                  {eyebrow}
                </span>
                <span className="block max-w-[13rem] leading-tight font-semibold text-white text-xs">
                  {value}
                </span>
              </span>
            </>
          )

          if (href) {
            return (
              <a
                key={eyebrow}
                href={href}
                target={href.startsWith('https://') ? '_blank' : undefined}
                rel={href.startsWith('https://') ? 'noreferrer' : undefined}
                className="flex items-center gap-5 px-10 py-3 text-white no-underline transition hover:bg-white/5"
              >
                {content}
              </a>
            )
          }

          return (
            <div key={eyebrow} className="flex items-center gap-5 px-10 py-3">
              {content}
            </div>
          )
        })}
      </div>
    </div>
  )
}
