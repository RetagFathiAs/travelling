import React from "react";

import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.png";
import sliderImg1 from "../../assets/images/slider/2.jpg";
import "../Banner/banner.css"

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="">
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  EXPLORE LIBYA <span>WITH TAZIET TOURS </span>
                </h5>
                <p className="sub_text">
                  Discover the beauty and history of Libya with Taziet Tours. From ancient ruins to stunning landscapes, we offer unforgettable experiences for every traveler. Join us on a journey through time and culture in Libya.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  BEAUTIFUL PLACE <span>TO VISIT</span>
                </h5>
                <p className="sub_text">
                                   Discover the beauty and history of Libya with Taziet Tours. From ancient ruins to stunning landscapes, we offer unforgettable experiences for every traveler. Join us on a journey through time and culture in Libya.

                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
