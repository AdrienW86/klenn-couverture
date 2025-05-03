import React from 'react';
import styles from "./equipment.module.css";

export default function Equipment() {
  return (
    <section className={styles.container}>
      <div className={styles.column}>
        Basée en Loire-Atlantique, notre entreprise vous accompagne pour tous vos travaux de couverture, peinture et maçonnerie dans le 44.
        Que ce soit pour rénover votre toiture à Nantes, repeindre vos façades à Saint-Nazaire ou effectuer des travaux de gros œuvre à Rezé,
        nous intervenons avec professionnalisme, réactivité et des matériaux de qualité.
        Faites appel à une équipe d’artisans expérimentés, à l’écoute de vos besoins, pour concrétiser vos projets en toute confiance.
        Devis gratuit et intervention rapide dans tout le département de la Loire-Atlantique !
      </div>
    </section>
  );
}