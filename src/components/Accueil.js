import React from 'react';
import citationImage from '../images/citation.jpg';

function Accueil() {
  return (
    <section className="py-12 px-4 bg-[var(--primary-color)] text-center relative" style={{ backgroundImage: `url(${citationImage})`, backgroundSize: 'cover', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-[var(--citation-color)]">
        <blockquote className="text-2xl italic mb-4">
          "Lorsque nous mettons des mots sur les maux, les dits maux deviennent des mots dits et cessent d'être maudits"
        </blockquote>
        <p className="text-lg">— Guy Corneau</p>
      </div>
    </section>
  );
}

export default Accueil;