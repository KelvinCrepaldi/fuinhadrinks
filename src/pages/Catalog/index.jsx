import React from "react";
import { useContext, useState } from "react";
import { DrinkContext } from "../../Providers/Drinks";
import { CatalogDiv } from "./Catalog.styles";

import DrinkCard from "../../components/DrinkCard";

const Catalog = () => {
  const [inputValue, setInputValue] = useState("");
  const { drinks } = useContext(DrinkContext);

  const handleValue = (value) => {
    setInputValue(value);
  };

  const filterDrinks = drinks.filter((drink) =>
    drink.name.toUpperCase().includes(inputValue.toUpperCase())
  );
  return (
    <CatalogDiv>
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
    </CatalogDiv>
  );
};

export default Catalog;
