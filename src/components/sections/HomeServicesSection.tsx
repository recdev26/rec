import SectionLabel from '../ui/SectionLabel'
import ServiceShowcaseCard from '../ui/ServiceShowcaseCard'
import { attachServiceIconsToList } from '../../lib/services'
import type { ServiceDetailData } from '../../lib/services'
import { useLocale } from '../../lib/use-locale'

interface HomeServicesSectionProps {
  services: readonly ServiceDetailData[]
}

export default function HomeServicesSection({ services }: HomeServicesSectionProps) {
  const hydratedServices = attachServiceIconsToList(services)
  const locale = useLocale()

  const copy =
    locale === 'en'
      ? {
          label: 'Our Services',
          titleLine1: 'Technical competence across each stage of',
          titleLine2: 'your real estate investment',
          description:
            'From initial appraisal through to delivery and technical verification, we provide specialist services that strengthen confidence, reduce risk and support informed client decision-making.',
        }
      : {
          label: 'Os Nossos Serviços',
          titleLine1: 'Competência técnica para cada fase do',
          titleLine2: 'seu investimento imobiliário',
          description:
            'Da análise inicial à execução e verificação técnica, prestamos serviços especializados que reforçam a confiança, reduzem o risco e ajudam o cliente a decidir com segurança.',
        }

  return (
    <section
      id="servicos"
      className="relative scroll-mt-28 overflow-hidden bg-[var(--color-text)] py-14 text-white lg:scroll-mt-40 lg:py-20"
    >
      <div className="absolute left-0 top-0 h-64 w-64 rounded-br-full bg-[rgba(255,255,255,0.04)]" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-tl-full bg-[rgba(255,255,255,0.04)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel align="center">{copy.label}</SectionLabel>
          <h2 className="font-heading text-xl md:text-4xl leading-tight font-bold text-white">
            {copy.titleLine1}
            <span className="block text-[var(--color-accent-light)]">
              {copy.titleLine2}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg text-white/74">
            {copy.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {hydratedServices.map((service) => (
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
