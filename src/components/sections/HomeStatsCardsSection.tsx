import { serviceStats, type ServiceMetric } from '../../lib/services'
import ServiceStatCard from '../ui/ServiceStatCard'

interface HomeStatsCardsSectionProps {
  metrics?: readonly ServiceMetric[]
}

export default function HomeStatsCardsSection({ metrics = serviceStats }: HomeStatsCardsSectionProps) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {metrics.map((stat) => (
            <ServiceStatCard
              key={stat.slug}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
