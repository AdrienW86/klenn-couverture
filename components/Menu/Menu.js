import React from 'react'

const steps = [
  {
    title: "Évaluation et diagnostic",
    content: "Tout commence par une visite technique gratuite. Nous analysons l’état de votre toiture et vous conseillons sur les meilleurs matériaux selon votre budget et l'esthétique de votre maison.",
    list: ["Tuiles terre cuite ou béton", "Ardoises naturelles", "Zinc et Bac acier", "Étanchéité toiture terrasse"]
  },
  {
    title: "Préparation et Sécurité",
    content: "La sécurité est notre priorité. Nous installons les échafaudages et sécurisons la zone d'intervention pour protéger aussi bien nos artisans que les occupants de la maison.",
  },
  {
    title: "Dépose de l’ancienne toiture",
    content: "En rénovation, nous retirons l’ancienne couverture avec soin. Nous en profitons pour vérifier l'état de la charpente avant de poser les nouveaux éléments.",
  },
  {
    title: "Pose de la nouvelle couverture",
    content: "Installation dans les règles de l'art : écran sous-toiture pour l'étanchéité à l'air et à l'eau, liteonnage précis, puis pose des matériaux de couverture avec un alignement parfait.",
  },
  {
    title: "Zinguerie et finitions",
    content: "C'est l'étape cruciale pour l'étanchéité : pose des gouttières, noues, abergements de cheminée et fenêtres de toit (Velux). Nous garantissons un toit 100% hermétique.",
  },
  {
    title: "Nettoyage et Garantie",
    content: "Après un nettoyage complet du chantier, nous effectuons une réception de travaux avec vous. C'est à ce moment que nous vous remettons votre certificat de garantie décennale.",
  }
];

export default function Menu() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight uppercase tracking-tight">
          L'expertise <span className="text-blue-600">Toiture</span> par Klenn Couverture
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Qu'il s'agisse d'une construction neuve ou d'une rénovation complète, nous mettons 
          notre rigueur et notre savoir-faire au service de la protection de votre habitat.
        </p>
      </div>

      {/* Timeline des étapes */}
      <div className="relative">
        {/* Ligne verticale de liaison (uniquement sur desktop) */}
        <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 z-0" />

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
              {/* Bulle de numéro */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                {index + 1}
              </div>

              {/* Contenu */}
              <div className="flex-grow bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide italic">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.content}
                </p>
                
                {step.list && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.list.map((item, i) => (
                      <span key={i} className="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Assurance / Qualité */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] shadow-2xl flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-blue-400">🛡️</span> Travail Garanti
          </h3>
          <p className="text-slate-400 leading-relaxed">
            Toutes nos couvertures sont couvertes par une <strong>garantie décennale</strong>. 
            Nous utilisons uniquement des matériaux certifiés NF pour assurer la longévité de votre toit face aux intempéries.
          </p>
        </div>

        <div className="bg-blue-600 text-white p-8 md:p-12 rounded-[40px] shadow-2xl flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-white">📅</span> Devis en 48h
          </h3>
          <p className="text-blue-100 leading-relaxed mb-6">
            Besoin d'une intervention rapide ou d'une estimation pour votre future maison ? 
            Nos diagnostics techniques sont gratuits et sans engagement.
          </p>
          <a href="/contact" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-center hover:bg-slate-100 transition-colors">
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  )
}