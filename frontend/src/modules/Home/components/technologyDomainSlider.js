import React from "react";
import { Header, ListItem, List, Icon } from "semantic-ui-react";
import Slider from "react-slick";
import automotive from "../../../assets/images/sector_auto.png";
import manufacture from "../../../assets/images/sector_manu.png";
import cprd from "../../../assets/images/sector_retail.png";
import euc from "../../../assets/images/sector_energy.png";
import tmt from "../../../assets/images/sector_telecom.png";
import bcm from "../../../assets/images/sector_bcm.png";
import "./css/technologyDomainSlider.scss";

export default function TechnologyDomainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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

  const slides = [
    {
      title: "Automotive",
      icon: <img src={automotive} />,
    },
    {
      title: "Manufacturing",
      icon: <img src={manufacture} />,
    },
    {
      title: "CPRD",
      icon: <img src={cprd} />,
    },
    {
      title: "EUC",
      icon: <img src={euc} />,
    },
    {
      title: "TMT",
      icon: <img src={tmt} />,
    },
    {
      title: "FS",
      icon: <img src={bcm} />,
    },
  ];

  return (
    <div className="technologyDomainWrapper">
      <Header size="large">Technology Domain</Header>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            {slide.icon}
            <h3>{slide.title}</h3>
          </div>
        ))}
      </Slider>
      <br />
      <br />
      Hold on to your ‘Ticket to Transform’ and explore:
      <List>
        <ListItem>
          <Icon name="check circle" />
          &nbsp; Empower yourself with New Ideas!!
        </ListItem>
        <ListItem>
          <Icon name="check circle" />
          &nbsp; Explore & Co-Innovate!!
        </ListItem>
        <ListItem>
          <Icon name="check circle" />
          &nbsp; Experiment and co-orchestrate with your innovations!!!
        </ListItem>
      </List>
    </div>
  );
}
