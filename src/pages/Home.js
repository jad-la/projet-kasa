import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import MainHome from '../components/MainHome';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div className='page-accueil'>  
            <Header/> 
            <Banner imgSrc='./images/IMG-bannière.png' afficherTitre={true} page="accueil"/>
            <MainHome/>
            <Footer/> 
        </div>
      
    );
};

export default Home;