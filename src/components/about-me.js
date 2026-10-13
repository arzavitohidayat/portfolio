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
                    I'm a Computer Science graduate from Universitas Multimedia Nusantara with a passion for understanding how games work behind the scenes.
                    I enjoy exploring game mechanics through game modification and experimenting with game data to see how different changes affect gameplay.
                    I've also built small games in Unity, including a 3D Pac-Man-inspired project.
                    I'm eager to deepen my understanding of game systems, strengthen my programming skills, and eventually contribute to creating engaging gaming experiences as part of a professional team.
                </div>
            </div>
        </div>
    </div>
  );
};

export default About_me;
