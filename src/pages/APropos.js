import React from 'react';
import Header from '../components/Header';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import Banner from '../components/Banner';



const Aboute = () => {
    return (
        <div>
           <Header/>
           <Banner imgSrc='/images/banner-apropos.png' afficherTitre={false}  page="apropos" alt='vue sur montagnes'/>
           <main className='page-a-propos'>
                <Collapse className="collapse-p firstCollapse" label="Fiabilité" >
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </Collapse>
                <Collapse className="collapse-p" label="Respect" >
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>
                <Collapse className="collapse-p" label="Service" >
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </Collapse>
                <Collapse className="collapse-p" label="Sécurité" >
                    <p className='lastP-apropos'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collapse>

           </main>
            <Footer/>
        </div>
    );
};

export default Aboute;

