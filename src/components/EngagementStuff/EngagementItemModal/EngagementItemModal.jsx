import React from "react";
import { Button } from "react-bootstrap";
import "./EngagementItemModal.css";

export default function EngagementItemModal(props) {
  const goToSite = () => {
    window.open(`${props.websiteLink}`, "_blank");
  };

  return (
    <div className="engagement-modal__container">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <img
        className="engagement-modal__img"
        src={props.banner}
        alt={props.title}
      />
      <p>{props.description}</p>
      {props.points.map((point) => (
        <p>-{point}</p>
      ))}
      <Button onClick={goToSite}>Go to Site</Button>
      <br /> <br />
      <Button onClick={props.handleClick} variant="danger">
        Close
      </Button>
    </div>
  );
}
