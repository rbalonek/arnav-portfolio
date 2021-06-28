import React from "react";
import "./WorkExperience.css";
import BlueOrca from "../components/BlueOrca/BlueOrca";
import ResearchItem from "../components/ResearchItem/ResearchItem";

import Syracuse from "../assets/Syracuse.jpeg";
import Foothill from "../assets/Foothill.jpeg";
import Book from "../assets/Book.jpg";

export default function WorkExperience() {
  return (
    <div className="work-experience__container">
      <h1 style={{ textAlign: "center" }}>Work Experience</h1>
      <hr />
      <BlueOrca />
      <hr />
      <h1 style={{ textAlign: "center" }}>Research Work</h1>
      <hr />
      <ResearchItem
        title="Research Intern"
        where="Soccer Analytics Club at Syracuse University"
        logo={Syracuse}
        mission="working with university students to research using player ratings for lineups to predict team winning probability to maximize revenue."
      />

      <ResearchItem
        title="Independent Researcher"
        where="Foothill College"
        logo={Foothill}
        mission="Working independently under a professor to research on the importance of sub-competitions and overall competitions for leagues to get maximum economics benefits."
      />

      <ResearchItem
        title="Author"
        where="Economics of Soccer and COVID-19"
        logo={Book}
        mission="Wrote and self-published a book on the economic aspects of the soccer industry and impacts of Covid-19. Distributed to underprivileged kids in Africa and Peru. In this book, we dive into the economic impact of covid-19 and have a deeper look at what goes around in the backend of the soccer industry. We also take a deeper look at how fundamental economics concepts influence soccer."
        link="https://www.amazon.com/Economics-Soccer-Covid-19-Arnav-Jain/dp/B08RT6FB64/ref=sr_1_2?dchild=1&keywords=economics+of+soccer+and+covid+19&qid=1618705536&sr=8-2"
      />
    </div>
  );
}
