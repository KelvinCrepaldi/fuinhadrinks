import React from "react";
import { DrinkCardDiv } from "./DrinkCard.styles";
import { useNavigate } from "react-router-dom";

const DrinkCard = ({ drink }) => {
  const navigate = useNavigate();
  return (
    <DrinkCardDiv>
      <img src={drink.image_url} alt="drink figure"></img>
      <span>{drink.name}</span>
      <button
        onClick={() => {
          navigate(`/catalog/${drink.id}`);
        }}
      >
        View
      </button>
    </DrinkCardDiv>
  );
};

export default DrinkCard;
