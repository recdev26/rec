import SectionLabel from '../ui/SectionLabel'
import ServiceShowcaseCard from '../ui/ServiceShowcaseCard'
import { services } from '../../lib/services'

export default function HomeServicesSection() {
  return (
    <section
      id="servicos"
      className="relative scroll-mt-28 overflow-hidden bg-[var(--color-text)] py-14 text-white lg:scroll-mt-40 lg:py-20"
    >
      <div className="absolute left-0 top-0 h-64 w-64 rounded-br-full bg-[rgba(255,255,255,0.04)]" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-tl-full bg-[rgba(255,255,255,0.04)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel align="center">Os Nossos Serviços</SectionLabel>
          <h2 className="font-heading text-xl md:text-4xl leading-tight font-bold text-white">
            Competência técnica para cada fase do
            <span className="block text-[var(--color-accent-light)]">
              seu investimento imobiliário
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg text-white/74">
            Da análise inicial à execução e verificação técnica, prestamos
            serviços especializados que reforçam a confiança, reduzem o risco e
            ajudam o cliente a decidir com segurança.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceShowcaseCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
