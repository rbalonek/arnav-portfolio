import React from "react";
import "./LeadershipCard.css";
import { Button } from "react-bootstrap";

export default function LeadershipCard(props) {
  return (
    <div className="leadership-card__container">
      <h4 className="leadership-card__title">{props.title}</h4>
      <a target="_blank" rel="noopener noreferrer" href={props.url}>
        <img
          className="leadership-card__img"
          style={{
            // maxHeight: "150px",
            objectFit: "contain",
          }}
          src={props.heroImg}
          alt={props.title}
        />
      </a>
    </div>
  );
}
