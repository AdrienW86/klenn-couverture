import React from 'react'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}> Le déroulement d’une couverture de toit avec Elite Couverture </h1>
            <p className={styles.p}> Chez Elite Couverture, nous mettons notre expertise au service de 
                vos projets de toiture, qu’il s’agisse d’une construction neuve ou 
                d’une rénovation. Chaque chantier est réalisé avec rigueur, transparence 
                et un souci constant de la qualité. Voici comment se déroule une couverture 
                de toit avec notre équipe.
            </p>
        <h2 className={styles.h2}> 1. Évaluation et diagnostic </h2>
            <p className={styles.p}> Tout commence par une visite technique gratuite sur site. Nous analysons l’état
                de votre toiture ou les besoins liés à votre construction, puis nous vous conseillons
                sur les matériaux les plus adaptés : tuiles, ardoises, zinc, bac acier, etc. 
                Vous recevez ensuite un devis clair et détaillé.
            </p>
        <h2 className={styles.h2}> 2. Préparation du chantier </h2>
            <p className={styles.p}> Avant de commencer les travaux, nous sécurisons la zone d’intervention pour garantir 
                la sécurité des occupants et de notre équipe. L’échafaudage est mis en place dans le 
                respect des normes en vigueur.
            </p>
        <h2 className={styles.h2}> 3. Dépose de l’ancienne couverture (si nécessaire)</h2>
            <p className={styles.p}> En cas de rénovation, nous procédons au retrait de l’ancienne couverture avec soin, 
                en triant les matériaux pour respecter les normes environnementales.
            </p>
        <h2 className={styles.h2} > 4. Pose de la nouvelle couverture </h2>
            <ul className={styles.ul}> Nous installons ensuite la nouvelle toiture dans les règles de l’art :</ul>
                <li className={styles.li}> Pose de l’écran sous-toiture pour assurer l’étanchéité à l’eau et au vent. </li>
                <li className={styles.li}> Mise en place des liteaux ou voliges selon le type de couverture.</li>
                <li className={styles.li}> Pose des matériaux de couverture avec une attention particulière aux finitions et à l’alignement. </li>
        <h2 className={styles.h2}> 5. Étanchéité et finitions </h2>
            <p className={styles.p}> Nous veillons à l’étanchéité parfaite de la toiture, notamment autour des cheminées, 
                fenêtres de toit et raccords. Les gouttières et systèmes d’évacuation sont également 
                installés ou remplacés si nécessaire.
            </p>
        <h2 className={styles.h2}> 6. Nettoyage et réception du chantier </h2>
            <p className={styles.p}> Une fois les travaux terminés, nous nettoyons entièrement la zone de chantier. 
                Une dernière vérification est réalisée en votre présence pour valider la qualité 
                des travaux et vous remettre la garantie décennale.
            </p>
            <p className={styles.p}>Elite Couverture, c’est le choix d’un travail soigné, durable et conforme aux normes. 
                Contactez-nous dès aujourd’hui pour une toiture solide, esthétique et parfaitement étanche. 
            </p>
    </section>
  )
}
