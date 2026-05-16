export const metadata = {
  title: 'Politique de Confidentialité - Klenn Couverture',
  robots: 'noindex, follow',
}

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 md:pt-40 pb-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-slate-100">
        
        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-slate-500 italic">En vigueur au 15 Mai 2026</p>
        </header>

        <div className="space-y-10 text-slate-600 leading-relaxed">
          
          <section>
            <p className="text-lg">
              Chez <strong>Klenn Couverture</strong>, la protection de votre vie privée est une priorité. Cette politique vous informe sur la manière dont nous traitons les données personnelles que vous nous confiez lors de l'utilisation de notre site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">01.</span> Collecte des données
            </h2>
            <p className="mb-4">
              Nous collectons uniquement les informations strictement nécessaires pour traiter vos demandes de devis ou de renseignements. Cela inclut :
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                <span className="text-blue-500">✓</span> Nom et prénom
              </li>
              <li className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                <span className="text-blue-500">✓</span> Adresse email
              </li>
              <li className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                <span className="text-blue-500">✓</span> Numéro de téléphone
              </li>
              <li className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                <span className="text-blue-500">✓</span> Type de projet (sujet)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">02.</span> Utilisation et Finalité
            </h2>
            <p>
              Vos données sont exclusivement utilisées par Klenn Couverture pour :
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>L'établissement de vos devis personnalisés.</li>
              <li>La prise de contact pour organiser une visite de chantier.</li>
              <li>Le suivi administratif de votre dossier.</li>
            </ul>
            <p className="mt-4 font-medium text-slate-800 bg-blue-50 p-4 rounded-xl border border-blue-100">
              ⚠️ <strong>Important :</strong> Nous ne vendons, n'échangeons, ni ne transférons jamais vos données à des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">03.</span> Conservation et Sécurité
            </h2>
            <p>
              Nous conservons vos données pendant une durée de <strong>3 ans</strong> à compter de notre dernier échange. Pour protéger vos informations, notre site utilise un protocole de sécurisation <strong>HTTPS</strong> et nous limitons l'accès aux données aux seules personnes habilitées au sein de l'entreprise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">04.</span> Vos Droits (RGPD)
            </h2>
            <p className="mb-4">
              Conformément à la réglementation européenne, vous disposez d’un droit d’accès, de rectification, d'opposition et de suppression de vos données.
            </p>
            <div className="bg-slate-900 p-6 rounded-2xl text-white">
              <p className="text-sm mb-4">Pour exercer vos droits, contactez notre responsable de traitement :</p>
              <p className="font-bold">Klenn Pierreuse</p>
              <a href="mailto:contact@klenn-couverture.fr" className="text-blue-400 hover:text-blue-300 transition-colors underline break-all">
                contact@klenn-couverture.fr
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">05.</span> Cookies
            </h2>
            <p>
              Notre site n’utilise pas de cookies publicitaires. Seuls des cookies techniques essentiels au bon fonctionnement et à la sécurité du site peuvent être déposés sur votre terminal.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}