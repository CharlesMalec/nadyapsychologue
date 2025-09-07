import React from 'react';

function Contact() {
  return (
    <section className="py-12 px-4 bg-[var(--secondary-color)] shadow-md">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-xl font-semibold">Coordonnées</h3>
            <p>Nadya Houdeir, Psychologue<br />103, boulevard Louis Schmidt (étage 1)<br />1040 Bruxelles<br />Tel: 0478/08.31.29<br />Email: <a href="mailto:nadya.houdeir@gmail.com" className="text-blue-600 hover:underline">nadya.houdeir@gmail.com</a></p>
            <h3 className="text-xl font-semibold mt-4">Localisation</h3>
            <div className="w-full h-64 bg-gray-300 rounded-lg" id="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.034019891884!2d4.401809477765459!3d50.83053377166713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4b35e3cfb91%3A0xcc0c9f9df432c8fd!2sBd%20Louis%20Schmidt%20103%2C%201040%20Etterbeek!5e0!3m2!1sfr!2sbe!4v1757254026064!5m2!1sfr!2sbe"
                title="Google Maps location"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Formulaire de contact</h3>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Nom" className="p-2 border rounded" />
              <input type="text" placeholder="Prénom" className="p-2 border rounded" />
              <input type="tel" placeholder="Téléphone" className="p-2 border rounded" />
              <input type="email" placeholder="Email" className="p-2 border rounded" />
              <button type="submit" className="bg-[var(--button-color)] text-[var(--citation-color)] py-2 rounded hover:bg-[#d3e0ea]">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;