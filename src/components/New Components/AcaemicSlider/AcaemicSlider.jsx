import React from "react";
import "./AcaemicSlider.css";
import { Carousel, CarouselItem } from "react-bootstrap";

export default function AcaemicSlider() {
  return (
    <div className="academic-slider__container">
      <div className="academic-slider__background">
        <Carousel
          controls={true}
          indicators={true}
          className="academic-slider__carousel "
        >
          <CarouselItem>
            <h3>Social Entrepreneur</h3>
          </CarouselItem>
          <CarouselItem>
            <h3>Academics</h3>
            <p>Unweighted GPA 4.0</p>
            <p>SAT 1550</p>
          </CarouselItem>
          <CarouselItem>
            <h4>Founder/CEO of Thunder Shots</h4>
          </CarouselItem>
          <CarouselItem>
            <h3>Competitive Soccer Player</h3>
          </CarouselItem>
          <CarouselItem>
            <h3>Author</h3>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}
