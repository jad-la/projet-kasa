import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import annonces from '../data/annonces-logements.json'

const MainHome = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
      setData(annonces);
    }, [])
    return (
            <main className='main-accueil'>
                 {data.map((annonce) => (
                    <Card key={annonce.id} annonce={annonce} />
                 ))}
            </main>
    );
};

export default MainHome;