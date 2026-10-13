import React from 'react';
import './profile-header.css';
import profile_image from './images/profile-image.jpg';
import chevron_logo from './images/button-logo/chevron-arrow.png';

const Profile_header = ({ scrollToMenu }) => {
  return (
    <div className="container-profile-header">
      <div className="horizontal_container-ph">
        <div className="text_container-ph">
          <h1 id="hello">Hello!!</h1>
          <h2 id="hello_desc">My name is Arza Vito Hidayat</h2>
        </div>
        <div className="profile-image">
          <img src={profile_image} alt="Profile" />
        </div>
      </div>
      <div className="chevron-container" onClick={scrollToMenu}>
        <img src={chevron_logo} alt="chevron" className="chevron chevron-1" />
        <img src={chevron_logo} alt="chevron" className="chevron chevron-2" />
        <img src={chevron_logo} alt="chevron" className="chevron chevron-3" />
      </div>
    </div>
  );
};

export default Profile_header;
