interface PageBreadcrumbProps {
  label: string
  title: string
}

export default function PageBreadcrumb({
  label,
  title,
}: PageBreadcrumbProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-text)] py-12 text-white lg:py-12">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,26,28,0.84)_0%,rgba(10,26,28,0.74)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_78%,rgba(18,137,130,0.16),transparent_20%),linear-gradient(130deg,transparent_0%,transparent_58%,rgba(255,255,255,0.04)_58%,rgba(255,255,255,0.04)_64%,transparent_64%,transparent_100%)]" />
      <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(90deg,rgba(0,0,0,0.28),rgba(0,0,0,0.12))]" />
      <div className="absolute -left-6 bottom-0 h-64 w-56 bg-[rgba(18,137,130,0.2)] [clip-path:polygon(24%_0%,100%_0%,74%_100%,0%_100%)]" />
      <div className="absolute left-16 bottom-0 h-72 w-20 bg-[rgba(18,137,130,0.16)] [clip-path:polygon(24%_0%,100%_0%,74%_100%,0%_100%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-[0.18em] text-[var(--color-accent-light)] uppercase">
            {label}
          </p>
          <h1 className="mt-5 max-w-4xl font-heading text-3xl leading-tight font-bold text-white break-words sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  )
}
