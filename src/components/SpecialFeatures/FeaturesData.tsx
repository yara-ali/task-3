import type { ReactNode } from "react";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { FaBookOpen, FaStar } from "react-icons/fa6";
import { HiPuzzle } from "react-icons/hi";
import { IoMdSunny } from "react-icons/io";

interface FeaturesDataInterface{
    icon : ReactNode
    title : string
    description : string
}
export const FeaturesData : FeaturesDataInterface [] = [
    {
        icon : <FaBookOpen />,
        title : "Thematic Learning",
        description: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
    },
    {
        icon : <BsFillBarChartFill />,
        title : "STEAM Education",
        description: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills."
    },
    {
        icon : <HiPuzzle />,
        title : "Language Immersion",
        description: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness."
    },
    {
        icon : <FaPaintBrush />,
        title : "Art and Creativity",
        description: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms."
    },
    {
        icon : <IoMdSunny />,
        title : "Outdoor Education",
        description: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment."
    },
    {
        icon : <FaStar />,
        title : "Play-Based Learning",
        description: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking."
    }
]