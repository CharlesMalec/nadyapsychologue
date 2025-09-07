import React from 'react';
import nadyaPhoto from '../images/nadya.jpg';

function QuiSuisJe() {
  return (
    <section className="py-12 px-4 bg-[var(--primary-color)] shadow-md">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Qui suis-je ?</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 ">
            <img src={nadyaPhoto} alt="Nadya Houdeir" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <p><strong>Je m'appelle Nadya Houdeir.</strong></p>
            <p>Je témoigne d'une expérience professionnelle variée qui m'a permis d'étoffer et d'enrichir mes connaissances. J’ai débuté ma carrière en tant qu’auxiliaire psychopédagogique au sein d'un Centre Psycho-Médico-Social, accompagnant des enfants et des adolescents durant leurs parcours scolaires. Cette expérience m’a appris à adapter mes interventions selon les besoins et la gravité des situations, tout en développant une écoute attentive lors d’entretiens avec élèves et parents.</p>
            <p>J'ai également passé deux ans en Australie, occupant un poste de travailleuse sociale (Disability and Development Support Officer) dans des maisons protégées accueillant des adultes avec déficiences mentales et/ou physiques.</p>
            <p>Ensuite, je me suis orientée vers l’enseignement spécialisé (personnes présentant un retard mental modéré à sévère). Aujourd'hui, je partage mon temps entre le milieu scolaire et mon cabinet Upsylon.</p>
            <p>Je suis enregistrée auprès de la Commission des Psychologues sous le numéro <strong>892223833</strong>, garantissant mon titre de psychologue reconnu par la loi belge.</p>
            <p>Engagée dans une formation continue, je participe à des séminaires, journées d’étude et conférences pour approfondir mes compétences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuiSuisJe;