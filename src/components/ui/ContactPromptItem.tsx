import type { LucideIcon } from 'lucide-react'

interface ContactPromptItemProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function ContactPromptItem({
  icon: Icon,
  title,
  description,
}: ContactPromptItemProps) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-[var(--color-off-white)] text-[var(--color-accent)]">
        <Icon size={34} strokeWidth={1.9} />
      </div>
      <div>
        <h3 className="font-heading text-xl leading-tight font-bold text-[var(--color-text)]">
          {title}
        </h3>
        <p className="mt-3 leading-relaxed text-[var(--color-gray-dark)]">
          {description}
        </p>
      </div>
    </div>
  )
}
