import React from "react";
import "./LeadershipOutside.css";

import OrchaOne from "../../../../assets/OrchaHad.jpg";
import OrchaTwo from "../../../../assets/Copy of A Reusable Straw, (3).png";

import Paper from "../../../../assets/PaperBridges.png";
import KoreKloudCarousel from "./KoreKloudCarousel/KoreKloudCarousel";

export default function LeadershipOutside() {
  return (
    <div className="leadership-outside__container">
      <div className="leadership-outside-nav-anchor" id="outside" />

      <div className="leadership-outside__box left-a-bit">
        <p className="leadership-outside__title">
          Co-Founder and CFO: Blue Orca
        </p>

        <div className="leadership-outside__box-split">
          <div className="leadership-outside__box-left">
            <p
              style={{ fontWeight: "bold" }}
              className="leadership-outside__text"
            >
              “A reusable straw in a stylish bracelet” to keep our oceans
              plastic free."
            </p>

            <p className="leadership-outside__text">
              From ‘Conceptualization’ to ‘Bringing product to Market’.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1-t9KoK-CWhITTwIjoCBQ85q8IBXcEkbi/view?usp=sharing"
            >
              <p style={{ textDecoration: "underline" }}>VIDEO</p>
            </a>
          </div>
          <div className="leadership-outside__box-right">
            <img
              className="leadership-outside__orcha-pics"
              src={OrchaOne}
              alt={OrchaOne}
            />
            <img
              className="leadership-outside__orcha-pics"
              src={OrchaTwo}
              alt={OrchaTwo}
            />
          </div>
        </div>
      </div>

      <div className="leadership-outside__box">
        <p className="leadership-outside__title">
          CA State President: Paper Bridges
        </p>
        <div className="bridges__split">
          <div className="bridges__left">
            <p
              style={{ fontWeight: "bold" }}
              className="leadership-outside__text "
            >
              “Started 18 Chapters in California and paired them with Orphanages
              across the Globe to conduct many projects”
            </p>
          </div>

          <div className="bridges__right">
            <img
              className="leadership-outside__paper-pic"
              src={Paper}
              alt={Paper}
            />

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.paper-bridges.org/"
            >
              <p className="leadership-outside__text">
                https://www.paper-bridges.org/
              </p>
            </a>
            <p>“A Thunder Shots Partner”</p>
          </div>
        </div>
      </div>

      <div
        className="leadership-outside__box"
        style={{
          // height: "570px",
          marginBottom: "20px",
        }}
      >
        <p className="leadership-outside__title">
          Vice President of Marketing: KoreKloud
        </p>

        <div className="kore-split">
          <div className="kore-left">
            <p
              style={{ fontWeight: "bold" }}
              className="leadership-outside__text"
            >
              “Manage Social Media Platforms to Engage 700+ students for over 25
              courses”
            </p>

            <p
              style={{ fontWeight: "bold", marginBottom: "30px" }}
              className="leadership-outside__text"
            >
              “Developed intensive business, finance, and economics curriculums
              garnering 100+ students from 5 countries”
            </p>
          </div>
          <div className="kore-right">
            <div style={{ position: "relative", bottom: "120px" }}>
              <KoreKloudCarousel />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.korekloud.org"
            >
              <p
                className="change-for-mobile"
                style={{
                  textDecoration: "underline",
                  position: "relative",
                  // bottom: "100px",
                }}
              >
                https://www.korekloud.org
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
