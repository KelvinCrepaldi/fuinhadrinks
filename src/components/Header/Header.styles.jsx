import styled from "styled-components";

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    height: 80px;
    background-color: #9683af;

    span{
        font-size: 3rem;
        margin: 10px;
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
    }
    li:hover{
        background-color: rgb(255,255,255,0.2);
        transition: 0.3s;
        transform: scale(1.1);
    }
`;
