import React from 'react';
import './past-projects.css'; // For custom styling (optional)
import ghostman1_image from './images/past-projects/ghost-man-1.png';
import studyplanner1_image from './images/past-projects/study-planner-1.png';
import isyaratku1_image from './images/past-projects/isyaratku-1.png';
import githubLogo from "./images/button-logo/github.png";
import figmaLogo from "./images/button-logo/figma.png";
import googleDriveLogo from "./images/button-logo/google-drive.png";

const Past_projects = () => {
  return (
    <div className="container-pp">
        <div className="container-pp-border"></div>
        <div id="past-projects-title"></div>
        <div className="vertical_container-pp">
            <div className="projects_horizontal_container-pp">
                <div className="left-side-pp">
                    <img
                        src={ghostman1_image}
                        alt="project-1"
                        className="project-image"
                    />
                </div>
                <div className="right-side-pp">
                    <div className="projects_texts-box">
                        <div className="project-title-row">
                            <h1 id="project_title">Ghost-Man</h1>
                            <div className="project-links">
                                <a
                                    href="https://github.com/Brightlyviryaa/UAS-GKA-PACMAN-3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-icon-link"
                                    aria-label="View Ghost-Man on GitHub"
                                    title="View on GitHub"
                                >
                                    <img src={githubLogo} alt="" />
                                </a>
                                <a
                                    href="https://drive.google.com/drive/folders/1X4G-Gr35k-cbj-KQO08tDWeLRxk2nPXV?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-icon-link"
                                    aria-label="View Ghost-Man on Google Drive"
                                    title="View on Google Drive"
                                >
                                    <img src={googleDriveLogo} alt="" />
                                </a>
                            </div>
                        </div>
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
                    <img
                        src={studyplanner1_image}
                        alt="Study Planner application preview"
                        className="project-image"
                    />
                </div>
                <div className="right-side-pp">
                    <div className="projects_texts-box">
                        <div className="project-title-row">
                            <h1 id="project_title">Study Planner</h1>
                            <div className="project-links">
                                <a
                                    href="https://github.com/greentea3150/StudyPlanner"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-icon-link"
                                    aria-label="View Study Planner on GitHub"
                                    title="View on GitHub"
                                >
                                    <img src={githubLogo} alt="" />
                                </a>
                            </div>
                        </div>
                        <p id="project_description">
                            Study Planner is an Android app that facilitates
                            users with various task-related features. Some of
                            those features include task tracking, a daily
                            calendar, and task categories. The app was
                            developed using Android Studio with Kotlin.
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
                        <div className="project-title-row">
                            <h1 id="project_title">IsyaratKu</h1>
                            <div className="project-links">
                                <a
                                    href="https://www.figma.com/design/t7i8yZwrha2xhVW7L7Kf0g/Project-HCI-UAS?node-id=240-1175&t=F6jObUBMRS7Wa9Ve-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-icon-link"
                                    aria-label="View IsyaratKu on Figma"
                                    title="View on Figma"
                                >
                                    <img src={figmaLogo} alt="" />
                                </a>
                            </div>
                        </div>
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