import { BadgeCheck, BriefcaseBusiness, Map } from 'lucide-react'
import HighlightCard from '../ui/HighlightCard'
import SectionLabel from '../ui/SectionLabel'

const highlights = [
  {
    icon: BriefcaseBusiness,
    title: 'Mais de duas décadas de experiência',
    description:
      'Desde 2000, actuamos no mercado moçambicano com profissionalismo e rigor, apoiando clientes institucionais, empresas e particulares na tomada de decisões estratégicas.',
    href: '/about',
    linkLabel: 'Saiba mais',
  },
  {
    icon: BadgeCheck,
    title: 'Metodologias reconhecidas internacionalmente',
    description:
      'Aliamos experiência técnica, conhecimento do mercado e padrões internacionais para garantir resultados fiáveis, transparentes e ajustados às exigências de cada cliente.',
    href: '/about',
    linkLabel: 'Conhecer a REC',
  },
  {
    icon: Map,
    title: 'Cobertura nacional com conhecimento local',
    description:
      'Prestamos apoio especializado em todo o país, com uma abordagem próxima, multidisciplinar e orientada para a valorização dos activos e a confiança do cliente.',
    href: '/contactos',
    linkLabel: 'Fale connosco',
  },
] as const

export default function HomeHighlightsSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-off-white)] py-14 lg:py-20">
      <div className="absolute inset-y-0 right-0 hidden w-72 bg-[radial-gradient(circle_at_center,rgba(18,137,130,0.06),transparent_68%)] lg:block" />
      <div className="absolute left-0 top-14 h-56 w-56 rounded-full bg-[rgba(18,137,130,0.05)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel align="center">A Nossa Abordagem</SectionLabel>
          <h2 className="font-heading text-2xl md:text-4xl leading-tight font-bold text-[var(--color-text)]">
            Experiência, rigor técnico e uma visão clara para
            <span className="block text-[var(--color-accent)]">
              acrescentar valor em cada decisão imobiliária
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg leading-8 text-[var(--color-gray-dark)]">
            A REC combina proximidade, competência técnica e profundo
            conhecimento do mercado para apoiar investimentos, projectos e
            activos com confiança e responsabilidade.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {highlights.map((item) => (
            <HighlightCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
