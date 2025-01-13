import React from 'react';
import './certificates.css'; // For custom styling (optional)
import python_intro_image from './images/certificates/python-introduction.jpg';
import python_inter_image from './images/certificates/python-intermediate.jpg';
import codexpo_image from './images/certificates/code-expo-genshin.jpg';

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
        </div>
    </div>
  );
};

export default Certificates;