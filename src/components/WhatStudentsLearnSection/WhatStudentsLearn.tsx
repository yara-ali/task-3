import { SectionHeadingData } from "../SectionsHeading/SectionsHeadingData"
import { SubjectsData } from "./SubjectsData"
import "../sharedCardStyle.css"
import styles from './SubjectsSection.module.css'

const WhatStudentsLearn = () => {
    return (
        <>
            <SectionHeadingData 
                intro="Our Features"  
                title="What Students Learn" 
                description="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include" 
                />
            <div className="section-container">
                {SubjectsData.map ((subject , index) => (
                    <div key={index} className={`${styles.subject_card} sharedCardStyle`}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.backgroundShape}></div>
                            <div className={styles.imageBox}>
                                <img src={subject.img} alt={subject.subjectName} />
                        </div></div>
                        <h3>{subject.subjectName}</h3>
                        <p>{subject.subjectDesc}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default WhatStudentsLearn