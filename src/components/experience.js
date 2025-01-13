import React from 'react';
import './experience.css'; // For custom styling (optional)

const Experience = () => {
  return (
    <div className="container-exp">
        <div className="container-exp-border"></div>
        <div id="past-experience-title"></div>
        <div className="vertical_container-exp">
            <div className="experience_horizontal_container-exp">
                <div className="left-side-cert">
                </div>
                <div className="right-side-cert">
                    <div className="experience_texts-box">
                        <h1 id="experience_title">Member of the Campus English Society Club</h1>
                        <p id="experience_description">
                            Participated in an English-based community, further improving vocabulary and problem solving skills.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Experience;