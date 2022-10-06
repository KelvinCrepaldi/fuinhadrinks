import React from "react";
import { AboutDiv } from "./About.styles";

const About = () => {
  return (
    <AboutDiv>
      <span>
        This page is created with{" "}
        <a
          href="https://punkapi.com/documentation/v2"
          target="_blank"
          rel="noreferrer"
        >
          PUNK API V2
        </a>
        , an API for list fictional drinks.
      </span>
      <span>
        visit my{" "}
        <a
          href="https://kelvincrepaldi.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          page
        </a>{" "}
        for more.
      </span>
    </AboutDiv>
  );
};

export default About;
