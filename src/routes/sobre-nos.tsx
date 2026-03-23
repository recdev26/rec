import { createFileRoute } from '@tanstack/react-router'
import AboutCommitmentSection from '../components/sections/AboutCommitmentSection'
import AboutDetailsSection from '../components/sections/AboutDetailsSection'
import PageBreadcrumb from '../components/layout/PageBreadcrumb'
import AboutIntroSection from '../components/sections/AboutIntroSection'
import HomeStatsCardsSection from '../components/sections/HomeStatsCardsSection'

export const Route = createFileRoute('/sobre-nos')({
  component: SobreNos,
})

function SobreNos() {
  return (
    <>
      <PageBreadcrumb label="Sobre Nós" title="Sobre Nós" />
      <AboutIntroSection />
      <HomeStatsCardsSection />
      <AboutDetailsSection />
      <AboutCommitmentSection />
    </>
  )
}
