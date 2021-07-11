import React from "react";
import SocialImpactSlider from "../SocialImpactSlider/SocialImpactSlider";
import "./SocialImpact.css";
import SocialImpactFooter from "./SocialImpactFooter/SocialImpactFooter";

export default function SocialImpact() {
  return (
    <div className="social-impact__container">
      <div className="social-impact__banner">
        <h1>Social Impact</h1>
      </div>

      <div className="social-impact__content-split">
        <div className="social-impact__left-one-third">
          <p>THE THUNDER SHOTS FOUNDER AND CEO</p>

          <p>
            Pursuing my passion to serve community and under privileged kids
            across the world.
          </p>

          <p>Thethundershots. org Featured in Almaden Times</p>
        </div>
        <div className="social-impact__right-two-thirds">
          <SocialImpactSlider />
        </div>
      </div>
      <div style={{ position: "relative", top: "100px" }}>
        <SocialImpactFooter />
      </div>
    </div>
  );
}
