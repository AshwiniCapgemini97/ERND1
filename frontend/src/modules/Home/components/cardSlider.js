import React from "react";
import Slider from "react-slick";
import Card from "./card";
import "./css/cardSlider.scss";

export default function CardSlider({ cardsArr }) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="cardSliderWrapper">
      <Slider {...settings}>
        {cardsArr.map((item, ind) => {
          return (
            <div key={ind} className="container-custom">
              <Card
                id={item.id}
                imgSrc={item.imgSrc}
                cardHeading={item.cardHeading}
                cardDesc={item.cardDesc}
                downloads={item.downloads}
                views={item.views}
                starts={item.starts}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
