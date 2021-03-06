import React from "react";
import "./Academic.css";

export default function Academic(props) {
  return (
    <div className="academic__container">
      <h4 className="academic__title">{props.title}</h4>
      {props.content.map((thing) => (
        <p>{thing}</p>
      ))}
    </div>
  );
}
