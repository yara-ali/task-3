import styles from './MissionAndVisionCard.module.css'

    interface MissionAndVisionCardProps {
        title: string;
        img: string;
        desc:string;
    }

const MissionAndVisionCard = ({title, img, desc}: MissionAndVisionCardProps) => {

    return (
        <div className={`${styles.cardContent} sharedCardStyle`}>
            <div className={styles.cardHeading}>
                <h3>{title}</h3>
                <img src={img} alt={title} />
            </div>
            <p>{desc}</p>
        </div>
    )
}

export default MissionAndVisionCard