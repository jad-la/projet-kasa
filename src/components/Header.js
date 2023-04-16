import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
     <header > 
        <div className='logo'>
            <img  src='./images/logo.svg' alt='logo Kasa'></img>
        </div>
        <ul className='nav'>
            <NavLink to="/">
                <li>Accueil</li>
            </NavLink>
            <NavLink to="/a-propos">
                <li>A propos</li>
            </NavLink>
        </ul>
     </header>
    );
};

export default Header;