import React from "react";
import "./KoreKloudCarousel.css";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function KoreKloudCarousel() {
  return (
    <div className="kore-carousel__container">
      <Carousel interval={8000} loop={false}>
        <Carousel.Item>
          <ReactPlayer
            style={{ textAlign: "-webkit-center" }}
            width="80%"
            // playing={true}
            controls={true}
            url="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1624838466/Arnav/EEI_VID_1_dglk4y.mp4"
          />
        </Carousel.Item>

        <Carousel.Item>
          <ReactPlayer
            style={{ textAlign: "-webkit-center" }}
            width="80%"
            // playing={true}
            controls={true}
            url="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1624838559/Arnav/EEI_VID_2_m39teq.mp4"
          />
        </Carousel.Item>

        <Carousel.Item>
          <ReactPlayer
            style={{ textAlign: "-webkit-center" }}
            width="80%"
            // playing={true}
            controls={true}
            url="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1624838612/Arnav/EEI_VID_4_zl8krs.mp4"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
