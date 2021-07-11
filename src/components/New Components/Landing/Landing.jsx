import React from "react";
import "./Landing.css";

import Headshot from "../../../assets/ArnavHeadshot.jpg";
import AcaemicSlider from "../AcaemicSlider/AcaemicSlider";

export default function Landing() {
  return (
    <div className="landing__container">
      <div className="landing__left-third">
        <p>
          A RISING SENIOR WHO WOULD LIKE TO MAKE AN IMPACT IN THE LIFE OF
          UNDERPRIVILEDGED KIDS AROUND THE WORLD.
        </p>
        <br />
        <p>Be Worthy, Start Small and Make it BIG.</p>
      </div>
      <div className="landing__middle-third">
        <img className="landing__image" src={Headshot} alt="img" />
      </div>
      <div className="landing__right-third">
        <AcaemicSlider />
      </div>
    </div>
  );
}
