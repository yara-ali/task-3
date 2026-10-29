import { FaArrowRight } from 'react-icons/fa6'
import styles from './Header.module.css'
import { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { NavLink } from 'react-router';

interface navMenuInterface {
    name : string
    path : string
}

const Header = () => {
    const navMenu : navMenuInterface [] = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "about" },
        { name: "Academics", path: "academics" },
        { name: "Admissions", path: "admissions" },
        { name: "Student Life", path: "students_life" },
        { name: "Contact", path: "contact" }
    ];
    // const navMenu : Array<string> = ["Home", "About Us", "Academics", "Admissions", "Student Life", "Contact"]
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.topSection} >
            <div className={styles.topBanner}>
                <p>Admission is Open, Grab your seat now</p>
                <FaArrowRight />
            </div>
            <header>
                <img src="/assets/imgs/Logo.png" alt="" className={styles.logo}/>
                <button 
                    className={styles.menuMob} 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <IoIosClose /> :<HiMenuAlt3 />  }
                </button>
                <nav className={styles.desktopNav}>
                    <ul>
                    {navMenu.map ((item , index ) => {
                        return(
                            <li key={index}>
                                <NavLink 
                                    to={item.path}
                                    className={({ isActive }) => 
                                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                                    }
                                >
                                {item.name}
                                </NavLink>
                                </li>
                        )}
                    )}
                    </ul>
                </nav>
            </header>
            {isOpen && (
                <nav className={styles.mobileNav}>
                    <ul>
                        {navMenu.map((item, index) => (
                            <li key={index}>
                                <NavLink 
                                    to={item.path}
                                    className={({ isActive }) => 
                                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                                    }
                                >
                                {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    )
}

export default Header