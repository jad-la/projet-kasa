import React from 'react';
import { FaStar} from 'react-icons/fa';

const RatingStars = ({ rating }) => {
    const stars = [];
  
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} className="starColor" />);
      } else {
        stars.push(<FaStar key={i} className="star" />);
      }
    }
  
    return <div className="rating-stars">{stars}</div>;
  };

export default RatingStars;