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
          <h2 className="info-card__text card__name">Arnav Jain</h2>
          <br />
          <br />
          <p className="info-card__text ">Phone:</p>
          <p
            style={{ position: "relative", top: "-20px" }}
            className="info-card__text"
          >
            408-816-4119
          </p>

          <p className="info-card__text ">Email:</p>
          <p
            style={{ position: "relative", top: "-20px" }}
            className="info-card__text"
          >
            Arnav.jain@yahoo.com
          </p>
        </div>
      </Fade>
    </div>
  );
}
