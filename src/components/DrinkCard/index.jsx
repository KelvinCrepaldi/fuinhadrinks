import React from 'react';
import { DrinkCardDiv } from './DrinkCard.styles';

const DrinkCard = ({drink}) => {
    return (
        <DrinkCardDiv>
            <div className='img-background'>
                <img src={drink.image_url}></img>
            </div>
            <span>{drink.name}</span>
            <span>Value: $10.00</span>
            <button>COMPRAR</button>
        </DrinkCardDiv>
    );
};

export default DrinkCard;