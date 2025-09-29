import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo_solo.png';

function Header() {
  return (
    <header className="bg-[var(--secondary-color)] text-[var(--text-color)] py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Help & Care Logo" className="h-12 mr-4" />
          <h1 className="text-3xl font-serif font-medium">Help & Care</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><NavLink to="/" className="hover:text-[var(--accent-color)]">Accueil</NavLink></li>
            <li><NavLink to="/qui-suis-je" className="hover:text-[var(--accent-color)]">Qui suis-je ?</NavLink></li>
            <li><NavLink to="/event" className="hover:text-[var(--accent-color)]">Événements</NavLink></li>
            <li><NavLink to="/pourquoi-consulter" className="hover:text-[var(--accent-color)]">Pourquoi consulter ?</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-[var(--accent-color)]">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;