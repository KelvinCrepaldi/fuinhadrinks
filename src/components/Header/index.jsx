import React from "react";
import { HeaderDiv } from "./Header.styles";

const Header = () => {
  return (
    <HeaderDiv>
      <span>Fuinha Drinks</span>
      <nav>
        <ul>
          <a href="/">
            <li>MENU</li>
          </a>
          <a href="/cart">
            <li>CART</li>
          </a>
        </ul>
      </nav>
    </HeaderDiv>
  );
};

export default Header;
