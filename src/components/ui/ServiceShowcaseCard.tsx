import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface ServiceShowcaseCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  tone: 'sand' | 'stone' | 'mist'
}

const toneClasses = {
  sand: {
    image:
      'bg-[linear-gradient(145deg,#d8e4e8_0%,#f1ede6_36%,#ccd9d3_100%)]',
    accent: 'bg-[rgba(18,137,130,0.12)]',
    figures: 'bg-[rgba(192,90,70,0.9)]',
  },
  stone: {
    image:
      'bg-[linear-gradient(145deg,#d9d5d9_0%,#ece8e4_34%,#c9d8d5_100%)]',
    accent: 'bg-[rgba(13,107,101,0.12)]',
    figures: 'bg-[rgba(191,84,54,0.92)]',
  },
  mist: {
    image:
      'bg-[linear-gradient(145deg,#d3e7ea_0%,#e8eff1_34%,#d5ddd7_100%)]',
    accent: 'bg-[rgba(26,46,45,0.08)]',
    figures: 'bg-[rgba(95,129,156,0.94)]',
  },
} as const

export default function ServiceShowcaseCard({
  icon: Icon,
  title,
  description,
  href,
  tone,
}: ServiceShowcaseCardProps) {
  const styles = toneClasses[tone]

  return (
    <article className="group flex h-full flex-col overflow-hidden bg-white shadow-[0_18px_46px_rgba(7,31,30,0.12)]">
      <div className="flex-1 p-8 pb-7 lg:p-10 lg:pb-8">
        <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)]">
          <Icon size={34} strokeWidth={1.9} />
        </div>

        <h3 className="mb-2 font-heading text-2xl leading-tight font-semibold text-[var(--color-text)]">
          {title}
        </h3>

        <p className="text-[var(--color-gray-dark)]">
          {description}
        </p>
      </div>

      <div className={`relative h-48 overflow-hidden ${styles.image}`}>
        <div className={`absolute right-4 top-4 h-28 w-28 rounded-full ${styles.accent}`} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_32%,rgba(23,47,53,0.16)_100%)]" />
        <div className="absolute left-[4%] bottom-0 h-[88%] w-[36%] rounded-t-[2.2rem] bg-[linear-gradient(180deg,#f2f4f5_0%,#dde5e7_100%)] shadow-[0_20px_38px_rgba(26,46,45,0.16)]" />
        <div className={`absolute left-[28%] bottom-0 h-[74%] w-[20%] rounded-t-[1.8rem] ${styles.figures} shadow-[0_16px_32px_rgba(26,46,45,0.14)]`} />
        <div className="absolute left-[44%] bottom-0 h-[82%] w-[18%] rounded-t-[1.8rem] bg-[linear-gradient(180deg,#f4f1ee_0%,#d4d8dd_100%)] shadow-[0_16px_32px_rgba(26,46,45,0.12)]" />
        <div className="absolute right-[3%] bottom-0 h-[94%] w-[44%] rounded-t-[2.6rem] bg-[linear-gradient(180deg,rgba(28,47,53,0.96),rgba(28,47,53,0.72))] shadow-[0_22px_44px_rgba(10,26,28,0.24)]" />

        <div className="absolute inset-0 bg-[rgba(18,29,31,0.18)] opacity-0 transition duration-300 group-hover:opacity-100" />
        <a
          href={href}
          className="absolute inset-x-8 bottom-8 inline-flex translate-y-4 items-center justify-center gap-3 bg-[rgba(18,137,130,0.92)] px-6 py-6 text-lg font-semibold !text-white no-underline opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:!text-white"
        >
          Ler mais detalhes
          <ArrowRight size={20} strokeWidth={2.1} />
        </a>
      </div>
    </article>
  )
}
