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
                    My name is Arza Vito Hidayat. My fascination with technology and visually appealing craftworks has led me to enroll in
                    Multimedia Nusantara University, stepping into the Bachelor's degree of Computer Science with a GPA of 3.66.
                    In Computer Science, I am particularly keen on the front-end side of things, that is to abstract the inner workings
                    of a system so that users can use said system with ease. This however doesn't mean I'm not open to flexibility in job description.
                    Beyond Human-Computer Interaction, I'm also open to learn more and how to do better than ever.
                </div>
            </div>
        </div>
    </div>
  );
};

export default About_me;
