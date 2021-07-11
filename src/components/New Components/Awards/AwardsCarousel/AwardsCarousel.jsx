import React from "react";
import "./AwardsCarousel.css";
import { Carousel, CarouselItem } from "react-bootstrap";

import One from "../../../../assets/JvSoccerWider.jpg";
import Two from "../../../../assets/AwardsPics/IMG_2215.JPG";
import Three from "../../../../assets/AwardsPics/IMG_2218.JPG";
import Four from "../../../../assets/AwardsPics/IMG_3632.JPG";
import Five from "../../../../assets/AwardsPics/IMG_3910.JPG";
import Six from "../../../../assets/AwardsPics/IMG_4516.jpg";
import Seven from "../../../../assets/AwardsPics/IMG_4517.jpg";
import Eight from "../../../../assets/AwardsPics/IMG_4520.jpg";
import Nine from "../../../../assets/AwardsPics/IMG_4522.jpg";
import Ten from "../../../../assets/AwardsPics/IMG_4523.jpg";

export default function AwardsCarousel() {
  const AwardsImgSlides = [
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
  ];
  return (
    <div className="awards-carousel__container">
      <Carousel>
        {AwardsImgSlides.map((slide) => (
          <CarouselItem>
            <img className="awards-carousel__item " src={slide} alt={slide} />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}
