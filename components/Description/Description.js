'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './description.module.css';

export default function Description() {
  const refs = Array.from({ length: 13 }, () => useInView({ triggerOnce: false, threshold: 0.0 }));

  const services = [
    {
      img: '/image5.jpg',
      alt: 'toiture en travaux',
      p: 'Travaux de couverture à Nantes et ses environs',
      text: 'Nous intervenons sur tous types de toitures (tuiles, ardoises, bac acier, zinc...) dans toute la Loire-Atlantique, en respectant les normes pour une étanchéité optimale et une longévité maximale.',
      imgRef: 5,
      pRef: 6,
    },
    {
      img: '/image10.jpg',
      alt: 'chantier de peinture extérieure',
      p: 'Peinture soignée pour intérieur et extérieur',
      text: 'Nos prestations de peinture sont réalisées avec des produits professionnels, adaptés aux conditions climatiques de la région. Finitions nettes, durables et esthétiques.',
      imgRef: 8,
      pRef: 7,
    },
    {
      img: '/image9.jpg',
      alt: 'maçonnerie',
      p: 'Maçonnerie de qualité pour tous vos projets',
      text: 'Que ce soit pour un mur, un muret, une terrasse ou la rénovation d’une façade, notre savoir-faire garantit des ouvrages solides et durables dans le respect des règles de l’art.',
      imgRef: 9,
      pRef: 10,
    },
    {
      img: '/image1.jpg',
      alt: 'matériel professionnel',
      p: 'Matériel adapté et méthodes efficaces',
      text: 'Nous utilisons du matériel professionnel et des techniques éprouvées pour assurer des chantiers sécurisés, rapides et parfaitement réalisés.',
      imgRef: 12,
      pRef: 11,
    },
  ];

  return (
    <AnimatePresence>
      <section className={styles.description}>
        <div className={styles.box}>
          <h2 className={styles.h2}>Zone d'intervention</h2>
        </div>

        <motion.section className={styles.localisation}>
          <Image
            src="/image1.jpg"
            alt="artisan en toiture"
            width={400}
            height={400}
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
          <div className={styles.intro}>
            <motion.p
              ref={refs[3].ref}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: refs[3].inView ? 1 : 0, y: refs[3].inView ? 0 : 50 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              Basée en Loire-Atlantique (44), notre entreprise intervient dans tout le département :
              Nantes, Saint-Nazaire, Rezé, Saint-Herblain, Pornic, Châteaubriant, et les communes avoisinantes.
              Nous nous déplaçons rapidement pour vos travaux de couverture, peinture et maçonnerie.
            </motion.p>
          </div>
        </motion.section>

        <div className={styles.box}>
          <h2 className={styles.h2}>Pourquoi nous faire confiance ?</h2>
        </div>

        <section className={styles.background}>
          <div className={styles.article}>
            <ul>
              {services.map((item, index) => (
                <li key={index} className={styles.li}>
                  <motion.img
                    ref={refs[item.imgRef].ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: refs[item.imgRef].inView ? 1 : 0, x: refs[item.imgRef].inView ? 0 : -100 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    src={item.img}
                    alt={item.alt}
                    width={300}
                    height={300}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.picture}
                  />
                  <motion.p
                    ref={refs[item.pRef].ref}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: refs[item.pRef].inView ? 1 : 0, x: refs[item.pRef].inView ? 0 : 100 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className={styles.p}
                  >
                    <span className={styles.span}>{item.p}</span>
                    {item.text}
                  </motion.p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </AnimatePresence>
  );
}
