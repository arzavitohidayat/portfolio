import React from 'react';
import './proficiency.css'; // For custom styling (optional)
import profile_image from './images/profile-image.jpg';
import react_logo from './images/react-logo.png';
import javascript_logo from './images/javascript-logo.png';
import python_logo from './images/python-logo.png';
import kotlin_logo from './images/kotlin-logo.png';
import unity_logo from './images/unity-logo.png';

const Proficiency = () => {
  return (
    <div className="container-proficiency">
        <div className="container-proficiency-border"></div>
        <div id="proficiency-title"></div>
        <div className="coding_languages_row_1">
            <div className="coding_languages_boxes">
                <img src={react_logo} alt="coding_language-image"></img>
                <h1 id="coding_language-title">React</h1>
            </div>
            <div className="coding_languages_boxes">
                <img src={javascript_logo} alt="coding_language-image"></img>
                <h1 id="coding_language-title">JavaScript</h1>
            </div>
            <div className="coding_languages_boxes">
                <img src={python_logo} alt="coding_language-image"></img>
                <h1 id="coding_language-title">Python</h1>
            </div>
        </div>
        <div className="coding_languages_row_2">
            <div className="coding_languages_boxes">
                <img src={kotlin_logo} alt="coding_language-image"></img>
                <h1 id="coding_language-title">C#</h1>
            </div>
            <div className="coding_languages_boxes">
                <img src={kotlin_logo} alt="coding_language-image"></img>
                <h1 id="coding_language-title">kotlin</h1>
            </div>
            <div className="coding_languages_boxes">
                <img src={unity_logo} alt="coding_language-image"></img>
                <h1 id="coding_language-title">Unity 3D</h1>
            </div>
        </div>
    </div>
  );
};

export default Proficiency;