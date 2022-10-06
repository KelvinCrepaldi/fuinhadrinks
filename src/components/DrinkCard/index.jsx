import React from 'react';
import { DrinkCardDiv } from './DrinkCard.styles';

const DrinkCard = ({drink}) => {
    return (
        <DrinkCardDiv>
            <img src={drink.image_url}></img>
            <span>{drink.name}</span>
            <span>Value: $10.00</span>
            <button>Comprar</button>
        </DrinkCardDiv>
    );
};

export default DrinkCard;