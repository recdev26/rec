import { createFileRoute } from '@tanstack/react-router'
import AboutCommitmentSection from '../components/sections/AboutCommitmentSection'
import AboutDetailsSection from '../components/sections/AboutDetailsSection'
import PageBreadcrumb from '../components/layout/PageBreadcrumb'
import AboutIntroSection from '../components/sections/AboutIntroSection'
import HomeStatsCardsSection from '../components/sections/HomeStatsCardsSection'
import { getAboutPageData } from '../lib/wp-api'

export const Route = createFileRoute('/about')({
  loader: async () => getAboutPageData(),
  component: About,
})

function About() {
  const { metrics } = Route.useLoaderData()

  return (
    <>
      <PageBreadcrumb label="Sobre Nós" title="Sobre Nós" />
      <AboutIntroSection />
      <HomeStatsCardsSection metrics={metrics} />
      <AboutDetailsSection />
      <AboutCommitmentSection />
    </>
  )
}
