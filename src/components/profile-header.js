import React from 'react';
import './profile-header.css'; // For custom styling (optional)
import profile_image from './images/profile-image.jpg';

const Profile_header = () => {
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
    </div>
  );
};

export default Profile_header;