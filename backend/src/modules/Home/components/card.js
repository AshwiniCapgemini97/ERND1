import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CardHeader,
  CardDescription,
  CardContent,
  Card as CardSementic,
  Icon,
  Image,
  MenuItem,
} from "semantic-ui-react";
import { pageURL } from "../../../shared/constants/constant";
import "./css/card.scss";

export default function Card({
  id,
  imgSrc,
  cardHeading,
  cardDesc,
  downloads,
  views,
  starts,
}) {
  let navigate = useNavigate();

  const handleClick = (assetId) => {
    navigate(`/assetDetail/${assetId}`);
  };

  return (
    <CardSementic className="cardWrapper">
      <Image src={imgSrc} wrapped ui={false} onClick={() => handleClick(id)} />
      <CardContent>
        <CardHeader onClick={() => handleClick(id)}>
          <MenuItem name={cardHeading} onClick={() => handleClick(id)} />
        </CardHeader>

        <CardDescription>{cardDesc}</CardDescription>
      </CardContent>
      <CardContent
        extra
        style={{ display: "flex", justifyContent: "space-between" }}
        className="cardFooter"
      >
        <span>
          <Icon name="download" /> {downloads}
        </span>
        <span>
          <Icon name="eye" /> {views}
        </span>
        <span>
          <Icon name="star" /> {starts}
        </span>
      </CardContent>
    </CardSementic>
  );
}
