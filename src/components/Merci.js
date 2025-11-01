import React from "react";
import { Link } from "react-router-dom";

export default function Merci() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8 text-center">
        <h1 className="text-3xl font-bold mb-3">Merci pour votre message ✅</h1>
        <p className="text-gray-700">
          Votre demande a bien été envoyée. Nous vous répondrons au plus vite.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-4 py-2 rounded bg-[var(--button-color)] text-[var(--citation-color)] hover:bg-[#d3e0ea]"
        >
          Revenir à l’accueil
        </Link>
      </div>
    </section>
  );
}
