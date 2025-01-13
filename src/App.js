import React, { useState } from 'react';
import './App.css';
import Profile_header from './components/profile-header';
import About_me from './components/about-me';
import Proficiency from './components/proficiency';
import Past_projects from './components/past-projects';
import Experience from './components/experience';
import Certificates from './components/certificates';

function App() {
  const [activeSection, setActiveSection] = useState(''); // Track the active section
  const [isExiting, setIsExiting] = useState(false); // Tracks exit animation state
  const [tempSection, setTempSection] = useState(""); // Temporary section for animation

  // Handle button clicks to set the active section with animation
  const handleButtonClick = (section) => {
    if (section === activeSection) return; // Do nothing if the same section is clicked
    setIsExiting(true); // Trigger exit animation
    setTimeout(() => {
      setActiveSection(section); // Switch section after exit animation
      setTempSection(section); // Update temp section for the animation
      setIsExiting(false); // Reset exit state
    }, 500); // Matches animation duration
  };

  return (
    <div className="App">
      <Profile_header />

      <div className="main-menu">
        {/* Buttons to switch between sections */}
        <button
          className={`button ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => handleButtonClick('about')}
        >
          <div className="button-gradient"></div>
          <span>About Me</span>
        </button>
        <button
          className={`button ${activeSection === 'proficiency' ? 'active' : ''}`}
          onClick={() => handleButtonClick('proficiency')}
        >
          <div className="button-gradient"></div>
          <span>Proficiency</span>
        </button>
        <button
          className={`button ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={() => handleButtonClick('projects')}
        >
          <div className="button-gradient"></div>
          <span>Past Projects</span>
        </button>
        <button
          className={`button ${activeSection === 'experience' ? 'active' : ''}`}
          onClick={() => handleButtonClick('experience')}
        >
          <div className="button-gradient"></div>
          <span>Experience</span>
        </button>
        <button
          className={`button ${activeSection === 'certificates' ? 'active' : ''}`}
          onClick={() => handleButtonClick('certificates')}
        >
          <div className="button-gradient"></div>
          <span>Certificates</span>
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
