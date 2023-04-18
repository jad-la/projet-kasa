import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import annonces from '../data/annonces-logements.json';
import Erreur from '../pages/Erreur';

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
      <h2>{annonce.title}</h2>
      <img src={annonce.cover} alt="logement" />
      <p>{annonce.description}</p>
      <p>{annonce.host.name}</p>
      <p>{annonce.rating}</p>
      {annonce.pictures.map((picture, index) => (
        <img key={index} src={picture} alt="logement" />
      ))}
      {annonce.tags.map((tag, index) => (
        <p key={index}>{tag}</p>
      ))}
    </div>
  );
};

export default FicheLogement;