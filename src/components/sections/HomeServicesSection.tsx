import { ClipboardCheck, HardHat, Landmark } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import ServiceShowcaseCard from '../ui/ServiceShowcaseCard'

const services = [
  {
    icon: Landmark,
    title: 'Avaliação e Consultoria Imobiliária',
    description:
      'Desenvolvemos avaliações criteriosas e independentes de imóveis e activos, seguindo padrões nacionais e internacionais para apoiar decisões seguras e fundamentadas.',
    href: '/servicos/avaliacao-e-consultoria',
    tone: 'sand',
  },
  {
    icon: HardHat,
    title: 'Gestão de Projectos e Fiscalização de Obras',
    description:
      'Coordenamos todas as fases do projecto, desde o planeamento inicial até à entrega final, assegurando prazos, orçamentos e padrões de qualidade.',
    href: '/servicos/gestao-de-projectos',
    tone: 'stone',
  },
  {
    icon: ClipboardCheck,
    title: 'Peritagens Técnicas',
    description:
      'Realizamos inspecções e relatórios técnicos detalhados que identificam riscos, patologias e necessidades de intervenção com rigor e clareza.',
    href: '/servicos/peritagens-tecnicas',
    tone: 'mist',
  },
] as const

export default function HomeServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-text)] py-14 text-white lg:py-20">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-br-full bg-[rgba(255,255,255,0.04)]" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-tl-full bg-[rgba(255,255,255,0.04)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel align="center">Os Nossos Serviços</SectionLabel>
          <h2 className="font-heading text-4xl leading-tight font-bold text-white">
            Competência técnica para cada fase do
            <span className="block text-[var(--color-accent-light)]">
              seu investimento imobiliário
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/74">
            Da análise inicial à execução e verificação técnica, prestamos
            serviços especializados que reforçam a confiança, reduzem o risco e
            ajudam o cliente a decidir com segurança.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceShowcaseCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
