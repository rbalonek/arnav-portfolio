import React from "react";
import "./Landing.css";

import Resume from "../../../assets/Resume_Transcript/Arnav_Resume.docx";
import Transcript from "../../../assets/Resume_Transcript/Transcript.pdf";

import Headshot from "../../../assets/ArnavHeadshot.jpg";
// import { Button } from "react-bootstrap";

export default function Landing() {
  return (
    <div className="landing__container">
      <div className="landing__split">
        <div className="landing__left">
          <img className="landing__image" src={Headshot} alt="img" />
        </div>
        <div className="landing__right">
          <div className="landing__buttons">
            <a download href={Resume} alt="resume">
              <button className="landing__btn">Resume</button>
            </a>
            <a download href={Transcript} alt="transcript">
              <button className="landing__btn">Transcript</button>
            </a>
          </div>
          <div className="landing__words">
            <h2 className="landing_titles">FOUNDER/CEO – THUNDER SHOTS</h2>
            <h4 className="landing__title-description">
              Serve underprivileged kids
            </h4>
            <h4 className="landing__title-description landing__margin">
              Impacted 900+ youth in 6 countries and a 30-member team
            </h4>

            <h2 className="landing_titles landing__margin">
              SOCIAL ENTERPRENEUR
            </h2>

            <h2 className="landing_titles">ACADEMICS</h2>
            <h4 className="landing__title-description landing__margin">
              SAT 1550, GPA 4.0
            </h4>

            <h2 className="landing_titles landing__margin">
              AUTHOR AND RESEARCHER
            </h2>

            <h2 className="landing_titles">COMPETITIVE SOCCER PLAYER</h2>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

// <img className="landing__image" src={Headshot} alt="img" />
