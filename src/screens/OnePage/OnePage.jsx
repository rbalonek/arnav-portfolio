import React from "react";
import "./OnePage.css";
import Landing from "../../components/New Components/Landing/Landing";
import SocialImpact from "../../components/New Components/SocialImpact/SocialImpact";
import AcademicAndSummer from "../../components/New Components/AcademicAndSummer/AcademicAndSummer";

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
    </div>
  );
}
