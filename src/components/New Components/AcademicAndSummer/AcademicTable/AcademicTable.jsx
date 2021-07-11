import React from "react";
import "./AcademicTable.css";

import Table from "react-bootstrap/Table";

export default function AcademicTable() {
  return (
    <div>
      <p
        style={{
          backgroundColor: "#0077d7",
          color: "white",
          width: "100%",
          position: "relative",
          top: "15px",
        }}
      >
        Advanced Placement (AP Courses)
      </p>
      <Table size="sm" striped bordered>
        <tbody>
          <tr>
            <th>Microeconomics - 5</th>
            <th>Physics A</th>
          </tr>
          <tr>
            <th>Macroeconomics - 5</th>
            <th>Physics C - Mechanics</th>
          </tr>
          <tr>
            <th>Calculus AB -5 </th>
            <th>Calculus BC</th>
          </tr>
          <tr>
            <th>Statistics</th>
            <th>US history</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
