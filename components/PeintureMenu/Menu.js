import React from 'react'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}> Le déroulement d’un chantier de peinture intérieure et extérieure avec Elite Couverture </h1>
            <p className={styles.p}> Chez Elite Couverture, notre savoir-faire ne se limite pas à la toiture. Nous vous accompagnons 
                également dans vos projets de peinture intérieure et extérieure, que ce soit pour sublimer votre habitat ou rénover 
                une façade. Chaque intervention est réalisée avec soin, méthode et professionnalisme. Voici comment se déroule un chantier 
                de peinture avec notre équipe.
            </p>
        <h2 className={styles.h2}> 1. Visite et conseil personnalisé </h2>
            <p className={styles.p}> Tout débute par un rendez-vous sur place pour évaluer vos besoins. Nous étudions l’état des surfaces à peindre, 
                vous conseillons sur les teintes, les finitions, et les types de peinture adaptés (acrylique, glycéro, peinture anti-humidité, etc.). 
                Vous recevez ensuite un devis précis, sans surprise.
            </p>
      
        <h2 className={styles.h2} > 2. Préparation des surfaces </h2>
            <ul className={styles.ul}> Une bonne peinture passe avant tout par une bonne préparation. Nous :</ul>
                <li className={styles.li}> Protégeons les sols, meubles et zones non concernées. </li>
                <li className={styles.li}> Nettoyons, décapons et réparons les murs ou façades si nécessaire.</li>
                <li className={styles.li}> Réalisons un ponçage soigné pour une meilleure accroche. </li>
                <li className={styles.li}> Appliquons une sous-couche adaptée à chaque support. </li>
        <h2 className={styles.h2}> 3. Application de la peinture </h2>
            <p className={styles.p}> Nous appliquons ensuite la peinture choisie en deux ou plusieurs couches selon le rendu souhaité. 
                Que ce soit pour des murs intérieurs, des plafonds ou des façades extérieures, nous travaillons avec précision et souci du détail, 
                pour un résultat impeccable.
            </p>
        <h2 className={styles.h2}> 4. Finitions et retouches </h2>
            <p className={styles.p}> Les finitions sont pour nous une priorité : angles nets, raccords soignés, uniformité des teintes. 
                Nous procédons à toutes les retouches nécessaires pour une finition parfaite.
            </p>
        <h2 className={styles.h2}> 5. Nettoyage du chantier et livraison </h2>
            <p className={styles.p}> Une fois les travaux terminés, nous nettoyons entièrement la zone de travail et retirons toutes les protections. 
                La livraison du chantier s’accompagne d’un contrôle qualité avec vous pour garantir votre entière satisfaction.
            </p>
            <p className={styles.p}>Elite Couverture, c’est aussi l’assurance d’une peinture durable, esthétique et adaptée à votre environnement. 
                Redonnez vie à vos murs, embellissez votre façade — confiez vos projets à des professionnels passionnés. 
            </p>
    </section>
  )
}
