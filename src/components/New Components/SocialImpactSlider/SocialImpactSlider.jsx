import React from "react";
import "./SocialImpactSlider.css";

import { Carousel, CarouselItem } from "react-bootstrap";

import One from "../../../assets/SocialImpactPics/pics with kids 1.jpg";
import Two from "../../../assets/SocialImpactPics/pics with kids 3.jpg";
import Three from "../../../assets/SocialImpactPics/pics with kids 4.jpg";
import Four from "../../../assets/SocialImpactPics/Africa1.jpg";
// import Five from "../../../assets/SocialImpactPics/Africa2.jpg";
import Six from "../../../assets/SocialImpactPics/IMG_3805.jpg";
// import Seven from "../../../assets/SocialImpactPics/Local1.jpg";
// import Eight from "../../../assets/SocialImpactPics/Local2.jpg";
import Nine from "../../../assets/SocialImpactPics/Local3.jpg";

export default function SocialImpactSlider() {
  const imagesForCarousel = [
    One,
    Two,
    Three,
    Four,
    // Five,
    Six,
    // Seven,
    // Eight,
    Nine,
  ];
  return (
    <div className="social-impact-slider__container">
      <div className="social-impact-slider__carousel-holder">
        <Carousel
          controls={true}
          indicators={false}
          className="social-impact-slider__carousel "
        >
          {imagesForCarousel.map((pic) => (
            <CarouselItem>
              <img
                className="social-impact-slider__image"
                src={pic}
                alt={pic}
              />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
