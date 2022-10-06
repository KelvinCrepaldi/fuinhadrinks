import React from "react";
import { HeaderDiv } from "./Header.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderDiv>
      <span>
        <FontAwesomeIcon className="icon-title" icon={faMartiniGlass} />
        Fuinha Drinks
      </span>
      <nav>
        <ul>
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog"> Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/about"> About</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderDiv>
  );
};

export default Header;
