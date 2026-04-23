import { CheckCircle2 } from 'lucide-react'
import { useLocale } from '../../lib/use-locale'
import SectionLabel from '../ui/SectionLabel'

const certifications = ['RICS', 'IVSC', 'TEGoVA'] as const

export default function AboutIntroSection() {
  const locale = useLocale()
  const highlights =
    locale === 'en'
      ? [
          'Over two decades of advisory and valuation practice in Mozambique.',
          'International standards applied with strong local market knowledge.',
          'Comprehensive, bespoke solutions focused on confidence and accountability.',
        ]
      : [
          'Mais de duas décadas de experiência no mercado moçambicano.',
          'Padrões internacionais aplicados com profundo conhecimento local.',
          'Soluções completas, personalizadas e orientadas para a confiança.',
        ]

  const copy =
    locale === 'en'
      ? {
          imageAltOne: 'REC team in a technical consultancy meeting',
          imageAltTwo: 'Modern high-rise buildings representing real estate markets',
          label: 'About Us',
          titleLine1: 'A trusted real estate consultancy',
          titleLine2: 'with technical judgement and international standards',
          paragraphOne:
            'REC, Lda. — Real Estate Consulting, a Meridian 32 Group company, has operated in Mozambique since 2000, delivering consultancy, valuation and real estate management services.',
          paragraphTwo:
            'Our multidisciplinary team applies professional rigour, ethics and accountability to provide tailored solutions aligned with global best practice and client objectives.',
          callLabel: 'Call us:',
        }
      : {
          imageAltOne: 'Equipa da REC em reunião de consultoria',
          imageAltTwo: 'Arranha-céus modernos representando o sector imobiliário',
          label: 'Sobre Nós',
          titleLine1: 'Uma consultora imobiliária de confiança',
          titleLine2: 'com visão técnica e padrões internacionais',
          paragraphOne:
            'A REC, Lda. — Real Estate Consulting, subsidiária do Grupo Meridian 32, actua no mercado moçambicano desde 2000, prestando serviços de excelência nas áreas de consultoria, avaliação e gestão imobiliária.',
          paragraphTwo:
            'Com uma equipa multidisciplinar altamente qualificada, trabalhamos com rigor, ética e responsabilidade para oferecer soluções completas, ajustadas às exigências de cada cliente e alinhadas com as melhores práticas globais.',
          callLabel: 'Ligue-nos:',
        }

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8">
        <div className="relative min-h-[34rem] lg:min-h-[46rem]">
          <div className="absolute left-0 top-0 h-[72%] w-[70%] overflow-hidden rounded shadow-[0_24px_60px_rgba(20,38,39,0.16)]">
            <img
              src="/about_2.png"
              alt={copy.imageAltOne}
              width="1366"
              height="768"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(26,46,45,0.12))]" />
          </div>
          <div className="absolute left-[54%] top-[18%] h-40 w-40 bg-[linear-gradient(135deg,rgba(18,137,130,0.18),rgba(18,137,130,0.06))]" />
          <div className="absolute right-0 bottom-0 h-[60%] w-[64%] overflow-hidden rounded shadow-[0_24px_54px_rgba(20,38,39,0.14)]">
            <img
              src="/about_1.png"
              alt={copy.imageAltTwo}
              width="1920"
              height="1280"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(26,46,45,0.16))]" />
          </div>
        </div>

        <div>
          <SectionLabel>{copy.label}</SectionLabel>
          <h2 className="font-heading text-xl md:text-3xl leading-tight font-bold text-[var(--color-text)] ">
            {copy.titleLine1}
            <span className="block text-[var(--color-accent)]">
              {copy.titleLine2}
            </span>
          </h2>

          <p className="mt-6 leading-relaxed text-[var(--color-gray-dark)]">
            {copy.paragraphOne}
          </p>

          <p className="mt-2 md:leading-relaxed text-[var(--color-gray-dark)]">
            {copy.paragraphTwo}
          </p>

          <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-4">
              <CheckCircle2
                  size={26}
                  strokeWidth={2.3}
                  className="mt-1 shrink-0 text-[var(--color-accent)]"
                />
                <p className="md:leading-9 font-medium text-[var(--color-text)]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[var(--color-gray-light)] pt-8">
            {certifications.map((item) => (
              <span
                key={item}
                className="inline-flex min-h-12 items-center justify-center border border-[var(--color-gray-light)] bg-[var(--color-off-white)] px-5 text-xs font-semibold tracking-[0.14em] text-[var(--color-text)] uppercase"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[var(--color-gray-light)] pt-8">
            <p className="leading-none text-[var(--color-gray-dark)]">
              {copy.callLabel}
            </p>
            <a
              href="tel:+25821505000"
              className="font-heading font-bold !text-[var(--color-accent)] no-underline transition hover:!text-[var(--color-accent-hover)]"
            >
              +258 21 505 000
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
