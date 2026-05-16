export const metadata = {
  title: 'Mentions Légales - Klenn Couverture Nantes',
  description: 'Informations légales de l’entreprise Klenn Couverture, couvreur à Bouguenais et Nantes.',
  robots: 'noindex, follow',
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 md:pt-40 pb-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-slate-100">
        
        <header className="mb-12 border-b border-slate-100 pb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Mentions Légales
          </h1>
          <p className="text-slate-500 font-medium italic">Conformément à la loi n° 2004-575 du 21 juin 2004 (LCEN)</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* ÉDITEUR DU SITE */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="text-blue-600">🏠</span> Éditeur du site
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-slate-600 leading-relaxed shadow-sm">
              <p className="font-bold text-slate-900 text-lg">Klenn Couverture</p>
              <p>Entreprise Individuelle</p>
              <p className="mt-2">19 rue Johannes Gutenberg</p>
              <p>44340 Bouguenais</p>
              <div className="mt-4 pt-4 border-t border-slate-200 text-sm">
                <p><strong>SIRET :</strong> 798 282 695 00047</p>
                <p><strong>TVA :</strong> FR81981560386</p>
                <p className="mt-2"><strong>Directeur :</strong> Klenn Pierreuse</p>
              </div>
            </div>
          </section>

          {/* HÉBERGEMENT & CONTACT */}
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-blue-600">🌐</span> Hébergement
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-slate-600 text-sm">
                <p className="font-bold text-slate-900">Codev</p>
                <p>42 avenue Emile Roudayre</p>
                <p>Perpignan</p>
                <p className="mt-2 text-blue-600">06.66.67.27.09</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-blue-600">✉️</span> Contact
              </h2>
              <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-blue-200">
                <p className="text-sm opacity-90 mb-1">Email professionnel :</p>
                <a href="mailto:klenn-couverture.fr" className="font-bold hover:underline break-all">
                  contact@klenn-couverture.fr
                </a>
                <p className="text-sm opacity-90 mt-4 mb-1">Téléphone :</p>
                <a href="tel:0698144222" className="text-xl font-bold hover:underline">
                  06 98 14 42 22
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* TEXTES LÉGAUX BAS DE PAGE */}
        <div className="mt-16 space-y-8 pt-8 border-t border-slate-100 text-slate-600 text-sm md:text-base leading-relaxed">
          <section>
            <h3 className="font-bold text-slate-900 mb-2">Propriété intellectuelle</h3>
            <p>
              L’ensemble du contenu présent sur ce site (textes, photographies, logos) est la propriété exclusive de <strong>Klenn Couverture</strong>. Toute reproduction ou utilisation sans autorisation préalable constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-2">Responsabilité</h3>
            <p>
              Klenn Couverture met tout en œuvre pour diffuser des informations exactes. Toutefois, l'entreprise ne saurait être tenue responsable d'éventuelles erreurs ou de l'indisponibilité temporaire du site.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}