import React from "react";
import "./BlueOrca.css";
import { Button } from "react-bootstrap";

import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";

import orcaOne from "../../assets/BlueOrca.jpg";
import orcaTwo from "../../assets/BlueOrca2.jpg";
import orcaThree from "../../assets/BlueOrca3.jpg";
import orcaFour from "../../assets/BlueOrca4.jpg";
import orchaNews from "../../assets/Screen Shot 2021-06-27 at 5.31.35 PM.png";

export default function BlueOrca() {
  const goToSite = () => {
    window.open(
      "https://www.amazon.com/Blue-Orca-Straw-Bracelet-Openable/dp/B092CG178W/ref=sr_1_2?dchild=1&keywords=blue+orca&qid=1624571764&sr=8-2",
      "_blank"
    );
  };

  return (
    <div className="blue-orcha__container">
      <div className="blue-orcha__card">
        <h1>Blue Orca</h1>
        <h4>TITLE: Co-Founder and CFO </h4>
        <p>June 2020</p>
        <p>For profit organization</p>

        <div style={{ marginBottom: "10px" }}>
          <Button onClick={goToSite}>Buy Now</Button>
        </div>
        <br />
        <Carousel playing={false} loop="false">
          <Carousel.Item>
            <img className="orcha-img" src={orcaOne} alt={orcaOne} />
          </Carousel.Item>

          <Carousel.Item>
            <img className="orcha-img" src={orcaTwo} alt={orcaTwo} />
          </Carousel.Item>

          <Carousel.Item>
            <img className="orcha-img" src={orcaThree} alt={orcaThree} />
          </Carousel.Item>

          <Carousel.Item>
            <img className="orcha-img" src={orcaFour} alt={orcaFour} />
          </Carousel.Item>

          <Carousel.Item interval={60000}>
            <ReactPlayer
              style={{ textAlign: "-webkit-center", marginBottom: "20px" }}
              width="50%"
              height="500px"
              // playing={true}
              controls={true}
              url="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1624840455/Arnav/BlueOrca_a9gsi7.mp4"
            />
          </Carousel.Item>
        </Carousel>

        <div className="blue-orcha__text">
          <p>
            LaunchX alumni (formerly an MIT program) where students launch their
            own startups.
          </p>
          <p>
            Working in a team of 5, launched a new product, Blue Orca, a
            reusable straw in a fashionable bracelet case to help keep our
            oceans plastic free.
          </p>
          <p>
            Responsible for Marketing research of the product. Prepared business
            plans and got estimates from suppliers in G.China and Taiwan for
            manufacturing. 
          </p>
          <p>
            Sales of $1000+. Ran Indiegogo campaign ($700+). Now sold on Amazon
            for $14.99.
          </p>
          <p>
            Our product was endorsed by UC professor and it was featured in a
            Newspaper (100,000+ readers)
          </p>
        </div>
        <img style={{ marginTop: "20px" }} alt="paper" src={orchaNews} />
      </div>
    </div>
  );
}
