import React from 'react'
import Image from 'next/image'
import styles from "./equipment.module.css"

export default function Equipment() {
  return (
    <section className={styles.container}>
      <div className={styles.column}>
        Implantée au cœur des Pyrénées-Orientales, Elite Couverture met à votre service son savoir-faire local et son professionnalisme pour tous vos travaux de couverture, peinture et maçonnerie.
        Que ce soit pour rénover une toiture, rafraîchir vos façades ou réaliser des travaux de gros œuvre, notre équipe intervient avec rigueur, réactivité et matériaux de qualité.
        Faites confiance à un artisan engagé, à l’écoute de vos besoins, pour donner vie à vos projets en toute sérénité.
        Devis gratuit et intervention rapide dans tout le 66 !
      </div>
    </section>
  )
}
