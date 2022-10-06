import styled from "styled-components";

export const DrinkPageDiv = styled.div`
  max-width: 800px;
  margin: 30px auto;
  min-height: calc(100vh - 50px);
  color: white;
  text-shadow: 0px 0px 2px white;

  //TOP CONTAINER ================================================
  .container-top {
    width: 100%;
    display: flex;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 20px;
  }
  .info h1 {
    font-size: 30px;
    color: #ff1111;
    text-shadow: 0px 0px 3px #ff0000;
    font-weight: 900;
    margin: 30px 0px 0px 0px;
    width: 90%;
    text-align: center;
    padding: 5px;

    border-bottom: 1px solid #ff0000;
  }

  .info span {
    padding: 10px 30px;
    text-align: center;
  }
  img {
    height: 400px;
    background-color: #ffffff13;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .tagline {
    margin-bottom: 30px;
    color: #ff1111;
    text-shadow: 0px 0px 3px #ff0000;
  }

  // BOTTOM CONTAINER ================================================
  .container-bottom {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }

  .more-info {
    width: 100%;
    font-size: 2rem;
    text-align: center;
    border-bottom: 1px solid #ffffff36;
    margin-bottom: 20px;
  }

  .list-info {
    width: 300px;
    margin-bottom: 30px;
  }

  .list-info li {
    border-bottom: 1px solid #ffffff36;
    padding: 3px;
  }
  .container-bottom p {
    margin-top: 30px;
  }

  .food-pairing {
    width: 100%;
  }

  .container-bottom span {
    display: block;
    font-size: 1.3rem;
    width: 100%;
    color: #fffb09;
  }
`;
