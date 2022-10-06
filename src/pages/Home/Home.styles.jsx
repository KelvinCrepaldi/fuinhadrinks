import styled from "styled-components";

export const HomeDiv = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  justify-content: center;

  font-size: 24px;
  color: #00ecb9;
  min-height: calc(100vh - 50px);

  h1 {
    width: 100%;
    text-align: center;
    font-size: 3rem;
    margin: 30px;
  }

  p {
    margin: 20px;
  }

  .home-content {
    display: flex;
    width: calc(90% - 50px);
  }

  .home-content img {
    width: 30%;
    height: fit-content;
    min-width: 350px;
  }

  .home-content p {
    width: fit-content;
  }

  .home-content-top {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }

  .home-content-bottom {
    width: calc(90% - 50px);
  }
`;
