import styles from './PagesHero.module.css'
import '../../components/sharedCardStyle.css'

interface PagesHeroProps {
    pageIntro: string;
    pageTitle: string;
    pageDescription: string;
}

const PagesHero = ({pageIntro , pageTitle , pageDescription}: PagesHeroProps) => {
    return (
        <div className={`${styles.pagesHero} sharedCardStyle`}>
            <div className={styles.pageHeadings}>
                <h6 className={styles.pageIntro}>
                    {pageIntro}
                </h6>
                <h1 className={styles.pageTitle}>
                    {pageTitle}
                </h1>
        </div>
        <p className={styles.pageDescription}>
            {pageDescription}
        </p>
        </div>
        
    )
}

export default PagesHero