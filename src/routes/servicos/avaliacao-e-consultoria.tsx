import { createFileRoute } from '@tanstack/react-router'
import ServiceDetailPage from '../../components/services/ServiceDetailPage'
import { requireServiceBySlug } from '../../lib/services'

const service = requireServiceBySlug('avaliacao-e-consultoria')

export const Route = createFileRoute('/servicos/avaliacao-e-consultoria')({
  head: () => ({
    meta: [
      {
        title: `${service.title} | REC — Real Estate Consulting`,
      },
      {
        name: 'description',
        content: service.description,
      },
      {
        property: 'og:title',
        content: `${service.title} | REC — Real Estate Consulting`,
      },
      {
        property: 'og:description',
        content: service.description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        content: service.imageSrc,
      },
    ],
    links: [{ rel: 'canonical', href: `https://rec.co.mz${service.href}` }],
  }),
  component: AvaliacaoEConsultoriaPage,
})

function AvaliacaoEConsultoriaPage() {
  return <ServiceDetailPage service={service} />
}
