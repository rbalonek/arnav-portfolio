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

      <div className="leadership-outside__box">
        <p className="leadership-outside__title">
          Blue Orca Co Founder and CFO
        </p>
        <p style={{ fontWeight: "bold" }} className="leadership-outside__text">
          “A reusable straw with a path breaking design” to keep our oceans
          plastic free.
        </p>
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

        <p className="leadership-outside__text">
          From ‘Conceptualization’ to ‘Bringing product to Market’. As part of
          LaunchX program.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1-t9KoK-CWhITTwIjoCBQ85q8IBXcEkbi/view?usp=sharing"
        >
          <p style={{ textDecoration: "underline" }}>VIDEO</p>
        </a>
      </div>

      <div className="leadership-outside__box">
        <p className="leadership-outside__title">
          CA State President: Paper Bridges
        </p>
        <p style={{ fontWeight: "bold" }} className="leadership-outside__text">
          “Started 18 Chapters in California and paired them with Orphanages
          across the Globe”
        </p>
        <img
          className="leadership-outside__paper-pic"
          src={Paper}
          alt={Paper}
        />

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.paper
      bridges.org/"
        >
          <p className="leadership-outside__text">
            https://www.paper bridges.org/
          </p>
        </a>
        <p>“A Thunder Shots Partner”</p>
      </div>

      <div
        className="leadership-outside__box"
        style={{
          height: "570px",
          marginBottom: "20px",
        }}
      >
        <p className="leadership-outside__title">
          Vice President Marketing at KoreKloud
        </p>
        <p style={{ fontWeight: "bold" }} className="leadership-outside__text">
          “Manage Social Media Platforms to Engage 700+ students for over 25
          courses”
        </p>

        <p style={{ fontWeight: "bold" }} className="leadership-outside__text">
          “Oversee development of courses and management of workshops”
        </p>
        <div style={{ position: "relative", bottom: "100px" }}>
          <KoreKloudCarousel />
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.korekloud.org"
        >
          <p
            style={{
              textDecoration: "underline",
              position: "relative",
              bottom: "100px",
            }}
          >
            https://www.korekloud.org
          </p>
        </a>
        <p style={{ position: "relative", bottom: "100px" }}>
          “A Thunder Shots Partner”
        </p>
      </div>
    </div>
  );
}
