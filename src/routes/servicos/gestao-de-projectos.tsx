import { createFileRoute } from '@tanstack/react-router'
import ServiceDetailPage from '../../components/services/ServiceDetailPage'
import NotFoundPage from '../../components/layout/NotFoundPage'
import { resolveLocaleFromSearch } from '../../lib/i18n'
import { buildSeoHead } from '../../lib/seo'
import { getServicePageData } from '../../lib/wp-api'

export const Route = createFileRoute('/servicos/gestao-de-projectos')({
  loader: async ({ location }) =>
    getServicePageData('gestao-de-projectos', resolveLocaleFromSearch(location.search)),
  head: ({ loaderData }) =>
    buildSeoHead({
      title: loaderData?.service?.title ?? 'Gestão de Projectos e Fiscalização de Obras',
      description:
        loaderData?.service?.description ??
        'Acompanhamento técnico de projectos e fiscalização de obras para garantir qualidade, prazo, custo e conformidade.',
      path: '/servicos/gestao-de-projectos',
    }),
  component: GestaoDeProjectosPage,
})

function GestaoDeProjectosPage() {
  const { service, serviceLinks, metrics } = Route.useLoaderData()

  if (!service) {
    return <NotFoundPage />
  }

  return <ServiceDetailPage service={service} serviceLinks={serviceLinks} metrics={metrics} />
}
