import React from "react";
import "./About.css";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <div className="about__container">
      <div className="about-text__container">
        <Fade triggerOnce={true} direction="up">
          <h3>Hi! I’m Arnav Jain</h3>
          <p className="about-text">
            I am currently a student at Lynbrook High School. My idea of
            learning is to keep a balance between my academic goals and
            real-world experiences to maximize the breadth of skills and pursue
            my passions. Whether it’s a school project or an activity to support
            the community, I give my best.
          </p>
          <p className="about-text">
            I have successfully championed start-ups, non-profit organizations
            and I excel in the field of Economics and Finance. I am a
            competitive soccer player with Liverpool club and play in school
            varsity team. I persist, have laser-sharp focus, and a key desire to
            continue to move forward. 
          </p>
        </Fade>
      </div>
    </div>
  );
}
