import React from "react";
import "./OnePage.css";
import Landing from "../../components/New Components/Landing/Landing";
import SocialImpact from "../../components/New Components/SocialImpact/SocialImpact";

export default function OnePage() {
  return (
    <div>
      <Landing />
      <div
        id="social-impact"
        style={{ position: "relative", bottom: "77px" }}
      />
      <SocialImpact />
    </div>
  );
}
