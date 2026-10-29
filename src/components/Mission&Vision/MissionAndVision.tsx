import MissionAndVisionCard from "../Mission&VisionCard/MissionAndVisionCard"
import { SectionHeadingData } from "../SectionsHeading/SectionsHeadingData"
import styles from './missionAndVision.module.css'

const MissionAndVision = () => {
  return (
    <>
      <SectionHeadingData 
        intro="Mission & Visions" 
        title="Our Mission & Visions" 
        description="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth." 
        />
      <div className={styles.contentSection}>
        <MissionAndVisionCard 
          title="Mission" 
          img="/assets/imgs/MissionIcon.png" 
          desc="At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey." 
          />
        <MissionAndVisionCard 
          title="Vision" 
          img="/assets/imgs/VisionIcon.png" 
          desc="Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity." 
          />
      </div>
    </>
  )
}

export default MissionAndVision