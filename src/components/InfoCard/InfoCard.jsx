import React from "react";
import "./InfoCard.css";
import Headshot from "../../assets/ArnavHeadshot.jpg";
import { Fade } from "react-awesome-reveal";

export default function InfoCard() {
  return (
    <div className="info-card__container">
      <div>
        <Fade triggerOnce={true} direction="left" duration={2000}>
          <img className="info-card__headshot" alt="headshot" src={Headshot} />
        </Fade>
      </div>
      <Fade
        duration={2000}
        triggerOnce={true}
        className="info-card__text-container"
        direction="right"
      >
        <div className="info-card__text-container">
          <p className="info-card__text">
            {" "}
            I am currently a student at Lynbrook High School. My idea of
            learning is to keep a balance between my academic goals and
            real-world experiences to maximize the breadth of skills and pursue
            my passions. Whether it’s a school project or an activity to support
            the community, I give my best.
          </p>
        </div>
      </Fade>
    </div>
  );
}
