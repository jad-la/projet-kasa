// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import APropos from './pages/APropos';
import FicheLogement from './pages/FicheLogement';
import Erreur from './pages/Erreur';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/a-propos' element={<APropos/>}/>
      <Route path='/fiche-logement/:id' element={<FicheLogement/>}/>
      <Route path='*' element={<Erreur />}/>
     
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
