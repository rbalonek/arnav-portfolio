import React from "react";
import "./NewAcademicTable.css";
import Table from "react-bootstrap/Table";

export default function NewAcademicTable() {
  return (
    <div className="new-academic-table__container">
      <Table className="the-table" striped bordered>
        <thead className="table-title">
          <tr>
            <th td colSpan="4">
              Advanced Placement (AP Courses)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="1">Calculus BC</td>
            <td colSpan="1">5</td>
            <td colSpan="1">Statistics</td>
            <td colSpan="1">5</td>
          </tr>
          <tr>
            <td colSpan="1">Macroeconomics</td>
            <td colSpan="1">5</td>
            <td colSpan="1">Microeconomics</td>
            <td colSpan="1">5</td>
          </tr>
          <tr>
            <td colSpan="1">Calculus AB</td>
            <td colSpan="1">5</td>
            <td colSpan="1">Physics 1</td>
            <td colSpan="1">5</td>
          </tr>
          <tr>
            <td colSpan="1">Physics C: Mechanics</td>
            <td colSpan="1">4</td>
            <td colSpan="1">US history</td>
            <td colSpan="1">4</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
