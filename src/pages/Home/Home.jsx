import "./Home.css";
import "../../components/Nav/Nav.jsx";
import "../Imprint/Imprint.jsx";
import { Link } from "react-router-dom";

import mg from "../../assets/images/mg-round.png";
import jsIcon from "../../assets/images/javascript.png";
import htmlIcon from "../../assets/images/html5.png";
import nodeIcon from "../../assets/images/node.png";
import reactIcon from "../../assets/images/react.png";
import pythonIcon from "../../assets/images/python.png";
import figmaIcon from "../../assets/images/figma.png";
import mongoDBIcon from "../../assets/images/mongoDB.png";
import cssIcon from "../../assets/images/css3.png";
import Projects from "../Projects/Projects.jsx";
import About from "../About/About.jsx";
import Contact from "../Contact/Contact.jsx";

const Home = ({ sectionRefs }) => {
    const icons = [
        { src: htmlIcon, alt: "html-icon" },
        { src: cssIcon, alt: "css-icon" },
        { src: jsIcon, alt: "javascript-icon" },
        { src: reactIcon, alt: "react-icon" },
        { src: nodeIcon, alt: "node-icon" },
        { src: pythonIcon, alt: "python-icon" },
        { src: figmaIcon, alt: "figma-icon" },
        { src: mongoDBIcon, alt: "mongoDB-icon" },
    ];

    return (
        <div className="home-container">
            <div className="home-image">
                <img
                    className="home-round-image"
                    src={mg}
                    alt="michael-image-black-white"
                />
            </div>
            <div className="head-line">
                <h2 className="hero-headline">Hi, I'm Michael.</h2>
                <h2 className="hero-headline">
                    I do full stack {""}
                    <span className="hero-gradient">web applications.</span>
                </h2>
            </div>
            <div className="home-text">
                <p className="home-text-paragraph">
                    I am an aspiring web developer with a passion for creating
                    innovative and user-friendly digital solutions.
                </p>{" "}
                <p className="home-text-paragraph">
                    {" "}
                    With a strong foundation in front-end technologies and a
                    growing expertise in back-end development, I am eager to
                    take on new challenges that push the boundaries of my
                    skills. I thrive in dynamic environments and am constantly
                    seeking opportunities to collaborate, learn, and contribute
                    to impactful projects.
                </p>
                <p className="home-text-paragraph">
                    {" "}
                    As I continue to expand my knowledge and expertise, I am
                    excited to connect with forward-thinking teams and companies
                    looking for fresh talent to help drive their vision forward.
                </p>
            </div>
            <div className="home-button-container">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        sectionRefs.scrollToContact();
                    }}
                    className="get-in-touch home-button"
                >
                    Get In Touch
                </a>

                {/* <a
                    href="/mg-cv.pdf"
                    className="download-cv home-button"
                    download="michael-alexander-gottung-cv.pdf"
                >
                    Download CV
                </a> */}
            </div>
            <div className="home-experience-with-container">
                <h3 className="home-experience-headline">Experience With</h3>
                <div className="home-experience-image-container">
                    {icons.map((icon, index) => (
                        <div className="icon-wrapper" key={index}>
                            <img src={icon.src} alt={icon.alt} />
                        </div>
                    ))}
                </div>
            </div>
            <div ref={sectionRefs.projectsRef}>
                <Projects />
            </div>
            <div ref={sectionRefs.aboutRef}>
                <About />
            </div>
            <div ref={sectionRefs.contactRef}>
                <Contact />
            </div>
            <div className="imprint-link-container">
                <Link to="/legal-notice" className="imprint-link">
                    Legal Notice (Impressum)
                </Link>
            </div>
        </div>
    );
};

export default Home;
