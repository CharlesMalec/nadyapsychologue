import React from "react";  
import event1 from '../images/events/matiné_créative_21_11_25.jpg';

function Event() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Event image - full size */}
        <img
          src={event1}
          alt="Event Poster"
          className="w-full object-contain"
        />

        {/* Event details */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">Atelier Bien-Être</h2>
          <p className="text-gray-600">📅 Vendredi 12/11/25 de 10h à 13h</p>
          <p className="text-gray-600">📍 63, Rue du Bois des Rêves, 1341, Céroux - Mousty</p>
          <p className="text-gray-800">
            Venez partager un moment convivial autour de la créativité, des émotions et de la psychologie. 
            Cet atelier est ouvert à toutes et tous.
          </p>

          <a
            href="mailto:nadya.houdeir@gmail.com"
            className="inline-block mt-4 bg-[var(--button-color)] text-[var(--citation-color)] px-4 py-2 rounded hover:bg-[#d3e0ea]"
          >
            Plus d'infos
          </a>
        </div>
      </div>
    </section>
  );
}

export default Event;
