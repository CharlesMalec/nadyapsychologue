import React from 'react';

function PourquoiConsulter() {
  return (
    <section className="py-12 px-4 bg-[var(--primary-color)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Pourquoi consulter ?</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 space-y-4">
            <h3 className="text-xl font-semibold">Pour qui ?</h3>
            <p><strong>Public :</strong> Enfants/Adolescents/Adultes - En individuel ou Thérapie de couple</p>
            <p>Je consulte en français et en anglais le mercredi soir (17h-21h) et le samedi matin (8h-12h). Dans un cadre bienveillant, j'accompagne les adultes, les adolescents et les enfants qui sont en difficulté ou en souffrance.</p>
            <p>Je reçois en entretien individuel les adultes qui souhaiteraient de l'aide en cas de :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>rupture</li>
              <li>deuil</li>
              <li>stress, anxiété, angoisse</li>
              <li>faible estime de soi</li>
              <li>burn out, difficultés liées au travail</li>
              <li>trouble de l'alimentation</li>
              <li>difficultés relationnelles, émotionnelles, affectives, etc.</li>
            </ul>
            <p>J'accompagne également les enfants qui traversent des périodes difficiles en cas de :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>deuil</li>
              <li>divorce des parents</li>
              <li>phobie scolaire, décrochage scolaire, troubles de l'apprentissage</li>
              <li>harcèlement</li>
              <li>TSA (J'ai suivi plusieurs formations dans ce domaine : Méthode SESAME, ABA et communication expressive, PECS, TEACCH et ABA Fonctionnel)</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Un lieu pour dire et ressentir</h3>
            <p>Grâce à une approche intégrative, je vous offre un espace d'écoute pour vous raconter, vous ressentir et vous retrouver. Il s'agit d'un espace intermédiaire dans lequel nous travaillons ensemble afin de récupérer un équilibre qui vous convient.</p>
            <blockquote className="mt-4 italic text-gray-600">
              "Les histoires soignent (...) elles ne demandent rien sauf d'être écoutées. Elles contiennent les remèdes pour régénérer les pulsions psychiques perdues" <br />— Clarissa Pinkola Estés
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PourquoiConsulter;