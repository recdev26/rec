import { ArrowRight } from 'lucide-react'

interface BlogCardProps {
  dateDay: string
  dateMonth: string
  title: string
  excerpt: string
  tone: 'sage' | 'mist' | 'clay'
}

const toneClasses = {
  sage:
    'bg-[linear-gradient(145deg,rgba(208,228,218,0.62)_0%,rgba(255,255,255,0.84)_38%,rgba(154,189,167,0.54)_100%)]',
  mist:
    'bg-[linear-gradient(145deg,rgba(214,226,238,0.64)_0%,rgba(255,255,255,0.86)_38%,rgba(196,207,219,0.58)_100%)]',
  clay:
    'bg-[linear-gradient(145deg,rgba(212,193,180,0.72)_0%,rgba(164,121,88,0.48)_34%,rgba(225,220,214,0.72)_100%)]',
} as const

export default function BlogCard({
  dateDay,
  dateMonth,
  title,
  excerpt,
  tone,
}: BlogCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden bg-[var(--color-off-white)] shadow-[0_18px_44px_rgba(11,46,44,0.08)]">
      <div className={`relative h-48 overflow-hidden ${toneClasses[tone]}`}>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_30%,rgba(26,46,45,0.12)_100%)]" />
        <div className="absolute left-[10%] bottom-0 h-[78%] w-[28%] rounded-t-[2.2rem] bg-white/78 shadow-[0_16px_34px_rgba(26,46,45,0.16)]" />
        <div className="absolute left-[34%] bottom-0 h-[62%] w-[20%] rounded-t-[2rem] bg-[rgba(18,137,130,0.22)]" />
        <div className="absolute right-[8%] bottom-0 h-[88%] w-[42%] rounded-t-[2.8rem] bg-[linear-gradient(180deg,rgba(28,47,53,0.88),rgba(28,47,53,0.62))] shadow-[0_18px_38px_rgba(10,26,28,0.22)]" />

        <div className="absolute left-7 top-7 flex h-16 w-16 flex-col items-center justify-center bg-[var(--color-accent)] text-white">
          <span className="font-heading text-2xl leading-none font-bold">{dateDay}</span>
          <span className="mt-1 text-sm font-semibold tracking-[0.08em] uppercase">
            {dateMonth}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-8">
        <h3 className="mb-2 font-heading text-xl leading-tight font-bold text-[var(--color-text)]">
          {title}
        </h3>
        <p className="flex-1 text-[var(--color-gray-dark)]">
          {excerpt}
        </p>
        <div className="mt-8 border-t border-[var(--color-gray-light)] pt-7">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-base font-semibold !text-[var(--color-accent)] no-underline transition hover:gap-3 hover:!text-[var(--color-accent-hover)]"
          >
            Ler mais
            <ArrowRight size={18} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </article>
  )
}
