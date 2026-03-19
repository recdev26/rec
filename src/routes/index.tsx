import { createFileRoute } from '@tanstack/react-router'
import HomeContactPromptSection from '../components/sections/HomeContactPromptSection'
import HomeHero from '../components/sections/HomeHero'
import HomeHighlightsSection from '../components/sections/HomeHighlightsSection'
import HomeServicesSection from '../components/sections/HomeServicesSection'
import HomeStatsCardsSection from '../components/sections/HomeStatsCardsSection'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <HomeHero />
      <HomeHighlightsSection />
      <HomeContactPromptSection />
      <HomeServicesSection />
      <HomeStatsCardsSection />
    </>
  )
}
