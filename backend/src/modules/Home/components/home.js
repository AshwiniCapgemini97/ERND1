import React from "react";
import { Header } from "semantic-ui-react";
import MainSlider from "./mainSlider";
import CardSlider from "./cardSlider";
import "./css/home.scss";
import cardPic from "../../../assets/images/95716AIE Business Trip Agent.jpg";
import SectorSlider from "./sectorSlider";
import TechnologyDomainSlider from "./technologyDomainSlider";
import LeaderDashboard from "./leaderDashboard";
import DemoCategory from "./demoCategory";

export default function Home() {
  const mostViewedCards = [
    {
      id: 1,
      imgSrc: cardPic,
      cardHeading: "AIE Business Trip Agent",
      cardDesc: "",
      downloads: 44,
      views: 500,
      starts: 5,
    },
    {
      id: 2,
      imgSrc: cardPic,
      cardHeading: "AIE Business Trip Agent",
      cardDesc: "",
      downloads: 44,
      views: 500,
      starts: 5,
    },
    {
      id: 3,
      imgSrc: cardPic,
      cardHeading: "AIE Business Trip Agent",
      cardDesc: "",
      downloads: 44,
      views: 500,
      starts: 5,
    },
    {
      id: 4,
      imgSrc: cardPic,
      cardHeading: "AIE Business Trip Agent",
      cardDesc: "",
      downloads: 44,
      views: 500,
      starts: 5,
    },
    {
      id: 5,
      imgSrc: cardPic,
      cardHeading: "AIE Business Trip Agent",
      cardDesc: "",
      downloads: 44,
      views: 500,
      starts: 5,
    },
  ];

  return (
    <div className="homePage-wrapper">
      <MainSlider />
      <SectorSlider />
      <TechnologyDomainSlider />
      <DemoCategory />

      <div className="mostViewed">
        <Header size="large">Most Viewed Assets Per Sector</Header>
        <CardSlider cardsArr={mostViewedCards} />
      </div>
      <LeaderDashboard />
    </div>
  );
}
