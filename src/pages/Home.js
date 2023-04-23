import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Card from '../components/Card';


const Home = ({ annonces }) => {
    return (
        <div className='page-accueil'>  
            <Header/> 
            <Banner imgSrc='./images/IMG-bannière.png' afficherTitre={true} page="accueil"/>
            <main className='main-accueil'>
                 
                    <Card  annonces={annonces} />
                
            </main>
            <Footer/> 
        </div>
      
    );
};

export default Home;