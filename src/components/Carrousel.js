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
    


    return (
        <div className='parent-carrousel'>
            <div className='flex-carrousel' style = {{transform: `translateX(-${indexCourant * 100}%)`}}>
            {pictures.map((picture, index) => (
          <img
            key={index}
            className={`img-Carrousel ${index === indexCourant ? 'active' : ''}`}
            src={picture}
            alt={`Annonce ${index}`}
          />
        ))}
            </div>

            <div className='prev-next'> 
                <IoIosArrowBack className='prev' onClick={gererClicPrecedent}/>
                <IoIosArrowForward className='next' onClick={gererClicSuivant}/>
            </div>
        </div>
    );
};

export default Carrousel;