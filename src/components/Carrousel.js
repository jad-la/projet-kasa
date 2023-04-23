import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const Carrousel = ({pictures}) => {
    
    const [indexCourant, setIndexCourant] = useState(0);

    const gererClicPrecedent = () => {
        setIndexCourant(indexCourant === 0 ? pictures.length - 1 : indexCourant - 1);
        
      };
    const gererClicSuivant = () => {
        setIndexCourant(indexCourant === pictures.length - 1 ? 0 : indexCourant + 1);
      };
    
    const numerotation = `${indexCourant + 1}/${pictures.length}`;

    return (
        <div className='parent-carrousel'>

            {pictures.map((picture, index) => (
              <img
              key={index}
              className={`img-Carrousel ${index === indexCourant ? 'prev-next' : 'image-hidden'}`}
              src={picture}
              alt={`Annonce ${index}`}
              />
            ))}
            {pictures.length > 1 && (
              <>
                <IoIosArrowBack className='prev prev-next' onClick={gererClicPrecedent}/>
                <IoIosArrowForward className='next prev-next' onClick={gererClicSuivant}/>
              </>
            )}
            {pictures.length > 1 && <div className='numerotation'>{numerotation}</div>}
           
        </div>
    );
};

export default Carrousel;