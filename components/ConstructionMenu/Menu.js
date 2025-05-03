import React from 'react'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Le déroulement de vos travaux de maçonnerie avec Klenn Couverture
      </h1>
      <p className={styles.p}>
        Chez Klenn Couverture, nous réalisons tous vos travaux de maçonnerie avec sérieux,
        précision et savoir-faire. Que ce soit pour une construction, une rénovation ou une réparation,
        notre équipe vous accompagne à chaque étape afin de garantir la solidité et la durabilité de votre projet
        en Loire-Atlantique.
      </p>

      <h2 className={styles.h2}>1. Évaluation et étude du projet</h2>
      <p className={styles.p}>
        Tout commence par une visite sur site. Nous échangeons avec vous sur vos besoins
        (murs, fondations, murets, ouvertures, dalles, reprises de fissures, etc.),
        puis réalisons un diagnostic technique précis. Vous recevez ensuite un devis clair,
        adapté à vos attentes et à votre budget.
      </p>

      <h2 className={styles.h2}>2. Préparation du chantier</h2>
      <p className={styles.p}>
        Avant le début des travaux, nous sécurisons le chantier et installons le matériel nécessaire.
        Si besoin, nous effectuons les travaux préparatoires comme le terrassement, la démolition ou le coffrage.
      </p>

      <h2 className={styles.h2}>3. Réalisation des travaux de maçonnerie</h2>
      <ul className={styles.ul}>Nos maçons interviennent selon les normes en vigueur :</ul>
      <li className={styles.li}>Création ou modification de murs porteurs ou non-porteurs</li>
      <li className={styles.li}>Pose de parpaings, briques, pierres ou béton cellulaire</li>
      <li className={styles.li}>Coulage de dalles ou de chapes</li>
      <li className={styles.li}>Réalisation de fondations, escaliers, seuils, etc.</li>
      <p className={styles.p}>
        Chaque étape est réalisée avec soin pour assurer la stabilité et la longévité de l’ouvrage.
      </p>

      <h2 className={styles.h2}>4. Finitions et étanchéité</h2>
      <p className={styles.p}>
        Nous apportons une attention particulière aux finitions : rejointoiement, lissage,
        enduits et produits d’étanchéité adaptés à votre projet. Notre objectif : un résultat
        propre, esthétique et durable.
      </p>

      <h2 className={styles.h2}>5. Nettoyage et réception du chantier</h2>
      <p className={styles.p}>
        Une fois les travaux achevés, nous procédons à un nettoyage complet et à la remise en état des lieux.
        La réception du chantier se fait en votre présence, avec un contrôle qualité rigoureux.
      </p>

      <p className={styles.p}>
        Klenn Couverture, c’est votre partenaire de confiance en Loire-Atlantique pour des travaux de maçonnerie
        réalisés dans les règles de l’art, avec écoute, réactivité et professionnalisme.
      </p>
    </section>
  )
}