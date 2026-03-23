import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface ServiceShowcaseCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  imageSrc: string
  imageAlt: string
}

export default function ServiceShowcaseCard({
  icon: Icon,
  title,
  description,
  href,
  imageSrc,
  imageAlt,
}: ServiceShowcaseCardProps) {
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

      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          width="1024"
          height="1024"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%,rgba(18,29,31,0.44)_100%)]" />
        <div className="absolute inset-0 bg-[rgba(18,29,31,0.2)] opacity-0 transition duration-300 group-hover:opacity-100" />
        <a
          href={href}
          className="absolute inset-x-8 bottom-8 inline-flex translate-y-4 items-center justify-center gap-3 bg-[rgba(18,137,130,0.92)] px-4 py-4 font-semibold !text-white no-underline opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:!text-white"
        >
          Ler mais detalhes
          <ArrowRight size={20} strokeWidth={2.1} />
        </a>
      </div>
    </article>
  )
}
