import { createFileRoute } from '@tanstack/react-router'
import ServiceDetailPage from '../../components/services/ServiceDetailPage'
import NotFoundPage from '../../components/layout/NotFoundPage'
import { getServicePageData } from '../../lib/wp-api'

export const Route = createFileRoute('/servicos/peritagens-tecnicas')({
  loader: async () => getServicePageData('peritagens-tecnicas'),
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.service?.title ?? 'Serviço'} | REC — Real Estate Consulting`,
      },
      {
        name: 'description',
        content: loaderData?.service?.description ?? 'Serviço da REC.',
      },
      {
        property: 'og:title',
        content: `${loaderData?.service?.title ?? 'Serviço'} | REC — Real Estate Consulting`,
      },
      {
        property: 'og:description',
        content: loaderData?.service?.description ?? 'Serviço da REC.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        content: loaderData?.service?.imageSrc ?? '/contact.jpg',
      },
    ],
    links: [{ rel: 'canonical', href: `https://rec.co.mz/servicos/peritagens-tecnicas` }],
  }),
  component: PeritagensTecnicasPage,
})

function PeritagensTecnicasPage() {
  const { service, serviceLinks } = Route.useLoaderData()

  if (!service) {
    return <NotFoundPage />
  }

  return <ServiceDetailPage service={service} serviceLinks={serviceLinks} />
}
