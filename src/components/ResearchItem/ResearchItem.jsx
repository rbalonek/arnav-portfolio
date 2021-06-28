import React from "react";
import "./ResearchItem.css";
import { Button } from "react-bootstrap";

export default function ResearchItem(props) {
  const goToSite = () => {
    window.open(`${props.link}`, "_blank");
  };

  return (
    <div style={{ textAlign: "-webkit-center", marginBottom: "20px" }}>
      <div className="research-item__container">
        <div>
          <img className="research-item__logo" alt="logo" src={props.logo} />
        </div>
        <div className="research-item__text-container">
          <h2 className="research-item__text cell-space">{props.title}</h2>
          <br />
          <br />
          <p className="research-item__text ">{props.where}</p>

          <p className="research-item__text ">{props.mission}</p>
          {props.link && <Button onClick={goToSite}>Buy Book</Button>}
        </div>
      </div>
    </div>
  );
}
