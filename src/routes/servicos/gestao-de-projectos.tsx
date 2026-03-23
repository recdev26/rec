import { createFileRoute } from '@tanstack/react-router'
import ServiceDetailPage from '../../components/services/ServiceDetailPage'
import { requireServiceBySlug } from '../../lib/services'

const service = requireServiceBySlug('gestao-de-projectos')

export const Route = createFileRoute('/servicos/gestao-de-projectos')({
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
  component: GestaoDeProjectosPage,
})

function GestaoDeProjectosPage() {
  return <ServiceDetailPage service={service} />
}
