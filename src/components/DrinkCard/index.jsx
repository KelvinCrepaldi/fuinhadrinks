import React from 'react';
import { DrinkCardDiv } from './DrinkCard.styles';

const DrinkCard = ({drink}) => {
    const banana = 0;
    
    return (
        <DrinkCardDiv>
            <img src={drink.image_url}></img>
            <span>{drink.name}</span>
            <button>View</button>
        </DrinkCardDiv>
    );
};

export default DrinkCard;