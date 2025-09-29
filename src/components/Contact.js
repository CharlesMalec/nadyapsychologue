import React from 'react';

function Contact() {
  return (
    <section className="py-12 px-4 bg-[var(--secondary-color)] shadow-md">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-xl font-semibold">Coordonnées</h3>
            <p>
              Nadya Houdeir, Psychologue<br />
              63, rue du Bois des Rêves<br />
              1341 Céroux - Mousry<br />
              Tel: 0478/08.31.29<br />
              Email:{" "}
              <a
                href="mailto:nadya.houdeir@gmail.com"
                className="text-blue-600 hover:underline"
              >
                nadya.houdeir@gmail.com
              </a>
            </p>

            <h3 className="text-xl font-semibold mt-4">Localisation</h3>
            <div className="w-full h-64 bg-gray-300 rounded-lg" id="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2066.4944335605674!2d4.5846809126371!3d50.65497987210484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17e19baac6b1b%3A0xc1a4c1fc4fd87847!2sRue%20du%20Bois%20des%20R%C3%AAves%2063%2C%201341%20Ottignies-Louvain-la-Neuve%2C%20Belgium!5e0!3m2!1sen!2sfr!4v1759149857225!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of the cabinet"
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
              <button
                type="submit"
                className="bg-[var(--button-color)] text-[var(--citation-color)] py-2 rounded hover:bg-[#d3e0ea]"
              >
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
