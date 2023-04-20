import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
     <header > 
        <div className='logo'>
            <img  src='../images/logo.svg' alt='logo Kasa'></img>
        </div>
        <ul className='nav'>
            <NavLink to="/">
                <li>ACCUEIL</li>
            </NavLink>
            <NavLink to="/a-propos">
                <li>A PROPOS</li>
            </NavLink>
        </ul>
     </header>
    );
};

export default Header;