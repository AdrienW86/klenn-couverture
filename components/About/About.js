import React from 'react'
import styles from './about.module.css'

export default function About() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}> Qui sommes-nous ? </h1>
            <p className={styles.p}> Elite Couverture, c’est avant tout une équipe de professionnels passionnés par leur métier, 
                au service de vos projets de construction et de rénovation. Basée sur des valeurs solides comme la rigueur, 
                la transparence et la qualité du travail bien fait, notre entreprise s’est imposée comme un acteur de confiance 
                dans les domaines de la couverture, de la peinture intérieure et extérieure, et de la maçonnerie. 
            </p>
        <h2 className={styles.h2}> Une entreprise à taille humaine, proche de ses clients </h2>
            <p className={styles.p}> Chez Elite Couverture, chaque client compte. Nous croyons en la force d’un accompagnement personnalisé, 
                à l’écoute de vos besoins réels. Que vous soyez un particulier ou un professionnel, nous mettons tout en 
                œuvre pour vous proposer des solutions sur mesure, durables et esthétiques.
            </p>
        <h2 className={styles.h2}> Des artisans qualifiés, un savoir-faire reconnu </h2>
            <p className={styles.p}> Notre équipe est composée d’artisans qualifiés, expérimentés et régulièrement formés aux nouvelles techniques et normes du bâtiment. 
                Nous travaillons avec des matériaux de qualité, sélectionnés pour leur fiabilité et leur longévité.
            </p>
        <h2 className={styles.h2}> Une exigence de qualité à chaque étape </h2>
        <p className={styles.p}>  De la première prise de contact à la réception finale des travaux, nous accordons une importance particulière au respect des délais, 
            à la propreté du chantier, et à la satisfaction totale de nos clients. Chaque intervention est couverte par notre garantie décennale, 
            gage de notre engagement et de notre sérieux.
        </p>
        <p className={styles.p}>Elite Couverture, c’est plus qu’une entreprise : c’est un partenaire de confiance pour donner vie à vos projets, en toute sérénité.</p>
    </section>
  )
}
