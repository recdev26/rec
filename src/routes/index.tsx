import { createFileRoute } from '@tanstack/react-router'
import HomeBlogSection from '../components/sections/HomeBlogSection'
import HomeClientsLogoSection from '../components/sections/HomeClientsLogoSection'
import HomeContactPromptSection from '../components/sections/HomeContactPromptSection'
import HomeHero from '../components/sections/HomeHero'
import HomeHighlightsSection from '../components/sections/HomeHighlightsSection'
import HomeProjectsSection from '../components/sections/HomeProjectsSection'
import HomeServicesSection from '../components/sections/HomeServicesSection'
import HomeStatsCardsSection from '../components/sections/HomeStatsCardsSection'
import { FEATURES } from '../lib/constants'
import { resolveLocaleFromSearch } from '../lib/i18n'
import { buildOrganizationSchema, buildSeoHead } from '../lib/seo'
import { getHomePageData } from '../lib/wp-api'

export const Route = createFileRoute('/')({
  loader: async ({ location }) => getHomePageData(resolveLocaleFromSearch(location.search)),
  head: () => ({
    ...buildSeoHead({
      title: 'Início',
      description:
        'A REC, Lda. é uma empresa de consultoria especializada em avaliação e consultoria imobiliária, gestão de projectos e fiscalização de obras e peritagens técnicas.',
      path: '/',
    }),
    scripts: [buildOrganizationSchema()],
  }),
  component: App,
})

function App() {
  const { posts, services, metrics } = Route.useLoaderData()

  return (
    <>
      <HomeHero />
      <HomeHighlightsSection />
      <HomeContactPromptSection />
      <HomeServicesSection services={services} />
      <HomeStatsCardsSection metrics={metrics} />
      {FEATURES.SHOW_PROJECTS_SECTION ? <HomeProjectsSection /> : null}
      {FEATURES.SHOW_CLIENT_LOGOS_SECTION ? <HomeClientsLogoSection /> : null}
      {FEATURES.BLOG_ENABLED ? <HomeBlogSection posts={posts} /> : null}
    </>
  )
}
