import { useParams, Navigate} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import Carrousel from '../components/Carrousel';
import RatingStars from '../components/RatingStars';

const FicheLogement = ({annonces}) => {
  const { id } = useParams();
  const annonceDetail = annonces.find(annonce => annonce.id === id);

  if (!annonceDetail) {
    return <Navigate to="/erreur" />;
  }
 

  return (
    <div>

      <Header />
        
      <main key={annonceDetail.id} className='mainFiche'>
        <Carrousel pictures={annonceDetail.pictures}/>

        <div className='entete'>

          <div className='title-location'>
            <h1>{annonceDetail.title}</h1>
            <p>{annonceDetail.location}</p>
            <ul className='tags'>
                {annonceDetail.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
            </ul>
          </div>

          <div className='host-ratings'>
              <div className='host'>
                  <p>{annonceDetail.host.name}</p>
                  <img className='imgHost' src={annonceDetail.host.picture} alt="host" />
              </div>
              <RatingStars rating={annonceDetail.rating}/>
          </div>
        
        </div>
        <div className='info-logement'>
          
          <Collapse label="Description">
            <p>{annonceDetail.description}</p>
          </Collapse>
          <Collapse  label="Equipements">
              <ul className='equi-ul'>
                {annonceDetail.equipments.map((equipement, index) => (
                  <li key={index}>{equipement}</li>
                ))}
              </ul>
          </Collapse>
        </div>
      </main> 

      <Footer/>
    </div>
  );
};

export default FicheLogement;

