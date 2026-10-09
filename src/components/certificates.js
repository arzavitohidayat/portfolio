import React from 'react';
import './certificates.css'; // For custom styling (optional)
import python_intro_image from './images/certificates/python-introduction.jpg';
import python_inter_image from './images/certificates/python-intermediate.jpg';
import codexpo_image from './images/certificates/code-expo-genshin.jpg';
import ids_image from './images/certificates/ids.jpg';
import toeic_image from './images/certificates/toeic.jpg';
import unity_image from './images/certificates/unity-certified-programmer.jpg';

const Certificates = () => {
  return (
    <div className="container-cert">
        <div className="container-cert-border"></div>
        <div id="past-certificate-title"></div>
        <div className="vertical_container-cert">
            <div className="certificate_horizontal_container-cert">
                <div className="left-side-cert">
                    <img src={python_intro_image} alt="certificate-1" className="certificate-image"></img>
                </div>
                <div className="right-side-cert">
                    <div className="certificate_texts-box">
                        <h1 id="certificate_title">Introduction to Python</h1>
                        <p id="certificate_description">
                            A course certificate given to participants who completed the "Introduction to Python"
                            course in SoloLearn. This certificate was issued in 24 February, 2024.
                        </p>
                    </div>
                </div>
            </div>
            <div className="certificate_horizontal_container-cert">
                <div className="left-side-cert">
                    <img src={python_inter_image} alt="certificate-2" className="certificate-image"></img>
                </div>
                <div className="right-side-cert">
                    <div className="certificate_texts-box">
                        <h1 id="certificate_title">Python Intermediate</h1>
                        <p id="certificate_description">
                        A course certificate given to participants who completed the "Python Intermediate"
                        course in SoloLearn. This certificate was issued in 06 May, 2024.
                        </p>
                    </div>
                </div>
            </div>
            <div className="certificate_horizontal_container-cert">
                <div className="left-side-cert">
                    <img src={codexpo_image} alt="certificate-2" className="certificate-image"></img>
                </div>
                <div className="right-side-cert">
                    <div className="certificate_texts-box">
                        <h1 id="certificate_title">CodeXpo IF231 1st Place</h1>
                        <p id="certificate_description">
                            A certificate of achievement presented to participants in CodeXpo for achieving 1st place.
                            This certificate was issued in 2 December, 2022.
                        </p>
                    </div>
                </div>
            </div>
            <div className="certificate_horizontal_container-cert">
                <div className="left-side-cert">
                    <img src={ids_image} alt="certificate-2" className="certificate-image"></img>
                </div>
                <div className="right-side-cert">
                    <div className="certificate_texts-box">
                        <h1 id="certificate_title">IDS Education Gamedev Academy</h1>
                        <p id="certificate_description">
                            A certificate presented to participants who passed IDS's gamedev academy independent study program in 2025.
                            This certificate was issued in ???, 2025.
                        </p>
                    </div>
                </div>
            </div>
            <div className="certificate_horizontal_container-cert">
                <div className="left-side-cert">
                    <img src={unity_image} alt="certificate-2" className="certificate-image"></img>
                </div>
                <div className="right-side-cert">
                    <div className="certificate_texts-box">
                        <h1 id="certificate_title">Unity Certified User: Programmer</h1>
                        <p id="certificate_description">
                            A certificate presented to participants Pearson Vue's Unity Certified User: Programmer Certiport.
                            This certificate was issued in 17 June, 2026.
                        </p>
                    </div>
                </div>
            </div>
            <div className="certificate_horizontal_container-cert">
                <div className="left-side-cert">
                    <img src={toeic_image} alt="certificate-2" className="certificate-image"></img>
                </div>
                <div className="right-side-cert">
                    <div className="certificate_texts-box">
                        <h1 id="certificate_title">Test Of English for International Communication</h1>
                        <p id="certificate_description">
                            A certificate presented to participants who partaked in a TOEIC test. The test was taken in 9 May 2026 and the 
                            certificate was issued in 18 August, 2026.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Certificates;