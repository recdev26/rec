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
    <article className="rounded-tl-[3.5rem] rounded-br-[3.5rem] border border-transparent bg-[linear-gradient(180deg,#eef4f7_0%,#f8fbfc_100%)] px-10 py-12 transition duration-300 hover:border-[var(--color-accent)] lg:px-12 lg:py-14">
      <p className="font-heading text-[4.75rem] leading-none font-bold tracking-tight text-[var(--color-text)]">
        {value}
      </p>
      <p className="mt-5 text-[1.05rem] font-semibold tracking-[0.02em] text-[var(--color-accent)] uppercase">
        {label}
      </p>
      <p className="mt-9 max-w-md text-[1.15rem] leading-[1.9] text-[var(--color-gray-dark)]">
        {description}
      </p>
    </article>
  )
}
