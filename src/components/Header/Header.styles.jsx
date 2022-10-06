import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100vw;
  box-shadow: 1px 1px 4px #00ecb9;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.95) 20%,
    #000016b2 47%,
    rgba(0, 0, 0, 0.95) 80%
  );

  border-bottom: 1px solid #00ecb965;

  span {
    display: flex;
    align-items: center;
    font-size: 3rem;
    color: #00ecb9;
    text-shadow: 0 0 5px #00ecb9;
    margin: 10px;
  }

  .icon-title {
    font-size: 2.3rem;
    margin-right: 20px;
  }

  nav {
    width: 100%;
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    margin: 5px 20px;
    color: #ff5fd7;
    text-shadow: 0 0 4px #ff5fd7;
  }

  li {
    text-decoration: none;
    padding: 5px 5px 0px;
    font-size: 2rem;
    border-radius: 10px;
    transition: 0.3s;
  }

  li:hover {
    transform: translateY(-1px) scale(1.1);
  }
  a:hover {
    color: #ff0505;
    text-shadow: 0 0 4px #ff0505;
  }
`;
