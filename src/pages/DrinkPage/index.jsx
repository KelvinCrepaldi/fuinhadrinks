import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { DrinkPageDiv } from "./DrinkPage.styles";

const DrinkPage = () => {
  const [drink, setDrink] = useState([]);
  const { id } = useParams();
  const {
    name,
    image_url,
    tagline,
    first_brewed,
    description,
    abv,
    ibu,
    target_fg,
    target_og,
    ebc,
    srm,
    ph,
    attenuation_level,
    volume,
    boil_volume,
    method,
    ingredients,
    food_pairing,
    brewers_tips,
    contributed_by,
  } = drink;

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers/${id}`)
      .then((res) => {
        setDrink(...res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <DrinkPageDiv>
      <section className="content">
        <div className="container-top">
          <img src={image_url}></img>
          <div className="info">
            <h1>{name}</h1>
            <span className="tagline">{tagline}</span>
            <span>First brewed at {first_brewed}</span>
            <span>{description}</span>
          </div>
        </div>
        <div className="container-bottom">
          <h1 className="more-info">More info: </h1>
          <ul className="list-info">
            <li>abv: {abv}</li>
            <li>ibu: {ibu}</li>
            <li>target_fg: {target_fg}</li>
            <li>target_og: {target_og}</li>
            <li>ebc: {ebc}</li>
            <li>srm: {srm}</li>
            <li>ph: {ph}</li>
            <li>attenuation_level: {attenuation_level}</li>
            <li>ph: {ph}</li>
            {volume && (
              <li>
                volume: {volume?.value} {volume?.unit}
              </li>
            )}

            {boil_volume && (
              <li>
                boil volume: {boil_volume?.value} {boil_volume?.unit}
              </li>
            )}
          </ul>

          <ul className="food-pairing">
            <span>Food pairing:</span>
            {food_pairing?.map((e, key) => {
              return <li key={`idk_${key}`}>{e}, </li>;
            })}
          </ul>
          <p>
            <span className="food-pairing">Tips:</span> {brewers_tips}
          </p>
        </div>
      </section>
    </DrinkPageDiv>
  );
};

export default DrinkPage;
