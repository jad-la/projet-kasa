import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import annonces from '../data/annonces-logements.json';
import Erreur from '../pages/Erreur';
import Collapse from '../components/Collapse';
import Carrousel from '../components/Carrousel';
import RatingStars from '../components/RatingStars';

const FicheLogement = () => {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState(null);

  useEffect(() => {
    const annonceDetail = annonces.find((annonce) => annonce.id === id);
    setAnnonce(annonceDetail);
  }, [id]);

  if (!annonce) {
    return <Erreur />;
  }

  return (
    <div>
      <Header />
      <Carrousel pictures={annonce.pictures}/>
        
      
      
      <main className='mainFiche'>
        <div className='entete'>
          <div className='title-location'>
            <h2>{annonce.title}</h2>
            <p>{annonce.location}</p>
          </div>
          <div className='host'>
            <p>{annonce.host.name}</p>
            <img className='imgHost' src={annonce.host.picture} alt="host" />
          </div>
        </div>
        <div className='tags-ratings'>
            <ul className='tags'>
                {annonce.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
            </ul>
            <div>
              <RatingStars rating={annonce.rating}/>
            </div>
        </div>
        <div className='info-logement'>
          
          <Collapse label="Description">
            <p>{annonce.description}</p>
          </Collapse>
          <Collapse  label="Equipements">
              <ul className='equi-ul'>
                {annonce.equipments.map((equipement, index) => (
                  <li key={index}>{equipement}</li>
                ))}
              </ul>
          </Collapse>
        </div>
      </main> 
      <Footer/>
    </div>
  );
};

export default FicheLogement;