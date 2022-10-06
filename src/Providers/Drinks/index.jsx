import { useState, createContext } from "react";
import { useEffect } from "react";
import axios from "axios";

export const DrinkContext = createContext();

export const DrinkProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => {
        setDrinks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <DrinkContext.Provider value={{ drinks }}>{children}</DrinkContext.Provider>
  );
};
