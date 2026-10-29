import Benefits from "../../components/Benefits/Benefits"
import ExplorePages from "../../components/ExplorePages/ExplorePages"
import Faq from "../../components/FAQ/Faq"
import HeroSection from "../../components/HeroSection/HeroSection"
import Testimonials from "../../components/Testimonials/Testimonials"


const HomePage = () => {
    return (
        <>
        <HeroSection/>
        <Benefits />
        <Testimonials />
        <Faq />
        <ExplorePages />
        </>
    )
}

export default HomePage