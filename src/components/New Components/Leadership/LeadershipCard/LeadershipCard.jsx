import React from "react";
import "./LeadershipCard.css";
import { Button } from "react-bootstrap";

export default function LeadershipCard(props) {
  return (
    <div className="leadership-card__container">
      <p className="leadership-card__title">{props.title}</p>
      <img
        style={{ maxHeight: "150px", objectFit: "contain" }}
        src={props.heroImg}
        alt={props.title}
      />
      <div style={{ position: "relative", marginBottom: "10px" }}>
        <a target="_blank" rel="noopener noreferrer" href={props.url}>
          <Button variant="primary">Visit Site</Button>
        </a>
      </div>
    </div>
  );
}
