import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface HighlightCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  linkLabel: string
}

export default function HighlightCard({
  icon: Icon,
  title,
  description,
  href,
  linkLabel,
}: HighlightCardProps) {
  return (
    <article className="group relative overflow-hidden bg-white p-8 shadow-[0_18px_44px_rgba(11,46,44,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(11,46,44,0.12)]">
      <div className="absolute right-0 top-0 h-40 w-40 bg-[radial-gradient(circle,rgba(18,137,130,0.08),transparent_68%)]" />
      <div className="relative">
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)]">
          <Icon size={34} strokeWidth={1.9} />
        </div>

        <h3 className="font-heading text-2xl leading-tight font-bold text-[var(--color-text)]">
          {title}
        </h3>

        <p className="mt-5 text-[var(--color-gray-dark)]">
          {description}
        </p>

        <a
          href={href}
          className="mt-8 inline-flex items-center gap-2 text-base font-semibold !text-[var(--color-accent)] no-underline transition hover:gap-3 hover:!text-[var(--color-accent-hover)]"
        >
          {linkLabel}
          <ArrowRight size={18} strokeWidth={2.1} />
        </a>
      </div>
    </article>
  )
}
