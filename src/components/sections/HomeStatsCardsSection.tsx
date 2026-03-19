import ServiceStatCard from '../ui/ServiceStatCard'

const stats = [
  {
    value: '+20',
    label: 'Anos de experiência',
    description:
      'Actuamos no mercado moçambicano desde 2000, com um percurso sólido em consultoria, avaliação e gestão imobiliária.',
  },
  {
    value: '11',
    label: 'Províncias abrangidas',
    description:
      'Prestamos serviços em todo o país, combinando visão nacional com conhecimento local e leitura real do mercado.',
  },
  {
    value: '+2.500',
    label: 'Clientes atendidos',
    description:
      'Apoiamos empresas, instituições e particulares com respostas técnicas fiáveis e acompanhamento orientado para resultados.',
  },
] as const

export default function HomeStatsCardsSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {stats.map((stat) => (
            <ServiceStatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
