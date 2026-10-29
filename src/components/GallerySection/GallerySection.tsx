
import { SectionHeadingData } from "../SectionsHeading/SectionsHeadingData"
import RoomsGallery from "./Rooms"

const GallerySection = () => {

    return (
        <>
            <SectionHeadingData 
                intro="Our Gallery" 
                title="Our Rooms Gallery" 
                description="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school." 
                />
            <RoomsGallery />
        </>
    )
}

export default GallerySection