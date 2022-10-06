import styled from "styled-components";

export const CatalogDiv = styled.div`
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    min-height: calc(100vh - 50px);
  }

  .filter-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 20px;
  }
  .search-bar {
    width: 300px;
    height: 25px;
    margin-right: 20px;
    background-color: #000000c7;
    border-radius: 3px;
    border: 2px solid #00ecb9;
    color: #00ecb9;
    padding: 5px;
    font-size: 20px;
  }
  .select-bar {
    width: 200px;
    background-color: #000000c7;
    border-radius: 3px;
    border: 2px solid #00ecb9;
    color: #00ecb9;
  }
`;
