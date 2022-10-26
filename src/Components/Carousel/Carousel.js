import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Arrow from "./arrow.png";
import Avatar from "./avatar.png";
import "./Carousel.scss";

function HomeCarousel() {
  return (
    <Carousel>
      <div className="carouselMain">
        <img src={Avatar} alt="" className="carousel-img" />
        <p className="CarouselText">
          "This is my first boost purchase, and it was a fantastic experience."
        </p>
        <div className="rank-carousel">
          <p className="from-rank" id="gold">
            Gold 3
          </p>
          <img src={Arrow} alt="" className="arrow" />
          <p className="to-rank" id="diamond">
            Diamond 2
          </p>
        </div>
      </div>
      <div>
        <img src={Avatar} alt="" className="carousel-img" />
        <p className="CarouselText">
          "This is my first boost purchase, and it was a fantastic experience."
        </p>
        <div className="rank-carousel">
          <p className="from-rank" id="gold">
            Gold 4
          </p>
          <img src={Arrow} alt="" className="arrow" />
          <p className="to-rank" id="diamond">
            Diamond 1
          </p>
        </div>
      </div>
      <div>
        <img src={Avatar} alt="" className="carousel-img" />
        <p className="CarouselText">
          "This is my first boost purchase, and it was a fantastic experience."
        </p>
        <div className="rank-carousel">
          <p className="from-rank" id="gold">
            Gold 3
          </p>
          <img src={Arrow} alt="" className="arrow" />
          <p className="to-rank" id="diamond">
            Diamond 1
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default HomeCarousel;
