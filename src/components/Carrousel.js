import React, { useState } from 'react';

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
              className={` ${index === indexCourant ? 'img-Carrousel' : 'image-hidden'}`}
              src={picture}
              alt={`Annonce ${index}`}
              />
            ))}
            {pictures.length > 1 && (
              <>
                <img src='/images/chevron-left.png' alt='flèche précédent' className='prev prev-next' onClick={gererClicPrecedent}/>
                <img src='/images/chevron-right.png' alt='flèche suivant' className='next prev-next' onClick={gererClicSuivant}/>
                {/* <IoIosArrowBack className='prev prev-next' onClick={gererClicPrecedent}/> */}
                {/* <IoIosArrowForward className='next prev-next' onClick={gererClicSuivant}/> */}
              </>
            )}
            {pictures.length > 1 && <div className='numerotation'>{numerotation}</div>}
           
        </div>
    );
};

export default Carrousel;