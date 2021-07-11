import React from "react";
import "./Awards.css";
import AwardsCarousel from "./AwardsCarousel/AwardsCarousel";

export default function Awards() {
  return (
    <div className="awards__container">
      <div className="leadership__banner">
        <h1>Awards</h1>
      </div>

      <div className="awards__text-carousel__container">
        <div className="awards__text">
          <ul style={{ height: "90%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "100%",
              }}
            >
              <li>Stanford Varsity LD DEBATE finalist (National)</li>
              <li>FBLA 5 th place Management Decision Making (State)</li>
              <li>JV All League best defender award 2020</li>
              <li>
                {" "}
                Best student in Physics in 11 th grade (Red White Blue Award)
              </li>
              <li>Top student (9%) of school (UC ELC program)</li>
              <li>Stephen Stewart Varsity LD debate finalist (Regional)</li>
              <li>Gold Presidential Volunteering Service Award</li>
              <li>JV Most improved player award 2019</li>
              <li>Qualified for International Surf cup (Liverpool)</li>
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
