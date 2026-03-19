interface ServiceStatCardProps {
  value: string
  label: string
  description: string
}

export default function ServiceStatCard({
  value,
  label,
  description,
}: ServiceStatCardProps) {
  return (
    <article className="rounded-tl-[3.5rem] rounded-br-[3.5rem] border border-transparent bg-[linear-gradient(180deg,#eef4f7_0%,#f8fbfc_100%)] p-10 transition duration-300 hover:border-[var(--color-accent)] ">
      <p className="font-heading text-5xl leading-none font-bold tracking-tight text-[var(--color-text)] mb-2">
        {value}
      </p>
      <p className="mb-4 text-base font-semibold tracking-[0.02em] text-[var(--color-accent)] uppercase">
        {label}
      </p>
      <p className="max-w-md text-sm leading-[1.9] text-[var(--color-gray-dark)]">
        {description}
      </p>
    </article>
  )
}
