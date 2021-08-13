import React from "react";
import "./LeadershipCard.css";
// import { Button } from "react-bootstrap";

export default function LeadershipCard(props) {
  return (
    <div className="leadership-card__container">
      <h4 className="leadership-card__title">{props.title}</h4>
      {props.subtitle && (
        <p className="leadership-card__subtitle">{props.subtitle}</p>
      )}
      <a target="_blank" rel="noopener noreferrer" href={props.url}>
        <div className="img-holder">
          <img
            className="leadership-card__img"
            style={{
              // maxHeight: "150px",
              objectFit: "contain",
            }}
            src={props.heroImg}
            alt={props.title}
          />
        </div>
      </a>
    </div>
  );
}
