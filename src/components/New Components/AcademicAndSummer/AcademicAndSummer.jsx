import React from "react";
import "./AcademicAndSummer.css";
import AcademicTable from "./AcademicTable/AcademicTable";

export default function AcademicAndSummer() {
  return (
    <div className="academic-summer__container">
      <div className="academic-summer__banner">
        <h1 className="title__banners">ACADEMICS AND SUMMER PROGRAMS</h1>
      </div>

      <div className="academic-summer__top__container">
        <div className="academic-summer__top__left__container">
          <div className="academic-summer__gpa">
            <h3>GPA 4.0</h3>
          </div>
          <div className="academic-summer__sat">
            <h3>SAT 1550</h3>
            <p>Math 800, English 750</p>
          </div>
        </div>

        <div className="academic-summer__top__right__container">
          <AcademicTable />
        </div>
      </div>

      <div className="academic-summer__bottom__container">
        <div className="academic-summer__bottom__box">
          <p className="academic-summer__bottom__box-title">HARKER SCHOOL</p>
          <p className="academic-summer__bottom__box-text">Economics</p>
          <p className="academic-summer__bottom__box-text">( Summer 2019)</p>
        </div>
        <div className="academic-summer__bottom__box">
          <p className="academic-summer__bottom__box-title">
            HARVARD UNIVERSITY
          </p>
          <p className="academic-summer__bottom__box-text">
            Introduction to Computer Sciences
          </p>
          <p className="academic-summer__bottom__box-text">
            4 Credits (Summer 2020)
          </p>
        </div>

        <div className="academic-summer__bottom__box">
          <p
            className="academic-summer__bottom__box-title"
            style={{ top: "10px" }}
          >
            LAUNCHX
          </p>
          <p
            style={{ position: "relative", bottom: "10px", fontSize: "15px" }}
            className="academic-summer__bottom__box-text"
          >
            (Formerly MIT)
          </p>
          <p className="academic-summer__bottom__box-text">
            ENTREPRENEURSHIP PROGRAM (SUMMER 2020)
          </p>
          <p className="academic-summer__bottom__box-text">
            LAUNCHED BLUE ORCA
          </p>
        </div>
        <div className="academic-summer__bottom__box">
          <p className="academic-summer__bottom__box-title">
            WHARTON BUSINESS SCHOOL
          </p>
          <p className="academic-summer__bottom__box-text">
            SPORTS BUSINESS PROGRAM
          </p>
          <p className="academic-summer__bottom__box-text">( Summer 2021)</p>
        </div>
      </div>
    </div>
  );
}
