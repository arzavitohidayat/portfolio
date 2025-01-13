import React from 'react';
import './past-projects.css'; // For custom styling (optional)
import ghostman1_image from './images/past-projects/ghost-man-1.png';
import studyplanner1_image from './images/past-projects/study-planner-1.png';
import isyaratku1_image from './images/past-projects/isyaratku-1.png';

const Past_projects = () => {
  return (
    <div className="container-pp">
        <div className="container-pp-border"></div>
        <div id="past-projects-title"></div>
        <div className="vertical_container-pp">
            <div className="projects_horizontal_container-pp">
                <div className="left-side-pp">
                    <img src={ghostman1_image} alt="project-1" className="project-image"></img>
                </div>
                <div className="right-side-pp">
                    <div className="projects_texts-box">
                        <h1 id="project_title">Ghost-Man</h1>
                        <p id="project_description">
                            Ghost-Man is a 3D game that takes the renowned classic Pac-Man game with a twist!!
                            Instead of playing as Pac-Man, the players will play as the four ghosts instead.
                            The game was developed in Unity 3D with the help of C#.
                        </p>
                    </div>
                </div>
            </div>
            <div className="projects_horizontal_container-pp">
                <div className="left-side-pp">
                    <img src={studyplanner1_image} alt="project-2" className="project-image"></img>
                </div>
                <div className="right-side-pp">
                    <div className="projects_texts-box">
                        <h1 id="project_title">Study Planner</h1>
                        <p id="project_description">
                            Study Planner is an Android App that facilitates users with various task-related features.
                            Some of those features includes task-tracking, daily calendar, task category, etc..
                            The app was developed using Android Studio with Kotlin language.
                        </p>
                    </div>
                </div>
            </div>
            <div className="projects_horizontal_container-pp">
                <div className="left-side-pp">
                    <img src={isyaratku1_image} alt="project-2" className="project-image"></img>
                </div>
                <div className="right-side-pp">
                    <div className="projects_texts-box">
                        <h1 id="project_title">IsyaratKu</h1>
                        <p id="project_description">
                            IsyaratKu is a mock-up/prototype application to help both disabled and non-disabled people with communication challenges.
                            The prototype was developed in Figma.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Past_projects;