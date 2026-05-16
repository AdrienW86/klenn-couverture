export const metadata = {
  title: 'Conditions Générales d’Utilisation - Klenn Couverture',
  robots: 'noindex, follow', // On ne veut pas forcément que les CGU polluent le SEO principal
}

export default function ConditionsUtilisation() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 md:pt-40 pb-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-slate-100">
        
        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Conditions Générales d’Utilisation
          </h1>
          <p className="text-slate-500">Dernière mise à jour : 15 Mai 2026</p>
        </header>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          
          <section>
            <p>
              Bienvenue sur le site de <strong>Klenn Couverture</strong>. En accédant à ce site, vous acceptez sans réserve les présentes Conditions Générales d’Utilisation (CGU).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide text-blue-600">
              1. Objet
            </h2>
            <p>
              Les présentes CGU ont pour objet de définir les modalités d’accès et d’utilisation du site Klenn Couverture, vitrine de nos services de couverture, peinture et maçonnerie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide text-blue-600">
              2. Accès au site
            </h2>
            <p>
              L’accès au site est libre et gratuit. Bien que nous fassions notre possible pour maintenir une disponibilité constante, Klenn Couverture ne saurait être tenue responsable des interruptions ou dysfonctionnements liés à l'hébergement ou au réseau internet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide text-blue-600">
              3. Propriété intellectuelle
            </h2>
            <p>
              L'intégralité du contenu présent sur ce site (textes, photographies de chantiers, logos, icônes) est la propriété exclusive de Klenn Couverture. Toute reproduction, même partielle, est strictement interdite sans autorisation écrite préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide text-blue-600">
              4. Utilisation du site
            </h2>
            <p>
              L'utilisateur s'engage à utiliser le site de manière responsable et à ne pas perturber son fonctionnement (tentatives d'intrusion, envoi de spam via le formulaire de contact, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide text-blue-600">
              5. Données personnelles
            </h2>
            <p>
              Les informations collectées (nom, email via le formulaire de devis) sont traitées avec la plus grande confidentialité. Elles sont nécessaires à la gestion de votre demande. Conformément au RGPD, vous disposez d’un droit d’accès et de rectification. Pour en savoir plus, consultez notre <a href="/politique-confidentialite" className="text-blue-600 hover:underline">Politique de confidentialité</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide text-blue-600">
              6. Responsabilité
            </h2>
            <p>
              Les informations fournies sur le site le sont à titre indicatif. Klenn Couverture s'efforce de les maintenir à jour, mais ne peut être tenue responsable des conséquences d'une mauvaise interprétation des contenus.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide text-blue-600">
              7. Loi applicable
            </h2>
            <p>
              Les présentes CGU sont soumises au droit français. En cas de litige, et après tentative de résolution à l'amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <footer className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-sm">
              Pour toute question relative à ces conditions, contactez-nous : <br />
              <a href="mailto:contact@klenn-couverture.fr" className="text-blue-600 font-bold hover:underline">
                contact@klenn-couverture.fr
              </a>
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}