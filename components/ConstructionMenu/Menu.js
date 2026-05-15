import React from 'react'

const steps = [
  {
    title: "Évaluation et étude du projet",
    content: "Tout commence par une visite sur site. Nous échangeons sur vos besoins (murs, fondations, murets, ouvertures, dalles, reprises de fissures, etc.), puis réalisons un diagnostic technique précis. Vous recevez ensuite un devis clair et détaillé."
  },
  {
    title: "Préparation du chantier",
    content: "Avant le début des travaux, nous sécurisons le chantier et installons le matériel nécessaire. Si besoin, nous effectuons les travaux préparatoires comme le terrassement, la démolition ou le coffrage."
  },
  {
    title: "Réalisation des travaux",
    content: "Nos maçons interviennent selon les normes en vigueur : création de murs porteurs, pose de parpaings/pierres, coulage de dalles et réalisation de fondations. Chaque étape assure la stabilité de l’ouvrage.",
    list: ["Murs porteurs et ouvertures", "Pose de parpaings, briques, pierres", "Coulage de dalles et chapes", "Fondations et escaliers"]
  },
  {
    title: "Finitions et étanchéité",
    content: "Nous apportons une attention particulière aux finitions : rejointoiement, lissage, enduits et produits d’étanchéité adaptés. Notre objectif : un résultat propre et esthétique."
  },
  {
    title: "Nettoyage et réception",
    content: "Une fois achevé, nous procédons au nettoyage complet des lieux. La réception du chantier se fait avec vous pour valider notre contrôle qualité rigoureux."
  }
];

export default function Menu() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Introduction */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Le déroulement de vos travaux de <span className="text-blue-600">maçonnerie</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Chez Klenn Couverture, nous réalisons tous vos travaux de maçonnerie avec sérieux et précision. 
          De la fondation aux finitions, notre équipe garantit la solidité de votre patrimoine en Loire-Atlantique.
        </p>
      </div>

      {/* Timeline des étapes */}
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
            {/* Chiffre / Indicateur */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-200">
              {index + 1}
            </div>

            {/* Contenu de l'étape */}
            <div className="flex-grow bg-slate-50 p-8 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl group-hover:border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{step.content}</p>
              
              {step.list && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {step.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <span className="text-blue-500 text-lg">▪</span> {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Final */}
      <div className="mt-20 bg-slate-900 rounded-[40px] p-8 md:p-12 text-center text-white relative overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à lancer votre projet ?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Contactez Klenn Couverture pour un devis gratuit et personnalisé pour vos travaux de maçonnerie.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 shadow-xl"
        >
          Demander mon devis maçonnerie
        </a>
        {/* Décoration iconique */}
        <div className="absolute top-0 right-0 opacity-10 text-9xl -mr-10 -mt-10 select-none">🏗️</div>
      </div>
    </section>
  )
}