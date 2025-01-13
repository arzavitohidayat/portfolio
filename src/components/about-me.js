import React from 'react';
import './about-me.css';
import profile_image from './images/profile-image.jpg';

const About_me = () => {
  return (
    <div className="container-am">
        <div className="container-am-border"></div>
        <div id="about-me-title"></div>
        <div className="horizontal_container-am">
            <div className="carousel-am-content">
                <div>
                    <img src={profile_image} alt="Image 1" className="carousel-image" />
                </div>
            </div>
            <div className="text_container-am">
                <div id="about_me_desc">
                As a Computer Science/Informatics student at Multimedia Nusantara University, I have experience in both Front-End and Back-End development, though Front-End is my stronger suit.
                Throughout the years of me being a student, I have also learned many programming languages, such as HTML, CSS, C, React, and More.
                Additionally, I'm particularly passionate when it comes to game development.
                </div>
            </div>
        </div>
    </div>
  );
};

export default About_me;
