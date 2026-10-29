
import { benefitsCardsData } from "./BenefitsCardsData"
import { FaGraduationCap , FaCrown , FaLifeRing , FaMaskFace } from "react-icons/fa6";
import { IoFlagSharp , IoPeopleSharp } from "react-icons/io5";
import { cardsIcons } from "./icons";
import '../../components/sharedCardStyle.css'

function BenefitCard() {
    
    const iconCards = {
        [cardsIcons.graduationCap]: FaGraduationCap,
        [cardsIcons.crown] : FaCrown,
        [cardsIcons.faceMask] : FaMaskFace,
        [cardsIcons.flag] : IoFlagSharp ,
        [cardsIcons.lifeRing] : FaLifeRing,
        [cardsIcons.people] : IoPeopleSharp
};
    return (
        <div className="section-container">
            {benefitsCardsData.map((benefit,index) => {
                const TheIcon = iconCards[benefit.icon]
                return (
                <div key={index} className="shared-card">
                    
                    <div className="cardIcon">
                        <span className="icon"><TheIcon/></span>
                    </div>
                <h3 className="title">{benefit.title}</h3>
                <p className="cardDescription">{benefit.description}</p>
                </div>)
            })}
        </div>
    )
}

export default BenefitCard