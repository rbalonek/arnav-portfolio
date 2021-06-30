import React from "react";
import Hero from "../../assets/Hero1.jpg";
import Academics from "../../components/academics/Academics";
import InfoCard from "../../components/InfoCard/InfoCard";
import Engagement from "../engagement/Engagement";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="top__anchor" id="top" />

      <div className="landing-banner__container">
        <img className="hero-banner" src={Hero} alt="hero" />
      </div>
      <div className="info-card__holder">
        <InfoCard />
      </div>

      <div className="academics__anchor" id="academics" />
      <div className="academics__holder">
        <Academics />

        <div className="engagement__anchor" id="engagement" />
      </div>
      <div className="engagement__holder">
        <Engagement />
      </div>
    </div>
  );
}
