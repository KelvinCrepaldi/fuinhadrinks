import styled from "styled-components";
export const DrinkCardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  width: 150px;
  background-color: #000000c7;
  border-radius: 20px;
  border: 2px solid #00ecb9;
  color: #00ecb9;
  text-shadow: 0px 0px 4px #00ecb9;
  margin: 20px;
  padding: 20px;
  height: initial;

  img {
    height: 200px;
  }

  span {
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }

  button {
    font-weight: bolder;
    font-size: 1.5rem;
    border: none;
    background: none;
    color: #00aeff;
    padding: 10px;
    transition: 0.2s;
  }
  button:hover {
    color: #ff5fd7;
    border-radius: 10px;
    transform: translateY(-1px);
    text-shadow: 0 0 4px #ff5fd7;
  }
`;
