import React from "react";
import { Button, Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
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
      <div className="engagement-modal__text">
        <p>{props.description}</p>
        {props.points.map((point) => (
          <p>-{point}</p>
        ))}
      </div>
      {props.videoOne && (
        <>
          <Carousel loop={false}>
            <Carousel.Item>
              <ReactPlayer
                style={{ textAlign: "-webkit-center" }}
                width="50%"
                // playing={true}
                controls={true}
                url="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1624838466/Arnav/EEI_VID_1_dglk4y.mp4"
              />
            </Carousel.Item>

            <Carousel.Item>
              <ReactPlayer
                style={{ textAlign: "-webkit-center" }}
                width="50%"
                // playing={true}
                controls={true}
                url="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1624838559/Arnav/EEI_VID_2_m39teq.mp4"
              />
            </Carousel.Item>

            <Carousel.Item>
              <ReactPlayer
                style={{ textAlign: "-webkit-center" }}
                width="50%"
                // playing={true}
                controls={true}
                url="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1624838612/Arnav/EEI_VID_4_zl8krs.mp4"
              />
            </Carousel.Item>
          </Carousel>
        </>
      )}
      <Button onClick={goToSite}>Go to Site</Button>
      <br /> <br />
      <Button onClick={props.handleClick} variant="danger">
        Close
      </Button>
    </div>
  );
}
