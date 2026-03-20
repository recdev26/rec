interface ProjectSlideCardProps {
  company: string
  category: string
  title: string
  location: string
  logoSrc?: string
  logoAlt?: string
  tone: 'teal' | 'mist' | 'deep' | 'slate'
}

const toneClasses = {
  teal:
    'bg-[linear-gradient(145deg,rgba(13,107,101,0.13)_0%,rgba(255,255,255,0.86)_40%,rgba(232,245,244,0.95)_100%)]',
  mist:
    'bg-[linear-gradient(145deg,rgba(240,244,244,0.96)_0%,rgba(255,255,255,0.98)_34%,rgba(232,245,244,0.84)_100%)]',
  deep:
    'bg-[linear-gradient(145deg,rgba(13,107,101,0.2)_0%,rgba(18,137,130,0.08)_38%,rgba(255,255,255,0.92)_100%)]',
  slate:
    'bg-[linear-gradient(145deg,rgba(232,245,244,0.96)_0%,rgba(240,244,244,0.9)_46%,rgba(13,107,101,0.1)_100%)]',
} as const

function getLogoInitials(company: string) {
  return company
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((chunk) => chunk[0]?.toUpperCase() ?? '')
    .join('')
}

function splitCompanyName(company: string) {
  const parts = company.split(' ').filter(Boolean)

  if (parts.length <= 1) {
    return { main: company, sub: '' }
  }

  return {
    main: parts.slice(0, Math.min(2, parts.length)).join(' '),
    sub: parts.slice(2).join(' '),
  }
}

export default function ProjectSlideCard({
  company,
  category,
  title,
  location,
  logoSrc,
  logoAlt,
  tone,
}: ProjectSlideCardProps) {
  const companyWordmark = splitCompanyName(company)

  return (
    <article className="min-w-[82vw] sm:min-w-[28rem] lg:min-w-[31rem]">
      <a
        href="/contactos"
        className="group relative block h-[30rem] overflow-hidden rounded-[1.25rem] no-underline shadow-[0_22px_56px_rgba(7,35,34,0.16)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(7,35,34,0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
      >
        <div className={`absolute inset-0 ${toneClasses[tone]}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(255,255,255,0.88),transparent_35%),radial-gradient(circle_at_22%_82%,rgba(18,137,130,0.17),transparent_42%)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(118deg,rgba(13,107,101,0.08)_0px,rgba(13,107,101,0.08)_1px,transparent_1px,transparent_22px)] opacity-55" />
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(130deg,rgba(13,107,101,0.1)_0%,transparent_34%,transparent_68%,rgba(18,137,130,0.12)_100%)]" />

        <div className="absolute left-6 top-6 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-[0.65rem] font-semibold tracking-[0.18em] text-[var(--color-primary)] uppercase backdrop-blur-sm">
          Caso REC
        </div>
        <div className="absolute right-6 top-6 h-12 w-12 rounded-full border border-white/45 bg-[rgba(255,255,255,0.35)]" />
        <div className="absolute right-20 top-12 h-2 w-14 rounded-full bg-white/50" />

        <div className="absolute inset-0 bg-[rgba(7,35,34,0.14)] opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(180deg,transparent,rgba(7,35,34,0.28))]" />

        <div className="absolute inset-x-8 top-1/2 z-10 -translate-y-1/2 transition duration-500 lg:group-hover:-translate-y-[8.6rem] lg:group-focus-visible:-translate-y-[8.6rem]">
          <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-white/90 px-8 shadow-[0_28px_54px_rgba(7,35,34,0.17)] backdrop-blur-sm">
            <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-accent)]" />
            <div className="absolute -left-8 -top-10 h-24 w-24 rounded-full bg-[rgba(18,137,130,0.15)] blur-md" />
            <div className="absolute -bottom-14 right-4 h-24 w-24 rounded-full bg-[rgba(13,107,101,0.12)] blur-md" />

            {logoSrc ? (
              <img
                src={logoSrc}
                alt={logoAlt ?? `Logótipo da ${company}`}
                width={300}
                height={100}
                className="relative z-10 max-h-20 w-auto object-contain saturate-110"
                loading="lazy"
              />
            ) : (
              <div className="relative z-10 text-center">
                <p className="font-heading text-4xl leading-none font-bold tracking-[0.02em] text-[var(--color-primary)]">
                  {companyWordmark.main}
                </p>
                {companyWordmark.sub ? (
                  <p className="mt-2 text-sm font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">
                    {companyWordmark.sub}
                  </p>
                ) : (
                  <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase">
                    {getLogoInitials(company)}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="absolute inset-x-6 bottom-6 z-20 rounded-xl border border-white/20 bg-[rgba(18,137,130,0.93)] px-7 py-6 shadow-[0_18px_30px_rgba(6,22,22,0.24)] transition duration-500 lg:translate-y-8 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
          <p className="text-xs font-semibold tracking-[0.18em] text-white/80 uppercase">
            {category}
          </p>
          <h3 className="mt-2 font-heading text-xl leading-tight font-bold text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-white/88">{location}</p>
          <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-white/80 uppercase">
            {company}
          </p>
        </div>
      </a>
    </article>
  )
}
