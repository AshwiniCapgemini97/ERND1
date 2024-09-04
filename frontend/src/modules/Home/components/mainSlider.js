import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../../assets/images/slider-1.jpg";
import slider2 from "../../../assets/images/slider-2.jpg";
import slider3 from "../../../assets/images/slider-3.jpg";
import slider4 from "../../../assets/images/slider-4.jpg";
import slider5 from "../../../assets/images/slider-5.jpg";
import slider6 from "../../../assets/images/slider-6.jpg";
import "./css/mainSlider.scss";

export default function MainSlider() {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="mainSliderContainer">
      <Slider {...settings}>
        <div>
          <div className="sliderText">
            Empower Exploration and Experimentation
          </div>
          <img src={slider1} alt={slider1} />
        </div>
        <div>
          <img src={slider2} alt={slider2} />
        </div>
        <div>
          <img src={slider3} alt={slider3} />
        </div>
        <div>
          <img src={slider4} alt={slider4} />
        </div>
        <div>
          <img src={slider5} alt={slider5} />
        </div>
        <div>
          <img src={slider6} alt={slider6} />
        </div>
      </Slider>
    </div>
  );
}
