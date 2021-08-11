import React from "react";
import "./Awards.css";
import AwardsCarousel from "./AwardsCarousel/AwardsCarousel";

export default function Awards() {
  return (
    <div className="awards__container">
      <div className="leadership__banner">
        <h1 className="title__banners">Awards</h1>
      </div>

      <div className="awards__text-carousel__container">
        <div className="awards__text">
          <ul className="awards__card" style={{ height: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "100%",
              }}
            >
              <li>Stanford Varsity LD Debate Triple-Octafinalist (National)</li>
              <li>
                FBLA 5th place Management Decision Making (Regional & State
                Levels, Qualified for Nationals)
              </li>
              <li>All League Best Defender award/Won League</li>
              <li>Red White Blue Award for best AP Physics C Student</li>
              <li>Gold Presidential Volunteering Service Award</li>
              <li>Stephen Stewart Varsity LD debate Double-Octafinalist</li>
              <li>Santa Clara MUN Outstanding Speaker</li>
            </div>
          </ul>
        </div>
        <div className="awards__carousel">
          {" "}
          <AwardsCarousel />{" "}
        </div>
      </div>
    </div>
  );
}
