import React from "react";
import "./NewResearch.css";

export default function NewResearch() {
  return (
    <div className="new-research__container">
      <div className="leadership__banner">
        <h1 className="title__banners">RESEARCH</h1>
      </div>

      <div className="new-research__research-container">
        <div className="new-research__box-title">
          <h1>RESEARCH</h1>
        </div>

        <div className="new-research__research-one">
          <h1 className="new-research__research-title">Foothill College</h1>
          <p className="new-research__research-text">
            Completed research on aspects of competitive balance to help leagues
            maximize revenues.{" "}
          </p>
          <p className="new-research__research-text italic">
            Click to See Paper
          </p>
        </div>
        <div className="new-research__research-two">
          <h1 className="new-research__research-title">Syracuse University</h1>
          <p className="new-research__research-text">
            Conducting research on using player ratings to predict team winning
            probability.
          </p>
        </div>
      </div>

      <div className="new-research__research-container">
        <div className="new-research__box-title">
          <h1>AUTHOR</h1>
        </div>

        <div className="new-research__author">
          <h1 className="new-research__research-title">
            Economics of Soccer and Covid-19
          </h1>
          <p className="new-research__research-text">
            Self-published a book on economic aspects of soccer industry and
            impacts of Covid-19.
          </p>
          <p className="new-research__research-text italic">
            Click to See Book
          </p>
        </div>
      </div>

      <div className="new-research__research-container">
        <div className="new-research__box-title">
          <h1>MY BLOGS</h1>
        </div>

        <div className="new-research__author">
          <h1 className="new-research__research-title">
            Economics of Soccer and Covid-19
          </h1>
          <p className="new-research__research-text">
            - “Connecting Communities through Soccer” in collaboration with
            Refugees United Soccer Academy
          </p>
          <p>- Business of Sports (Ex: Economics of Soccer discrimination)</p>
          <p>- General Sports Topics ( Ex: How to balance school and sports)</p>
          <p className="new-research__research-text italic">
            Click to See Blogs
          </p>
        </div>
      </div>
    </div>
  );
}
