import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ annonce }) => {
   

  return (
        <Link to={`/fiche-logement/${annonce.id}`} className='lienCard'>
            <div className='carte' >
                <img src={annonce.cover} alt={annonce.titre} />
                <h2>{annonce.title}</h2>
            </div>
        </Link>
  );
};

export default Card;