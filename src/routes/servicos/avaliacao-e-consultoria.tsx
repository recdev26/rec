import { createFileRoute } from '@tanstack/react-router'
import ServiceDetailPage from '../../components/services/ServiceDetailPage'
import NotFoundPage from '../../components/layout/NotFoundPage'
import { resolveLocaleFromSearch } from '../../lib/i18n'
import { buildSeoHead } from '../../lib/seo'
import { getServicePageData } from '../../lib/wp-api'

export const Route = createFileRoute('/servicos/avaliacao-e-consultoria')({
  loader: async ({ location }) =>
    getServicePageData('avaliacao-e-consultoria', resolveLocaleFromSearch(location.search)),
  head: ({ loaderData }) =>
    buildSeoHead({
      title: loaderData?.service?.title ?? 'Avaliação e Consultoria Imobiliária',
      description:
        loaderData?.service?.description ??
        'Serviços de avaliação e consultoria imobiliária com rigor técnico para apoiar decisões de investimento e gestão patrimonial.',
      path: '/servicos/avaliacao-e-consultoria',
    }),
  component: AvaliacaoEConsultoriaPage,
})

function AvaliacaoEConsultoriaPage() {
  const { service, serviceLinks, metrics } = Route.useLoaderData()

  if (!service) {
    return <NotFoundPage />
  }

  return <ServiceDetailPage service={service} serviceLinks={serviceLinks} metrics={metrics} />
}
