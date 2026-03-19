import { createFileRoute } from '@tanstack/react-router'
import HomeContactPromptSection from '../components/sections/HomeContactPromptSection'
import HomeHero from '../components/sections/HomeHero'
import HomeHighlightsSection from '../components/sections/HomeHighlightsSection'
import HomeProjectsSection from '../components/sections/HomeProjectsSection'
import HomeServicesSection from '../components/sections/HomeServicesSection'
import HomeStatsCardsSection from '../components/sections/HomeStatsCardsSection'
import { FEATURES } from '../lib/constants'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <HomeHero />
      <HomeHighlightsSection />
      <HomeContactPromptSection />
      <HomeServicesSection />
      <HomeStatsCardsSection />
      {FEATURES.SHOW_PROJECTS_SECTION ? <HomeProjectsSection /> : null}
    </>
  )
}
