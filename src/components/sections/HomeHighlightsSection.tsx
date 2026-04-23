import { BadgeCheck, BriefcaseBusiness, Map } from 'lucide-react'
import { localizeInternalHref } from '../../lib/i18n'
import { useLocale } from '../../lib/use-locale'
import HighlightCard from '../ui/HighlightCard'
import SectionLabel from '../ui/SectionLabel'

function getHighlights(locale: 'pt' | 'en') {
  return [
    {
      icon: BriefcaseBusiness,
      title: locale === 'en' ? 'Over two decades of market experience' : 'Mais de duas décadas de experiência',
      description:
        locale === 'en'
          ? 'Since 2000, we have supported institutional and private clients across Mozambique with disciplined analysis and professional advice for strategic property decisions.'
          : 'Desde 2000, actuamos no mercado moçambicano com profissionalismo e rigor, apoiando clientes institucionais, empresas e particulares na tomada de decisões estratégicas.',
      href: '/sobre-nos',
      linkLabel: locale === 'en' ? 'Learn more' : 'Saiba mais',
    },
    {
      icon: BadgeCheck,
      title:
        locale === 'en'
          ? 'Internationally aligned methodologies'
          : 'Metodologias reconhecidas internacionalmente',
      description:
        locale === 'en'
          ? 'We combine technical expertise, market intelligence and internationally recognised standards to deliver transparent and reliable outputs.'
          : 'Aliamos experiência técnica, conhecimento do mercado e padrões internacionais para garantir resultados fiáveis, transparentes e ajustados às exigências de cada cliente.',
      href: '/sobre-nos',
      linkLabel: locale === 'en' ? 'About REC' : 'Conhecer a REC',
    },
    {
      icon: Map,
      title: locale === 'en' ? 'National coverage with local insight' : 'Cobertura nacional com conhecimento local',
      description:
        locale === 'en'
          ? 'We provide specialist support nationwide through a multidisciplinary team focused on asset value protection and decision certainty.'
          : 'Prestamos apoio especializado em todo o país, com uma abordagem próxima, multidisciplinar e orientada para a valorização dos activos e a confiança do cliente.',
      href: '/contactos',
      linkLabel: locale === 'en' ? 'Contact us' : 'Fale connosco',
    },
  ] as const
}

export default function HomeHighlightsSection() {
  const locale = useLocale()
  const highlights = getHighlights(locale)

  const copy =
    locale === 'en'
      ? {
          label: 'Our Approach',
          titleLine1: 'Experience, technical rigour and clear judgement to',
          titleLine2: 'create value in every property decision',
          description:
            'REC combines close client support, technical competence and deep market understanding to guide investments, projects and property assets with confidence.',
        }
      : {
          label: 'A Nossa Abordagem',
          titleLine1: 'Experiência, rigor técnico e uma visão clara para',
          titleLine2: 'acrescentar valor em cada decisão imobiliária',
          description:
            'A REC combina proximidade, competência técnica e profundo conhecimento do mercado para apoiar investimentos, projectos e activos com confiança e responsabilidade.',
        }

  return (
    <section className="relative overflow-hidden bg-[var(--bg-off-white)] py-14 lg:py-20">
      <div className="absolute inset-y-0 right-0 hidden w-72 bg-[radial-gradient(circle_at_center,rgba(18,137,130,0.06),transparent_68%)] lg:block" />
      <div className="absolute left-0 top-14 h-56 w-56 rounded-full bg-[rgba(18,137,130,0.05)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel align="center">{copy.label}</SectionLabel>
          <h2 className="font-heading text-2xl md:text-4xl leading-tight font-bold text-[var(--color-text)]">
            {copy.titleLine1}
            <span className="block text-[var(--color-accent)]">
              {copy.titleLine2}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-[var(--color-gray-dark)]">
            {copy.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {highlights.map((item) => (
            <HighlightCard
              key={item.title}
              {...item}
              href={localizeInternalHref(item.href, locale)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
