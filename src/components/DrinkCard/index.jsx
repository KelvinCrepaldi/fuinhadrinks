import React from "react";
import { DrinkCardDiv } from "./DrinkCard.styles";

const DrinkCard = ({ drink }) => {
  return (
    <DrinkCardDiv>
      <img src={drink.image_url} alt="drink figure"></img>
      <span>{drink.name}</span>
      <button>View</button>
    </DrinkCardDiv>
  );
};

export default DrinkCard;
