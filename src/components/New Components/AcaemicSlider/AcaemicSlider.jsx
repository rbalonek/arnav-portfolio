import React from "react";
import "./AcaemicSlider.css";
import { Carousel, CarouselItem } from "react-bootstrap";

export default function AcaemicSlider() {
  return (
    <div className="academic-slider__container">
      <div className="academic-slider__background">
        <Carousel
          controls={false}
          indicators={true}
          className="academic-slider__carousel "
        >
          <CarouselItem>
            <h3 className="carousel-text">Social Entrepreneur</h3>
          </CarouselItem>
          <CarouselItem>
            <h3 className="carousel-text title">Academics</h3>
            <p className="carousel-text">Unweighted GPA 4.0</p>
            <p className="carousel-text">SAT 1550</p>
          </CarouselItem>
          <CarouselItem>
            <h4 className="carousel-text">Founder/CEO of Thunder Shots</h4>
          </CarouselItem>
          <CarouselItem>
            <h3 className="carousel-text">Competitive Soccer Player</h3>
          </CarouselItem>
          <CarouselItem>
            <h3 className="carousel-text">Author</h3>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}
