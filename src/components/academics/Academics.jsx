import React from "react";
import Academic from "../Academic/Academic";
import "./Academics.css";

export default function Academics() {
  return (
    <div className="academics-parent">
      <h1 style={{ color: "white" }} className="section-title">
        Academics
      </h1>

      <div className="academics__container">
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
        <Academic title="AP Physics C: " content={["Mechanics", "Grade 11"]} />
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
      </div>
    </div>
  );
}

// <div className="academics__card">
//         <h3 className="strong">Unweighted GPA:</h3>
//         <p> 4.0</p>
//         <h3 className="strong">SAT Score: </h3>
//         <p>1550/1600 (Math: 800, English: 750)</p>
//         <h3 className="strong">AP Subjects and Scores </h3>
//         <p>
//           A. Grade 10 - AP Microeconomics – 5, AP Macroeconomics – 5, Calculus
//           AB – 5
//         </p>
//         <p>
//           B. Grade 11 – AP Statistics, AP Physics C: Mechanics, AP US History,
//           AP Calculus BC, AP Physics 1
//         </p>

//         <h3 className="strong">Subject Tests: </h3>
//         <p>Math Level 2: 800/800</p>

//         <h3 className="strong">Harvard University (4 college credits):</h3>
//         <p>Introduction to Computer Science Through Python, Summer 2020</p>

//         <h3 className="strong">LaunchX </h3>
//         <p>Entrepreneurship program, Summer 2020</p>

//         <h3 className="strong">Wharton Business School: </h3>
//         <p>Sports Business Academy (Summer 2021)</p>
//       </div>
