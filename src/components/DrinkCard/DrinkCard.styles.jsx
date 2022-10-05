import styled from "styled-components";
export const DrinkCardDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: center;
width: 150px;
background-color: #000000c7;
border-radius: 20px;
border: 2px solid #00ecb9;
color:#00ecb9;
margin: 20px;
padding: 20px;
img{
    height: 200px;
    background-color: ;
}

span{
    width: 100%;
    text-align: center;
    margin: 10px 0;
}

button{
    border:none;
    background: none;
    color: #00ecb9;
    border: 1px solid #00ecb9;
    padding: 10px;
    transition: 0.2s;
}
button:hover{
    border-radius: 10px;
    transform: scale(1.2);
    background-color: rgb(255,255,255,0.1);
}
`;