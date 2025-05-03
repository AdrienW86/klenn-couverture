import React from 'react'
import styles from './about.module.css'

export default function About() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Qui sommes-nous ?</h1>
      <p className={styles.p}>
        Klenn Couverture, c’est avant tout une équipe de professionnels passionnés par leur métier,
        au service de vos projets de construction et de rénovation dans toute la Loire-Atlantique.
        Fondée sur des valeurs solides comme la rigueur, la transparence et le travail bien fait,
        notre entreprise s’est imposée comme un acteur de confiance dans les domaines de la couverture,
        de la peinture intérieure et extérieure, et de la petite maçonnerie.
      </p>

      <h2 className={styles.h2}>Une entreprise de proximité, à taille humaine</h2>
      <p className={styles.p}>
        Chez Klenn Couverture, chaque projet est unique. Nous croyons à l'importance d'un accompagnement personnalisé,
        en étant à l’écoute de vos besoins spécifiques. Que vous soyez un particulier ou un professionnel,
        nous vous proposons des solutions durables, esthétiques et adaptées à votre budget.
      </p>

      <h2 className={styles.h2}>Des artisans qualifiés, un savoir-faire local</h2>
      <p className={styles.p}>
        Notre équipe est composée d’artisans expérimentés et régulièrement formés aux nouvelles techniques
        et aux normes du bâtiment. Nous sélectionnons des matériaux fiables et durables,
        pour vous garantir des résultats à la hauteur de vos attentes.
      </p>

      <h2 className={styles.h2}>La qualité avant tout</h2>
      <p className={styles.p}>
        De la première prise de contact à la réception des travaux, nous nous engageons à respecter les délais,
        à maintenir un chantier propre et à assurer votre satisfaction. Toutes nos interventions sont couvertes
        par une garantie décennale, preuve de notre engagement et de notre sérieux.
      </p>

      <p className={styles.p}>
        Klenn Couverture, c’est votre partenaire de confiance pour tous vos projets de rénovation
        et d’amélioration de l’habitat en Loire-Atlantique.
      </p>
    </section>
  )
}