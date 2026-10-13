import React, { useRef, useState } from 'react';
import './App.css';
import Profile_header from './components/profile-header';
import About_me from './components/about-me';
import Proficiency from './components/proficiency';
import Past_projects from './components/past-projects';
import Experience from './components/experience';
import Certificates from './components/certificates';
import about_me_logo from './components/images/button-logo/about-me.png';
import proficiency_logo from './components/images/button-logo/proficiency.png';
import past_project_logo from './components/images/button-logo/past-project.png';
import experience_logo from './components/images/button-logo/experience.png';
import certificate_logo from './components/images/button-logo/certificate.png';

function App() {
  const mainMenuRef = useRef(null);
  const [activeSection, setActiveSection] = useState(''); // Track the active section
  const [isExiting, setIsExiting] = useState(false); // Tracks exit animation state
  const [tempSection, setTempSection] = useState(""); // Temporary section for animation

  // Handle button clicks to set the active section with animation
  const handleButtonClick = (section) => {
    if (section === activeSection || isExiting) return; // Prevent redundant or overlapping clicks
  
    setActiveSection(section); // Immediately update button color
    setIsExiting(true); // Trigger exit animation for the content
  
    setTimeout(() => {
      setTempSection(section); // Update temp section for the new content after animation
      setIsExiting(false); // Reset exit animation state
    }, 500); // Matches animation duration
  };

  const scrollToMenu = () => {
    mainMenuRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Profile_header scrollToMenu={scrollToMenu} />
      <div className="main-menu" ref={mainMenuRef}>
        {/* Buttons to switch between sections */}
        <button
          className={`button ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => handleButtonClick('about')}
        >
          <div className="button-gradient"></div>
          <span>About Me</span>
          <div className="home-button-overlay">
            <img src={about_me_logo} alt="about-me-logo" className="button-logos"></img>
            <div className="hover-text">Learn more about me!!</div>
          </div>
        </button>
        <button
          className={`button ${activeSection === 'proficiency' ? 'active' : ''}`}
          onClick={() => handleButtonClick('proficiency')}
        >
          <div className="button-gradient"></div>
          <span>Proficiency</span>
          <div className="home-button-overlay">
            <img src={proficiency_logo} alt="proficiency-logo" className="button-logos"></img>
            <div className="hover-text">See what I've learned!!</div>
          </div>
        </button>
        <button
          className={`button ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={() => handleButtonClick('projects')}
        >
          <div className="button-gradient"></div>
          <span>Past Projects</span>
          <div className="home-button-overlay">
            <img src={past_project_logo} alt="past-projects-logo" className="button-logos"></img>
            <div className="hover-text">View projects that I've made!!</div>
          </div>
        </button>
        <button
          className={`button ${activeSection === 'experience' ? 'active' : ''}`}
          onClick={() => handleButtonClick('experience')}
        >
          <div className="button-gradient"></div>
          <span>Experience</span>
          <div className="home-button-overlay">
            <img src={experience_logo} alt="about-me-logo" className="button-logos"></img>
            <div className="hover-text">Get to know about my experience!!</div>
          </div>
        </button>
        <button
          className={`button ${activeSection === 'certificates' ? 'active' : ''}`}
          onClick={() => handleButtonClick('certificates')}
        >
          <div className="button-gradient"></div>
          <span>Certificates</span>
          <div className="home-button-overlay">
            <img src={certificate_logo} alt="about-me-logo" className="button-logos"></img>
            <div className="hover-text">See what I've accomplished!!</div>
          </div>
        </button>
      </div>

      {/* Conditionally render the components based on the active section */}
      <div className={`content ${isExiting ? "slide-out" : ""}`}>
        {tempSection === "about" && <About_me />}
        {tempSection === "proficiency" && <Proficiency />}
        {tempSection === "projects" && <Past_projects />}
        {tempSection === "experience" && <Experience />}
        {tempSection === "certificates" && <Certificates />}
      </div>
    </div>
  );
}

export default App;
