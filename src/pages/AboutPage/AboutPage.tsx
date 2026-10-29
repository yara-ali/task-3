import AwardsAndRecognition from "../../components/AwardsAndRecognition/AwardsAndRecognition"
import History from "../../components/HistorySection/HistorySection"
import MissionAndVision from "../../components/Mission&Vision/MissionAndVision"
import PagesHero from "../../components/PagesHero/PagesHero"
import TeamMembers from "../../components/TeamMembers/TeamMembers"


const AboutPage = () => {
    return (
        <>
            <PagesHero 
                pageIntro="Overview" 
                pageTitle="Welcome to Little Learners Academy" 
                pageDescription="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
            />
            <MissionAndVision />
            <AwardsAndRecognition />
            <History />
            <TeamMembers />
        </>
    )
}

export default AboutPage