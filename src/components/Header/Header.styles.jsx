import styled from "styled-components";

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    width: 100vw;
    height: 100px;
    background-color: #000000f4;

    span{
        font-size: 3rem;
        margin: 10px;
        color: #00ecb9;
        text-shadow: 0 0 5px #00ecb9;
        margin-left: 30px;
    }

    ul{
        display: flex;
        margin-right: 40px;
        list-style: none;
    }

    a{
        text-decoration: none;
        cursor: pointer;
        margin: 5px;
        color: rgb(255,255,255,0.8)
    }

    li{
        text-decoration: none;
        padding: 10px;
        font-size: 2rem;
        border-radius: 10px;
        transition: 0.3s;
    }
    
    li:hover{
        color: #ff5fd7;
        border-radius: 10px;
        transform: translateY(-1px) scale(1.1);
        text-shadow: 0 0 4px #ff5fd7;
    }
`;
