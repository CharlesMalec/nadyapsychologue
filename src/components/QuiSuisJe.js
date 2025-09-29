import React from 'react';
import nadyaPhoto from '../images/nadya.jpg';

function QuiSuisJe() {
  return (
    <section className="py-12 px-4 bg-[var(--primary-color)] shadow-md">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Qui suis-je ?</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <img
              src={nadyaPhoto}
              alt="Nadya Houdeir"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <p><strong>Je m'appelle Nadya Houdeir</strong> et j’ai choisi la psychologie comme fil conducteur de ma vie professionnelle.</p>
            <p>
              Mon parcours a commencé dans un Centre Psycho-Médico-Social, où j’accompagnais des enfants et adolescents dans leur scolarité. C’est là que j’ai appris à écouter, à m’adapter et à chercher, avec eux et leurs familles, les meilleures façons d’avancer.
            </p>
            <p>
              J’ai ensuite travaillé à Bruxelles auprès de jeunes avec autisme, découvert la méthode TEACCH et l’importance du travail d’équipe. Une expérience qui m’a profondément marquée et qui m’a donné envie de continuer à explorer différentes approches.
            </p>
            <p>
              Curieuse et ouverte, je suis partie deux ans en Australie. Là-bas, j’ai accompagné des adultes vivant avec des déficiences mentales et physiques, dans des maisons protégées. Cette immersion m’a appris la patience, l’humilité et une nouvelle culture du soin.
            </p>
            <p>
              De retour en Belgique, j’ai poursuivi mon chemin dans l’enseignement spécialisé et dans divers centres résidentiels. Ces expériences m’ont permis de rencontrer des personnes très différentes, avec leurs forces, leurs fragilités et leurs histoires uniques.
            </p>
            <p>
              Aujourd’hui, je partage mon temps entre l’école, où j’enseigne et accompagne des adolescents, et mon cabinet de consultations, où je reçois enfants, ados et adultes. J’interviens aussi comme formatrice, notamment sur l’autisme et le double diagnostic.
            </p>
            <p>
              Je continue à me former régulièrement, que ce soit à travers des certificats universitaires, des séminaires ou des ateliers pratiques. C’est pour moi essentiel : chaque nouvelle rencontre me rappelle que l’on n’a jamais fini d’apprendre.
            </p>
            <p>
              Mon titre de psychologue est reconnu par la Commission des Psychologues (n° <strong>892223833</strong>), mais au-delà des diplômes, c’est surtout mon envie d’accompagner, de comprendre et de créer des liens qui guide ma pratique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuiSuisJe;
