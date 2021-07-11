import React from "react";
import "./OnePage.css";
import Landing from "../../components/New Components/Landing/Landing";
import SocialImpact from "../../components/New Components/SocialImpact/SocialImpact";
import AcademicAndSummer from "../../components/New Components/AcademicAndSummer/AcademicAndSummer";
import Leadership from "../../components/New Components/Leadership/Leadership";
import Awards from "../../components/New Components/Awards/Awards";
import Research from "../../components/New Components/Research/Research";

export default function OnePage() {
  return (
    <div>
      <Landing />
      <div
        id="social-impact"
        style={{ position: "relative", bottom: "77px" }}
      />
      <SocialImpact />
      <div id="academic" style={{ position: "relative", bottom: "77px" }} />
      <AcademicAndSummer />
      <div id="leadership" style={{ position: "relative", bottom: "77px" }} />
      <Leadership />
      <div id="awards" style={{ position: "relative", bottom: "77px" }} />
      <Awards />
      <div id="research" style={{ position: "relative", bottom: "77px" }} />
      <Research />
    </div>
  );
}
