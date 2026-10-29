
import { SectionHeadingData } from '../SectionsHeading/SectionsHeadingData'
import { FeaturesData } from './FeaturesData'
import "../sharedCardStyle.css"

const SpecialFeatures = () => {
    return (
        <>
            <SectionHeadingData 
                intro='Our Features' 
                title='Our Special Features' 
                description='Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!'
                />
            <div className="section-container">
                {FeaturesData.map((feature,index) => {
                    return (
                        <div key={index} className="shared-card">
                                
                            <div className="cardIcon">
                                <span className="icon">{feature.icon}</span>
                            </div>
                            <h3 className="title">{feature.title}</h3>
                            <p className="cardDescription">{feature.description}</p>
                        </div>)
                        })}
                    </div>
        </>
    )
}

export default SpecialFeatures