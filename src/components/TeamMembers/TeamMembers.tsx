import { SectionHeadingData } from "../SectionsHeading/SectionsHeadingData"
import styles from './teamMembers.module.css'
import "../sharedCardStyle.css"
import { MembersData } from "./MembersData"
import { FaEnvelope } from "react-icons/fa6"

const TeamMembers = () => {
    return (
        <>
            <SectionHeadingData 
                intro="Our Teachers With Experties" 
                title="Our Team Members" 
                description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning." 
                />
            <div className={styles.membersSection}>
                {MembersData.map ((member , index) => (
                        <div className= {`${styles.memberCard} sharedCardStyle`} key={index}>
                            <div className={styles.flexRow}>
                                <div className={styles.member}>
                                <img src={member.profile} alt={member.name} />
                                {member.name}
                                </div>
                                <div className={styles.letterIcon}>
                                    <FaEnvelope />
                                </div>
                            </div>
                            <div className={styles.memberBio}>
                                <div className={styles.memberQualifications}>{member.Qualifications}</div>
                                {member.description}
                            </div>
                        </div>
                    
                ))
            }
            </div>
        </>
    )
}

export default TeamMembers