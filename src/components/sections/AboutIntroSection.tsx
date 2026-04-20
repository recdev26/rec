import { CheckCircle2 } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'

const highlights = [
  'Mais de duas décadas de experiência no mercado moçambicano.',
  'Padrões internacionais aplicados com profundo conhecimento local.',
  'Soluções completas, personalizadas e orientadas para a confiança.',
] as const

const certifications = ['RICS', 'IVSC', 'TEGoVA'] as const

export default function AboutIntroSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8">
        <div className="relative min-h-[34rem] lg:min-h-[46rem]">
          <div className="absolute left-0 top-0 h-[72%] w-[70%] overflow-hidden rounded shadow-[0_24px_60px_rgba(20,38,39,0.16)]">
            <img
              src="/about_2.png"
              alt="Equipa da REC em reunião de consultoria"
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
              alt="Arranha-céus modernos representando o sector imobiliário"
              width="1920"
              height="1280"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(26,46,45,0.16))]" />
          </div>
        </div>

        <div>
          <SectionLabel>Sobre Nós</SectionLabel>
          <h2 className="font-heading text-xl md:text-3xl leading-tight font-bold text-[var(--color-text)] ">
            Uma consultora imobiliária de confiança
            <span className="block text-[var(--color-accent)]">
              com visão técnica e padrões internacionais
            </span>
          </h2>

          <p className="mt-6 leading-relaxed text-[var(--color-gray-dark)]">
            A REC, Lda. — Real Estate Consulting, subsidiária do Grupo Meridian
            32, actua no mercado moçambicano desde 2000, prestando serviços de
            excelência nas áreas de consultoria, avaliação e gestão
            imobiliária.
          </p>

          <p className="mt-2 md:leading-relaxed text-[var(--color-gray-dark)]">
            Com uma equipa multidisciplinar altamente qualificada, trabalhamos
            com rigor, ética e responsabilidade para oferecer soluções
            completas, ajustadas às exigências de cada cliente e alinhadas com
            as melhores práticas globais.
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
              Ligue-nos:
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
