import React from 'react'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}> Le déroulement de vos travaux de maçonnerie avec Elite Couverture </h1>
            <p className={styles.p}> Chez Elite Couverture, nous réalisons tous vos travaux de maçonnerie avec sérieux, 
                précision et savoir-faire. Qu’il s’agisse d’une construction, d’une rénovation ou d’une réparation, 
                notre équipe vous accompagne à chaque étape pour garantir la solidité et la pérennité de votre projet.
            </p>
        <h2 className={styles.h2}> 1. Évaluation et étude du projet </h2>
            <p className={styles.p}> Tout commence par une visite sur site. Nous échangeons avec vous sur vos besoins 
                (ouvertures, murs, dalles, murets, fondations, reprises de fissures, etc.), puis réalisons un diagnostic 
                technique. Ensuite, nous vous remettons un devis clair, adapté à vos attentes et à votre budget.
            </p>    
        <h2 className={styles.h2}> 2. Préparation du chantier </h2>
            <p className={styles.p}> Avant le début des travaux, nous sécurisons le chantier et mettons en place tout 
                le matériel nécessaire. Si besoin, nous procédons au terrassement et aux travaux préparatoires (démolition, coffrage, etc.).
            </p> 
        <h2 className={styles.h2} > 3. Réalisation des travaux de maçonnerie </h2>
            <ul className={styles.ul}>Nos maçons interviennent dans le respect des normes en vigueur :</ul>
                <li className={styles.li}> Création ou modification de murs porteurs ou non-porteurs </li>
                <li className={styles.li}> Pose de parpaings, briques, pierres ou béton cellulaire</li>
                <li className={styles.li}> Coulage de dalles ou chapes </li>
                <li className={styles.li}> Réalisation de fondations, escaliers, seuils, etc. </li>
            <p className={styles.p}> Chaque étape est réalisée avec rigueur pour assurer la stabilité 
                et la durabilité de l’ouvrage.
            </p>
        <h2 className={styles.h2}> 4. Finitions et étanchéité </h2>
            <p className={styles.p}> Nous apportons un soin particulier aux finitions : rejointoiement, 
                lissage, application d’enduits ou de produits d’étanchéité selon les cas. Notre objectif : 
                vous livrer un résultat propre, esthétique et parfaitement fonctionnel.
            </p>
        <h2 className={styles.h2}> 5. Nettoyage et réception du chantier </h2>
            <p className={styles.p}> Une fois les travaux terminés, nous procédons au nettoyage complet de la zone
                et à la remise en état de l’environnement. La réception du chantier se fait en votre présence, 
                avec un contrôle qualité rigoureux.
            </p>
            <p className={styles.p}> Elite Couverture, c’est un partenaire de confiance pour tous vos projets de maçonnerie, 
                petits ou grands. Faites appel à une équipe expérimentée, réactive et à l’écoute pour des travaux réalisés 
                dans les règles de l’art.
            </p>
    </section>
  )
}
