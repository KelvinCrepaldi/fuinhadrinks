import React from 'react';
import { HeaderDiv } from './Header.styles';

const Header = () => {
    return (
        <HeaderDiv>
            <span>Fuinha Drinks</span>
            <nav>
                <ul>
                    <a href="/">
                        <li>Menu</li>
                    </a>
                    <a href="/cart">
                        <li>Cart</li>
                    </a>
                </ul>
            </nav>
        </HeaderDiv>
    );
};

export default Header;