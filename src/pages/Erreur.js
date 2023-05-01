import React from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

const Erreur = () => {
    return (
        <div>
            <Header/>
            <main className='mainErreur'>
                <div className='erreur404'>
                    <p>404</p>
                </div>
                <p className='p-message'>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/">
                <p className='p-redirection'>Retourner sur la page d’accueil</p>
                </NavLink>
            </main>
            <Footer/>
        </div>
    );
};

export default Erreur;

