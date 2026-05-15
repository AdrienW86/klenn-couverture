import React from 'react'

export default function About() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Introduction */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <span className="w-12 h-1 bg-blue-600 rounded-full" />
          Qui sommes-nous ?
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
          Klenn Couverture, c’est avant tout une équipe de professionnels passionnés par leur métier,
          au service de vos projets de construction et de rénovation dans toute la Loire-Atlantique.
          Fondée sur des valeurs solides comme la rigueur, la transparence et le travail bien fait.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Bloc 1 */}
        <div className="bg-slate-50 p-8 rounded-3xl border-l-4 border-blue-600 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4 italic">Une entreprise de proximité</h3>
          <p className="text-slate-600 leading-relaxed">
            Chez Klenn Couverture, chaque projet est unique. Nous croyons à l'importance d'un accompagnement personnalisé,
            en étant à l’écoute de vos besoins spécifiques. Que vous soyez un particulier ou un professionnel,
            nous vous proposons des solutions durables.
          </p>
        </div>

        {/* Bloc 2 */}
        <div className="bg-slate-50 p-8 rounded-3xl border-l-4 border-blue-600 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4 italic">Un savoir-faire local</h3>
          <p className="text-slate-600 leading-relaxed">
            Notre équipe est composée d’artisans expérimentés et régulièrement formés aux nouvelles techniques
            et aux normes du bâtiment. Nous sélectionnons des matériaux fiables et durables pour garantir votre sérénité.
          </p>
        </div>
      </div>

      {/* Qualité / Engagement */}
      <div className="mt-16 bg-slate-900 text-white p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">La qualité avant tout</h3>
          <div className="space-y-4 text-slate-300 max-w-3xl text-lg">
            <p>
              De la première prise de contact à la réception des travaux, nous nous engageons à respecter les délais,
              à maintenir un chantier propre et à assurer votre satisfaction. 
            </p>
            <p className="font-semibold text-white bg-white/10 inline-block px-4 py-2 rounded-lg border border-white/20">
              🛡️ Toutes nos interventions sont couvertes par une garantie décennale.
            </p>
          </div>
        </div>
        {/* Décoration subtile en fond */}
        <div className="absolute top-[-10%] right-[-5%] text-[200px] opacity-5 pointer-events-none">🏠</div>
      </div>

      <p className="mt-12 text-center text-slate-500 italic font-medium">
        Klenn Couverture, votre partenaire de confiance en Loire-Atlantique.
      </p>
    </section>
  )
}