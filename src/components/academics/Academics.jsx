import React from "react";
import Academic from "../Academic/Academic";
import "./Academics.css";
import { Slide } from "react-awesome-reveal";

export default function Academics() {
  return (
    <div className="academics-parent">
      <h1 style={{ color: "white" }} className="section-title">
        Academics
      </h1>
      <div className="academics__container">
        <Slide
          cascade={false}
          duration={1000}
          direction="up"
          triggerOnce={true}
        >
          <Academic title="Unweighted GPA:" content={["4.0"]} />
          <Academic
            title="SAT Score:"
            content={["1550/1600", "Math: 800", "English: 750"]}
          />
          <Academic
            title="AP Microeconomics"
            content={["AP score: 5", "Grade 10"]}
          />
          <Academic
            title="AP Macroeconomics"
            content={["AP score: 5", "Grade 10"]}
          />
          <Academic title="Calculus" content={["AP score: 5", "Grade 10"]} />
          <Academic title="AP Statistics" content={["Grade 11"]} />
          <Academic
            title="AP Physics C: "
            content={["Mechanics", "Grade 11"]}
          />
          <Academic title="AP US History" content={["Grade 11"]} />
          <Academic title="AP Calculus BC" content={["Grade 11"]} />
          <Academic title="AP Physics 1" content={["Grade 11"]} />
          <Academic title="Math Level 2:" content={["800/800"]} />
          <Academic
            title=" Harvard University"
            content={[
              "4 college credits",
              "Introduction to Computer Science Through Python",
              "Summer 2020",
            ]}
          />
          <Academic
            title="LaunchX"
            content={["Entrepreneurship program", "Summer 2020"]}
          />
          <Academic
            title=" Wharton Business School:"
            content={["Sports Business Academy", "Summer 2021"]}
          />
        </Slide>
      </div>
    </div>
  );
}
