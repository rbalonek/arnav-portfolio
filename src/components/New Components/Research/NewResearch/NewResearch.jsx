import React from "react";
import "./NewResearch.css";

import ResearchPaper from "../../../../assets/Paper/Final Research Paper.pdf";

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
          <a href={ResearchPaper} alt="paper" download>
            <p className="new-research__research-text italic">
              Click to See Paper
            </p>
          </a>
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href=" https://www.amazon.com/Economics-Soccer-Covid-19-Arnav-Jain/dp/B08RT6FB64/ref=sr_1_2?crid=3SSULMNQIM89Q&dchild=1&keywords=economics+of+soccer+and+covid+19&qid=1628628106&sprefix=economics+of+soccer+and+c%2Caps%2C459&sr=8-2"
            alt="book"
          >
            <p className="new-research__research-text italic">
              Click to See Book
            </p>
          </a>
        </div>
      </div>

      <div className="new-research__research-container">
        <div className="new-research__box-title">
          <h1>MY BLOGS</h1>
        </div>

        <div className="new-research__author">
          <p className="new-research__research-text">
            - “Connecting Communities through Soccer” in collaboration with
            Refugees United Soccer Academy
          </p>
          <p>- Business of Sports (Ex: Economics of Soccer discrimination)</p>
          <p>- General Sports Topics ( Ex: How to balance school and sports)</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.thethundershots.org/blog"
            alt="blog"
          >
            <p className="new-research__research-text italic">
              Click to See Blogs
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
