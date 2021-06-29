import React from "react";
import Hero from "../../assets/Hero1.jpg";
import About from "../../components/About/About";
import Academics from "../../components/academics/Academics";
import InfoCard from "../../components/InfoCard/InfoCard";
import Engagement from "../engagement/Engagement";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div id="top" />
      <img className="hero-banner" src={Hero} alt="hero" />

      <div className="info-card__holder">
        <InfoCard />
      </div>

      <div className="about__holder">
        <About />
      </div>
      <div id="academics" style={{ position: "relative", bottom: "450px" }} />
      <div className="academics__holder">
        <h1 className="section-title">Academics</h1>
        <hr />
        <Academics />
        <div style={{ position: "relative", bottom: "80px" }} id="engagement" />
      </div>
      <div className="engagement__holder">
        <Engagement />
      </div>
    </div>
  );
}
