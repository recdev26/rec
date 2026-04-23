import { createFileRoute } from '@tanstack/react-router'
import AboutCommitmentSection from '../components/sections/AboutCommitmentSection'
import AboutDetailsSection from '../components/sections/AboutDetailsSection'
import PageBreadcrumb from '../components/layout/PageBreadcrumb'
import AboutIntroSection from '../components/sections/AboutIntroSection'
import HomeStatsCardsSection from '../components/sections/HomeStatsCardsSection'
import { resolveLocaleFromSearch } from '../lib/i18n'
import { useLocale } from '../lib/use-locale'
import { buildSeoHead } from '../lib/seo'
import { getAboutPageData } from '../lib/wp-api'

export const Route = createFileRoute('/about')({
  loader: async ({ location }) => getAboutPageData(resolveLocaleFromSearch(location.search)),
  head: () =>
    buildSeoHead({
      title: 'Sobre Nós',
      description:
        'Conheça a REC, Lda., a nossa experiência em avaliação imobiliária, gestão de projectos e peritagens técnicas em Moçambique.',
      path: '/sobre-nos',
      noIndex: true,
    }),
  component: About,
})

function About() {
  const { metrics } = Route.useLoaderData()
  const locale = useLocale()

  const breadcrumbLabel = locale === 'en' ? 'About Us' : 'Sobre Nós'

  return (
    <>
      <PageBreadcrumb label={breadcrumbLabel} title={breadcrumbLabel} />
      <AboutIntroSection />
      <HomeStatsCardsSection metrics={metrics} />
      <AboutDetailsSection />
      <AboutCommitmentSection />
    </>
  )
}
