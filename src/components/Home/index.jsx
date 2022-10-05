import React from 'react';
import { useContext } from 'react';
import { DrinkContext } from '../../Providers/Drinks';
import { HomeDiv } from './Home.styles';

import DrinkCard from '../DrinkCard';

const Home = () => {

    const {drinks} = useContext(DrinkContext);
    return (
        <HomeDiv>
            {drinks?.map((drink)=>{
                return <DrinkCard key={drink.id} drink={drink}/>
            })}
        </HomeDiv>
    );
};

export default Home;