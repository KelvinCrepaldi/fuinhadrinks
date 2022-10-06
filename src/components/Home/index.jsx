import React from "react";
import { useContext, useState } from "react";
import { DrinkContext } from "../../Providers/Drinks";
import { HomeDiv } from "./Home.styles";

import DrinkCard from "../DrinkCard";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const { drinks } = useContext(DrinkContext);

  const handleValue = (value) => {
    setInputValue(value);
  };

  const filterDrinks = drinks.filter((drink) =>
    drink.name.toUpperCase().includes(inputValue.toUpperCase())
  );
  return (
    <HomeDiv>
      <div className="filter-container">
        <input
          className="search-bar"
          placeholder="Search..."
          type="text"
          value={inputValue}
          onChange={(e) => handleValue(e.target.value)}
        ></input>
        <select className="select-bar">
          <option>test</option>
        </select>
      </div>
      <div className="cards-container">
        {inputValue
          ? filterDrinks.map((drink) => {
              return <DrinkCard key={drink.id} drink={drink} />;
            })
          : drinks.map((drink) => {
              return <DrinkCard key={drink.id} drink={drink} />;
            })}
      </div>
    </HomeDiv>
  );
};

export default Home;
