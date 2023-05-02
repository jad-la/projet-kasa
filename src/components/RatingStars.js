import React from 'react';


const RatingStars = ({ rating }) => {
    const stars = [];
  
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img src='/images/étoile-coloré.png' alt='étoile colorée' className="starColor"/>);
      } else {
        stars.push(<img src='/images/étoile-grise.png' alt='étoile grise' className="star"/>);
      }
    }
  
    return <div className="rating-stars">{stars}</div>;
  };

export default RatingStars;