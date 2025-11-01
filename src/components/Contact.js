import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [sending, setSending] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Poster vers "/" pour éviter un POST direct sur /contact (404 SPA)
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      navigate("/merci"); // route React
    } catch (err) {
      console.error(err);
      alert("Échec d’envoi. Merci de réessayer.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="py-12 px-4 bg-[var(--secondary-color)] shadow-md">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Bloc coordonnées */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-xl font-semibold">Coordonnées</h3>
            <p>
              Nadya Houdeir, Psychologue - Psychothérapeute<br />
              63, rue du Bois des Rêves<br />
              1341 Céroux - Mousty<br />
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

          {/* Bloc formulaire Netlify */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Formulaire de contact</h3>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Champ caché pour Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Champ piège anti-bot */}
              <p className="hidden">
                <label>
                  Ne pas remplir ce champ : <input name="bot-field" />
                </label>
              </p>

              <input
                type="text"
                name="nom"
                placeholder="Nom"
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                className="p-2 border rounded"
              />
              <input
                type="tel"
                name="telephone"
                placeholder="Téléphone"
                className="p-2 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 border rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Votre message"
                rows="5"
                className="p-2 border rounded"
              ></textarea>

              <button
                type="submit"
                disabled={sending}
                className="bg-[var(--button-color)] text-[var(--citation-color)] py-2 rounded hover:bg-[#d3e0ea]"
              >
                {sending ? "Envoi..." : "Envoyer"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
