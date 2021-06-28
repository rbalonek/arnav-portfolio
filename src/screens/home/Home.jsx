import React from "react";
import { Button } from "react-bootstrap";
import Hero from "../../assets/Hero1.jpg";
import About from "../../components/About/About";
import Academics from "../../components/academics/Academics";
import InfoCard from "../../components/InfoCard/InfoCard";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <img className="hero-banner" src={Hero} alt="hero" />

      <div className="info-card__holder">
        <InfoCard />
      </div>

      <div className="about__holder">
        <About />
      </div>

      <div className="academics__holder">
        <h1 className="section-title">Academics</h1>
        <hr />
        <Academics />
      </div>
      <div className="next-page-button">
        <a href="/engagement">
          <Button variant="primary" size="lg">
            Next Page >
          </Button>
        </a>
      </div>
    </div>
  );
}
