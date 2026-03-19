import { createFileRoute } from '@tanstack/react-router'
import HomeContactPromptSection from '../components/sections/HomeContactPromptSection'
import HomeHero from '../components/sections/HomeHero'
import HomeHighlightsSection from '../components/sections/HomeHighlightsSection'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <HomeHero />
      <HomeHighlightsSection />
      <HomeContactPromptSection />
    </>
  )
}
