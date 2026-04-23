import { useLocale } from '../../lib/use-locale'

export default function AboutDetailsSection() {
  const locale = useLocale()
  const paragraphs =
    locale === 'en'
      ? [
          'REC | Real Estate Consulting, Lda. is a Mozambican real estate consultancy and services firm with an established market presence since 2000 and extensive experience across multiple property disciplines.',
          'Over more than two decades, REC has built its reputation on service quality, deep local market knowledge and the ability to respond with professional rigour to the specific requirements of institutional clients, corporate occupiers and private investors.',
          'REC operates on principles of quality, independence, technical rigour and professional ethics, in line with internationally recognised guidance, including standards published by IVSC, RICS and TEGoVA.',
          'Through a delivery model grounded in commitment, transparency and technical competence, REC provides reliable services designed to meet the demands of an evolving property market.',
        ]
      : [
          'A REC | Real Estate Consulting, Lda. é uma empresa moçambicana de consultoria, serviços e gestão imobiliária, presente no mercado desde 2000, com uma trajectória consolidada e uma vasta experiência de actuação em diferentes áreas do sector imobiliário.',
          'Ao longo de mais de duas décadas, a REC tem vindo a afirmar-se pela qualidade dos seus serviços, pelo conhecimento aprofundado do mercado nacional e pela capacidade de responder, com rigor e profissionalismo, às necessidades específicas de clientes institucionais, empresas e particulares. A experiência acumulada, aliada à qualificação técnica dos profissionais que integram a sua equipa, permite oferecer uma abordagem multidisciplinar, consistente e orientada para a criação de valor.',
          'A REC desenvolve a sua actividade com base em princípios de qualidade, independência, rigor técnico e ética profissional, seguindo normas e orientações reconhecidas internacionalmente, designadamente as emitidas pelo International Valuation Standards Council (IVSC), pela Royal Institution of Chartered Surveyors (RICS) e pela TEGoVA | The European Group of Valuers’ Associations.',
          'Com uma actuação assente no compromisso, transparência e competência, a REC procura assegurar aos seus clientes um serviço fiável, tecnicamente fundamentado e ajustado às exigências de um mercado em constante evolução.',
        ]

  return (
    <section className="bg-white pb-14 lg:pb-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="border-t border-[var(--color-gray-light)] pt-10">
          {paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`${index > 0 ? 'mt-6' : ''} leading-relaxed text-[var(--color-gray-dark)]`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
