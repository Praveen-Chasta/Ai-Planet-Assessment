import Header from '../Header/Header'
import LandingPageTopSection from '../Sections/LandingPageTopSection'
import AchievementSection from '../Sections/AchievementSection'
import ParticipateSection from '../Sections/ParticipateSection'
import FilterSection from '../Sections/FilterSection'
import CardsSection from '../Sections/CardsSection'

function LandingPage() {
  return (
     <>
        <Header/>
        <LandingPageTopSection />
        <AchievementSection />
        <ParticipateSection />
        <FilterSection />
        <CardsSection />
     </>
  )
}

export default LandingPage