import React from "react";
import SocialImpactSlider from "../SocialImpactSlider/SocialImpactSlider";
import "./SocialImpact.css";
import SocialImpactFooter from "./SocialImpactFooter/SocialImpactFooter";

export default function SocialImpact() {
  return (
    <div className="social-impact__container">
      <div className="social-impact__banner">
        <h1 className="title__banners snuge-up">Social Impact</h1>
      </div>

      <div className="social-impact__footer__holder">
        <SocialImpactFooter />
      </div>

      <div className="social-impact__content-split">
        <div className="social-impact__left-one-third">
          <h4 className="social-impact__title">THE THUNDER SHOTS</h4>
          <h4 className="social-impact__sub-title">CO-FOUNDER AND CEO</h4>

          <p className="social-impact__text">
            Pursuing my passion to serve community and under privileged kids
            across the world.
          </p>

          <p className="social-impact__text-link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="Thethundershots.org"
              alt="thundershots"
            >
              <span style={{ color: "#3984cf" }}>Thethundershots.org</span>
            </a>
          </p>
          <p className="social-impact__text">Featured in Almaden Times</p>
        </div>
        <div className="social-impact__right-two-thirds">
          <SocialImpactSlider />
        </div>
      </div>
    </div>
  );
}
