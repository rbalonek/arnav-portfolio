// import { TRUE } from "node-sass";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EngagementItemModal from "../EngagementItemModal/EngagementItemModal";
import "./EngagementItem.css";

export default function EngagementItem(props) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(false);
  };

  return (
    <div className="engagement-item__container">
      <h1 className="engagement-item__title">{props.title}</h1>
      <h3 className="engagement-item__title">{props.position}</h3>
      <img
        className="engagement-item__banner"
        src={props.banner}
        alt={props.title}
      />
      <p className="engagement-item__subtitle">{props.subtitle}</p>

      <Button
        style={{ position: "relative", bottom: "10px" }}
        variant="primary"
        onClick={() => setShow(true)}
      >
        More Info
      </Button>

      <Modal
        size={"xl"}
        centered
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <EngagementItemModal
            banner={props.banner}
            title={props.title}
            subtitle={props.subtitle}
            description={props.description}
            points={props.points}
            websiteLink={props.websiteLink}
            handleClick={handleClick}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

// <p>{props.description}</p>
//       {props.points.map((point) => (
//         <p>-{point}</p>
//       ))}
