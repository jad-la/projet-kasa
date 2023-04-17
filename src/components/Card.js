import React from 'react';

const Card = ({annonce}) => {
    return (
        <div className='carte'>
                <img src={annonce.cover} alt={annonce.titre} />
                <h2>{annonce.title}</h2>          
        </div>
    );
};

export default Card;