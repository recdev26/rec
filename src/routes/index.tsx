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
import { getHomePageData } from '../lib/wp-api'

export const Route = createFileRoute('/')({
  loader: async () => getHomePageData(),
  component: App,
})

function App() {
  const { posts, services } = Route.useLoaderData()

  return (
    <>
      <HomeHero />
      <HomeHighlightsSection />
      <HomeContactPromptSection />
      <HomeServicesSection services={services} />
      <HomeStatsCardsSection />
      {FEATURES.SHOW_PROJECTS_SECTION ? <HomeProjectsSection /> : null}
      {FEATURES.SHOW_CLIENT_LOGOS_SECTION ? <HomeClientsLogoSection /> : null}
      {FEATURES.BLOG_ENABLED ? <HomeBlogSection posts={posts} /> : null}
    </>
  )
}
