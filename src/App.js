import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import APropos from './pages/APropos';
import FicheLogement from './pages/FicheLogement';
import Erreur from './pages/Erreur';
import annonces from './data/annonces-logements.json'


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home annonces={annonces}/>}/>
          <Route path='/a-propos' element={<APropos/>}/>
          <Route path='/fiche-logement/:id' element={<FicheLogement annonces={annonces}/>}/>
          <Route path='*' element={<Erreur />}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;

