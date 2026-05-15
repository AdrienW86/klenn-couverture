import Map from '@/components/Map/Map'
import Form from '@/components/Form/Form'
import ConversionTracker from '@/components/ConversionTracker'

export const metadata = {
  title: 'Contactez Klenn Couverture - Couvreur à Nantes',
  description:
    "Besoin d’un devis ou d’un renseignement ? Contactez Klenn Couverture à Nantes. Réponse rapide et conseils personnalisés.",
}

export default function Contact() {
  return (
    // Change la ligne du <main> dans Contact.js
    <main className="min-h-screen bg-slate-50 pt-32 md:pt-40 pb-12">
      <ConversionTracker />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* TITRE DE LA PAGE */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight">
            Contactez <span className="text-blue-600">Klenn Couverture</span>
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Une urgence toiture ou un projet de rénovation ? Nous sommes à votre écoute pour vous conseiller et réaliser vos devis gratuitement.
          </p>
        </div>

        {/* SECTION CARTE ET INFOS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* CARTE (Prend 2 colonnes sur 3 sur desktop) */}
          <div className="lg:col-span-2 h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Map />
          </div>

          {/* INFOS DE CONTACT RAPIDES */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-blue-600">📍</span> Notre Zone
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Intervention rapide à <strong>Nantes</strong> et dans toute la <strong>Loire-Atlantique (44)</strong>.
              </p>
            </div>

            <div className="bg-blue-600 p-6 rounded-3xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📞</span> Appel Direct
              </h3>
              <a href="tel:0698144222" className="text-2xl font-bold hover:underline">
                06 98 14 42 22
              </a>
              <p className="text-blue-100 text-sm mt-2 font-medium italic">
                Lundi au Samedi — 8h00 / 19h00
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex-grow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-blue-600">🛡️</span> Engagement
              </h3>
              <ul className="text-slate-600 space-y-2 text-sm font-medium">
                <li>✅ Devis gratuit & sans engagement</li>
                <li>✅ Garantie décennale</li>
                <li>✅ Matériaux de haute qualité</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION FORMULAIRE */}
        <div className="mt-16">
          <Form />
        </div>
      </div>
    </main>
  )
}