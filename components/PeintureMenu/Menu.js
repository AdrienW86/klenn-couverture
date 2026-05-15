import React from 'react'

const steps = [
  {
    title: "Visite et conseil personnalisé",
    content: "Tout débute par un rendez-vous sur place. Nous étudions l’état de vos surfaces, vous conseillons sur les teintes et les finitions (mat, velours, satin) ainsi que sur les types de peinture adaptés (anti-humidité, façade, etc.).",
  },
  {
    title: "Préparation des surfaces",
    content: "Une peinture durable dépend d'une préparation impeccable. Nous protégeons vos sols et meubles, nettoyons les supports, réparons les fissures et appliquons une sous-couche pour une accroche parfaite.",
    list: ["Protection des zones non concernées", "Nettoyage et décapage", "Ponçage et enduisage", "Application d'une sous-couche"]
  },
  {
    title: "Application de la peinture",
    content: "Nous appliquons la peinture en deux couches minimum. Murs intérieurs, plafonds ou façades extérieures : chaque geste est précis pour garantir une opacité totale et un rendu uniforme.",
  },
  {
    title: "Finitions et retouches",
    content: "Le diable est dans les détails. Nous soignons les angles, les raccords de couleurs et les plinthes. Nous effectuons un contrôle rigoureux pour qu'aucune trace de rouleau ou de pinceau ne soit visible.",
  },
  {
    title: "Nettoyage et livraison",
    content: "Le chantier n'est fini que lorsqu'il est propre. Nous retirons toutes les protections et nettoyons la zone. Nous validons ensemble le résultat final pour garantir votre satisfaction.",
  }
];

export default function Menu() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Header de section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Votre projet de <span className="text-blue-600">peinture</span> étape par étape
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Que ce soit pour sublimer votre intérieur ou rénover une façade, Klenn Couverture 
          réalise vos travaux avec soin, méthode et professionnalisme dans toute la Loire-Atlantique.
        </p>
      </div>

      {/* Liste des étapes */}
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
            {/* Numéro flottant */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-200">
              {index + 1}
            </div>

            {/* Carte descriptive */}
            <div className="flex-grow bg-slate-50 p-8 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl group-hover:border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{step.content}</p>
              
              {step.list && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {step.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <span className="text-blue-500 text-lg">✓</span> {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-slate-900 rounded-[40px] p-8 md:p-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Redonnez vie à vos murs</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto font-medium">
            Peinture intérieure, extérieure ou ravalement de façade : demandez votre devis gratuit dès aujourd'hui.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 shadow-xl"
          >
            Estimer mes travaux de peinture
          </a>
        </div>
        {/* Décoration pinceau */}
        <div className="absolute top-0 right-0 opacity-10 text-9xl -mr-8 -mt-8 rotate-12 select-none">🎨</div>
      </div>

      <p className="mt-12 text-center text-slate-400 italic">
        Klenn Couverture : l’assurance d’une peinture durable, esthétique et adaptée à votre environnement.
      </p>
    </section>
  )
}