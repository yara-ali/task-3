
import styles from './awardsAndRecognition.module.css';
import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { SectionHeadingData } from '../SectionsHeading/SectionsHeadingData';
import '../sharedCardStyle.css';
import { awardsCardsData } from './AwardsCardsData';

export default function AwardsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  
  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: trackRef.current.clientWidth, behavior: 'smooth' });
    }
  };


  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -trackRef.current.clientWidth, behavior: 'smooth' });
    }
  };


  return (
    <>
      <SectionHeadingData 
        intro="Our Achievements" 
        title="Our Awards and Recognitions" 
        description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students." 
      />

      <div className={styles.carouselContainer}>
        <div ref={trackRef} className={styles.cardsGrid}>
          {awardsCardsData.map((award, index) => (
            <div className={`${styles.card} sharedCardStyle`} key={index}>
              <div className={styles.iconBox}>
                {award.icon}
              </div>
              <h3 className={styles.cardTitle}>{award.title}</h3>
              <p className={styles.cardDescription}>{award.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.navigationRow}>

        <div className={styles.arrowButtons}>
          <button className={styles.navBtn} onClick={handlePrev} aria-label="Previous">
            <FaArrowLeft />
          </button>
          <button className={styles.navBtn} onClick={handleNext} aria-label="Next">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}