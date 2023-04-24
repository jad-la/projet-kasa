import React from 'react';


const Banner = ({ imgSrc, afficherTitre, page, alt }) => {
    const classes = `banniere ${page}-banner`;

    return (
        <div className={classes}>
            <img src={imgSrc} alt={alt}></img>
            {afficherTitre && <h1>Chez vous, partout et ailleurs</h1>}
        </div>
    );
};

export default Banner;