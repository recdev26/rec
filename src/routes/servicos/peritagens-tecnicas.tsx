import { createFileRoute } from '@tanstack/react-router'
import ServiceDetailPage from '../../components/services/ServiceDetailPage'
import NotFoundPage from '../../components/layout/NotFoundPage'
import { resolveLocaleFromSearch } from '../../lib/i18n'
import { buildSeoHead } from '../../lib/seo'
import { getServicePageData } from '../../lib/wp-api'

export const Route = createFileRoute('/servicos/peritagens-tecnicas')({
  loader: async ({ location }) =>
    getServicePageData('peritagens-tecnicas', resolveLocaleFromSearch(location.search)),
  head: ({ loaderData }) =>
    buildSeoHead({
      title: loaderData?.service?.title ?? 'Peritagens Técnicas',
      description:
        loaderData?.service?.description ??
        'Peritagens técnicas com análise independente e fundamentada para suporte a decisões, litígios e conformidade técnica.',
      path: '/servicos/peritagens-tecnicas',
    }),
  component: PeritagensTecnicasPage,
})

function PeritagensTecnicasPage() {
  const { service, serviceLinks, metrics } = Route.useLoaderData()

  if (!service) {
    return <NotFoundPage />
  }

  return <ServiceDetailPage service={service} serviceLinks={serviceLinks} metrics={metrics} />
}
