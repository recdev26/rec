import { serviceStats } from '../../lib/services'

export default function StatsBand() {
  return (
    <section className="bg-[var(--bg-dark)] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-0">
          {serviceStats.map((stat, index) => (
            <article
              key={stat.label}
              className={`text-center lg:px-10 ${index < serviceStats.length - 1 ? 'lg:border-r lg:border-white/18' : ''}`}
            >
              <p className="font-heading text-5xl font-extrabold tracking-tight text-white">
                {stat.value}
              </p>
              <p className="mt-4 text-sm font-semibold tracking-[0.2em] text-[var(--color-accent-light)] uppercase">
                {stat.label}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/74">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
