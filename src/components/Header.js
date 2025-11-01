import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo_solo.png';

function Header() {
  const [open, setOpen] = React.useState(false);

  const linkBase =
    "block px-3 py-2 rounded-md text-base md:text-sm transition hover:text-[var(--accent-color)]";
  const linkClass = ({ isActive }) =>
    isActive
      ? `${linkBase} text-[var(--accent-color)] font-semibold`
      : `${linkBase} text-[var(--text-color)]`;

  return (
    <header className="bg-[var(--secondary-color)] text-[var(--text-color)] shadow-sm">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Ligne supérieure: logo + titre + burger */}
        <div className="flex items-center justify-between py-3 md:py-6">
          <div className="flex items-center min-w-0">
            <img
              src={logo}
              alt="Help & Care"
              className="h-8 w-auto mr-3 md:h-12 md:mr-4 shrink-0"
              draggable="false"
            />
            <h1 className="text-xl md:text-3xl font-serif font-medium truncate">
              Help & Care
            </h1>
          </div>

          {/* Bouton burger (mobile) */}
          <button
            type="button"
            className="inline-flex items-center justify-center md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)]"
            aria-controls="primary-nav"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <svg
              className={`h-6 w-6 ${open ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg
              className={`h-6 w-6 ${open ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          {/* Nav desktop */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li><NavLink to="/" className={linkClass}>Accueil</NavLink></li>
              <li><NavLink to="/qui-suis-je" className={linkClass}>Qui suis-je ?</NavLink></li>
              <li><NavLink to="/event" className={linkClass}>Événements</NavLink></li>
              <li><NavLink to="/pourquoi-consulter" className={linkClass}>Pourquoi consulter ?</NavLink></li>
              <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>

        {/* Nav mobile (drawer simple en-dessous) */}
        <nav
          id="primary-nav"
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}
        >
          <ul className="flex flex-col gap-1 pb-3">
            <li><NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Accueil</NavLink></li>
            <li><NavLink to="/qui-suis-je" className={linkClass} onClick={() => setOpen(false)}>Qui suis-je ?</NavLink></li>
            <li><NavLink to="/event" className={linkClass} onClick={() => setOpen(false)}>Événements</NavLink></li>
            <li><NavLink to="/pourquoi-consulter" className={linkClass} onClick={() => setOpen(false)}>Pourquoi consulter ?</NavLink></li>
            <li><NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
