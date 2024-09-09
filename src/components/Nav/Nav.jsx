import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Nav = ({ sectionRefs }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleDarkLight = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute(
            "data-theme",
            isDarkMode ? "light" : "dark"
        );
    };
    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <Link to="/">
                        <img
                            className="logo-image"
                            src={logo}
                            alt="MichaelGee76-Logo"
                        />
                    </Link>
                </div>
                <div className={`menu ${isOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    sectionRefs.scrollToProjects();
                                    toggleMenu();
                                }}
                                className="nav-link"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    sectionRefs.scrollToAbout();
                                    toggleMenu();
                                }}
                                className="nav-link"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    sectionRefs.scrollToContact();
                                    toggleMenu();
                                }}
                                className="nav-link"
                            >
                                Contact
                            </a>
                        </li>
                        <li className="toggle-theme" onClick={toggleDarkLight}>
                            {isDarkMode ? (
                                <FaSun size={24} />
                            ) : (
                                <FaMoon size={24} />
                            )}
                        </li>
                    </ul>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
