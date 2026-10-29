import { useRef, useState} from 'react';
import roomsData from './RoomsData';
import styles from './RoomsGallery.module.css';
import '../sharedCardStyle.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const categories = ['All', 'Classrooms', 'Library', 'Science Lab', 'Computer Lab', 'Garden and Nature Area'];

function RoomCard({ room } ){

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
        <div className={`${styles.roomCard} sharedCardStyle`} >
        <div className={styles.carouselContainer}>
            <div ref={trackRef}
            className={styles.carouselTrack}
            >
            {room.images.map((img : string, index : string ) => (
                <img key={index} src={img} className={styles.carouselImage} />
            ))}
            </div>
        </div>

        <div className={styles.roomContent}>
            <div className={styles.roomHeaderRow}>
            <h3>{room.title}</h3>
            

                <div className={styles.carouselButtons}>
                <button onClick={handlePrev} className={styles.arrowBtn}><FaArrowLeft /></button>
                <button onClick={handleNext} className={styles.arrowBtn}><FaArrowRight /></button>
                </div>

        </div>
        
        <p>{room.description}</p>
        </div>
    </div>
    );
}

export default function RoomsGallery() {
    const [activeCategory, setActiveCategory] = useState('All');  

    const filteredRooms = activeCategory === 'All'
    ? roomsData
    : roomsData.filter(room => room.category === activeCategory);

    return (
    <div className={styles.roomsGallerySection}>
        <div className={styles.filterButtons}>
        {categories.map((category : string) => (
            <button
            className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
            >
            {category}
            </button>
        ))}
        </div>

        <div className={styles.roomsGrid}>
        {
            filteredRooms.map((room, index) => (
            <RoomCard key={index} room={room} />
            ))
}
        </div>
        </div>
    );
}