import React from "react";
import "./OnePage.css";
import Landing from "../../components/New Components/Landing/Landing";
import SocialImpact from "../../components/New Components/SocialImpact/SocialImpact";
import AcademicAndSummer from "../../components/New Components/AcademicAndSummer/AcademicAndSummer";
import Leadership from "../../components/New Components/Leadership/Leadership";
import Awards from "../../components/New Components/Awards/Awards";
import NewResearch from "../../components/New Components/Research/NewResearch/NewResearch";

export default function OnePage() {
  return (
    <div>
      <Landing />
      <div id="social-impact" className="social" />
      <SocialImpact />
      <div className="academic" id="academic" />
      <AcademicAndSummer />
      <div className="leadership" id="leadership" />
      <Leadership />
      <div className="awards" id="awards" />
      <Awards />
      <div className="research" id="research" />
      <NewResearch />
    </div>
  );
}
