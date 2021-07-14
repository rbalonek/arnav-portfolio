import React from "react";
import SocialImpactSlider from "../SocialImpactSlider/SocialImpactSlider";
import "./SocialImpact.css";
import SocialImpactFooter from "./SocialImpactFooter/SocialImpactFooter";

export default function SocialImpact() {
  return (
    <div className="social-impact__container">
      <div className="social-impact__banner">
        <h1 className="title__banners">Social Impact</h1>
      </div>

      <div className="social-impact__footer__holder">
        <SocialImpactFooter />
      </div>

      <div className="social-impact__content-split">
        <div className="social-impact__left-one-third">
          <h4>THE THUNDER SHOTS</h4>
          <p> FOUNDER AND CEO</p>

          <p>
            Pursuing my passion to serve community and under privileged kids
            across the world.
          </p>

          <p>
            <span style={{ color: "black" }}>
              Thethundershots.org Featured in Almaden Times
            </span>
          </p>
        </div>
        <div className="social-impact__right-two-thirds">
          <SocialImpactSlider />
        </div>
      </div>
    </div>
  );
}
