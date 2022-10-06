import styled from "styled-components";

export const AboutDiv = styled.div`
  font-size: 24px;
  color: #00ecb9;
  min-height: calc(100vh - 50px);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;

  span {
    display: block;
    width: 100%;
    text-align: center;
    margin: 50px;
  }

  a {
    text-decoration: none;
    font-weight: bolder;
    color: red;
  }
`;
