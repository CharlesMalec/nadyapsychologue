import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import Accueil from './components/Accueil';
import QuiSuisJe from './components/QuiSuisJe';
import Event from './components/Event';
import PourquoiConsulter from './components/PourquoiConsulter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <TopBanner />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/qui-suis-je" element={<QuiSuisJe />} />
          <Route path="/event" element={<Event />} />
          <Route path="/pourquoi-consulter" element={<PourquoiConsulter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/merci" element={<Merci />} />
          <Route path="*" element={<Accueil />} />        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;