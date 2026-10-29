import type { ReactNode } from "react";
import { AiFillPieChart } from "react-icons/ai";
import { BsBarChartFill, BsLightningChargeFill } from "react-icons/bs";
import { FaAward, FaHandshake, FaHeartCircleBolt, FaLightbulb, FaPaintbrush } from "react-icons/fa6";

interface awardsData { 
  icon: ReactNode,
  title: string,
  description: string
}
export const awardsCardsData : awardsData[] = [
  {
    icon: <AiFillPieChart /> , 
    title: "Outstanding Early Childhood Education Award",
    description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
  },
  {
    icon: <BsBarChartFill />,
    title: "Innovative STEAM Education Award",
    description: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
  },
  {
    icon: <BsLightningChargeFill />,
    title: "Environmental Stewardship Award",
    description: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
  },
  {
    icon: <FaLightbulb />,
    title: "Digital Innovation in Education Award",
    description: "Awarded by the Global EdTech Association for our excellence in integrating smart digital tools and interactive learning platforms that enhance student engagement and future-ready skills."
  },
  {
    icon: <FaHeartCircleBolt />,
    title: "Excellence in Student Well-being Award",
    description: "Presented by the Child Safety Foundation in recognition of our commitment to creating a safe, inclusive, and emotionally supportive environment for all learners."
  },
  {
    icon: <FaHandshake />,
    title: "Community Leadership & Impact Award",
    description: "Received from the Educational Leadership Network for our active community outreach programs, parental engagement initiatives, and impactful social responsibility projects."
  },
  {
    icon: <FaPaintbrush />,
    title: "Creative Arts Excellence Award",
    description: "Awarded by the National Arts Council for fostering artistic expression, musical talent, and creative confidence through our comprehensive visual and performing arts programs."
  },
  {
    icon: <FaAward />,
    title: "Academic Excellence & Achievement Award",
    description: "Presented by the International Education Board for achieving outstanding academic results and maintaining rigorous standards of teaching and curriculum development."
  },
  {
    icon: <FaLightbulb />,
    title: "Digital Innovation in Education Award",
    description: "Awarded by the Global EdTech Association for our excellence in integrating smart digital tools and interactive learning platforms that enhance student engagement and future-ready skills."
  },
  {
    icon: <FaHeartCircleBolt />,
    title: "Excellence in Student Well-being Award",
    description: "Presented by the Child Safety Foundation in recognition of our commitment to creating a safe, inclusive, and emotionally supportive environment for all learners."
  },
  {
    icon: <FaHandshake />,
    title: "Community Leadership & Impact Award",
    description: "Received from the Educational Leadership Network for our active community outreach programs, parental engagement initiatives, and impactful social responsibility projects."
  }
];