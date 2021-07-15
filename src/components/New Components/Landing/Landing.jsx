import React from "react";
import "./Landing.css";

import Headshot from "../../../assets/ArnavHeadshot.jpg";
import AcaemicSlider from "../AcaemicSlider/AcaemicSlider";
import { Button } from "react-bootstrap";

export default function Landing() {
  return (
    <div className="landing__container">
      <div className="landing__left-third">
        <div className="left-third__text-container">
          <h4
            className="landing-text-left"
            style={{ textTransform: "lowercase" }}
          >
            <span style={{ textTransform: "uppercase" }}>A</span> RISING SENIOR
            WHO WOULD LIKE TO MAKE AN IMPACT IN THE LIFE OF UNDERPRIVILEDGED
            KIDS AROUND THE WORLD.
          </h4>
          <br />
          <h4 className="landing-text-left" style={{ color: "#0077D7" }}>
            Be Worthy, Start Small and Make it BIG.
          </h4>
        </div>
      </div>

      <div className="landing__middle-third">
        <img className="landing__image" src={Headshot} alt="img" />
      </div>

      <div className="landing__right-third">
        <div className="landing__carousel-holder">
          <div className="landing__carousel-holder__btn-split">
            <Button variant="primary" className="transcripts-btn">
              Transcripts
            </Button>
            <Button variant="primary" className="resume-btn">
              Resume
            </Button>
          </div>
          <AcaemicSlider />
        </div>
      </div>
    </div>
  );
}
