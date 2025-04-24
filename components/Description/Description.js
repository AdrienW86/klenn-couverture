'use client'; // pour un projet Next.js avec hooks React

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './description.module.css';

export default function Description() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref8, inView: inView8 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref9, inView: inView9 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref10, inView: inView10 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref11, inView: inView11 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref12, inView: inView12 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref13, inView: inView13 } = useInView({ triggerOnce: false, threshold: 0.0 });

  return (
    <AnimatePresence>
      <section className={styles.description}>
        <div className={styles.box}>
          <h2 className={styles.h2}>
            Zone d'intervention
          </h2>
        </div>

        <motion.section className={styles.localisation}>
          <Image          
            src="/image1.jpg"
            alt="Vue pittoresque et charmante du Château de Projan entouré de collines"
            width={400}
            height={400}
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
          <div className={styles.intro}>
            <motion.p
              ref={ref4}
              initial={{ opacity: 0, y: 50 }} 
              animate={{
                opacity: inView4 ? 1 : 0,
                y: inView4 ? 0 : 50,
              }}
              exit={{ opacity: 0, y: 50 }}  
              transition={{ duration: 0.5 }}
            > 
             Basée dans les Pyrénées-Orientales (66), Elite Couverture intervient dans tout le département : Perpignan, Canet-en-Roussillon, Argelès-sur-Mer, Céret, Prades et alentours.
             Nous nous déplaçons rapidement pour vos travaux de couverture, peinture et maçonnerie, que ce soit en ville, en bord de mer ou en zone rurale.
            </motion.p>
          </div>
        </motion.section>

        <div className={styles.box}>
          <h2
            className={styles.h2}
          >
            Pourquoi choisir Elite Couverture ?
          </h2>
        </div>

       <section className={styles.background}>
       <div className={styles.article} >
          <ul>
            <li className={styles.li}>
              <motion.img
                ref={ref6}  
                initial={{ opacity: 0, x: -100 }} 
                animate={{
                  opacity: inView6 ? 1 : 0,
                  x: inView6 ? 0 : -100,
                }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                src="/image5.jpg"
                alt="photos d'une toiture en travaux"
                width={300}
                height={300}
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.picture}
              />
              <motion.p
                ref={ref7}  
                initial={{ opacity: 0, x: 100 }} 
                animate={{
                  opacity: inView7 ? 1 : 0,
                  x: inView7 ? 0 : 100,
                }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className={styles.p}
              >
                <span className={styles.span}> Expertise en couverture traditionnelle et moderne</span>Nous réalisons tous types de toitures (tuiles, bac acier, zinguerie…) avec une parfaite maîtrise des normes en vigueur, assurant l’étanchéité et la durabilité de votre couverture.
              </motion.p>
            </li>
            <li className={styles.li}>
            <motion.img
                ref={ref9}  
                initial={{ opacity: 0, x: -100 }} 
                animate={{
                  opacity: inView9 ? 1 : 0,
                  x: inView9 ? 0 : 100,
                }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                src="/image10.jpg"
                alt="Vue pittoresque et charmante du Château de Projan entouré de collines"
                width={200}
                height={200}
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.picture}
              />
              <motion.p
                ref={ref8}  
                initial={{ opacity: 0, x: 100 }} 
                animate={{
                  opacity: inView8 ? 1 : 0,
                  x: inView8 ? 0 : -100,
                }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className={styles.p}
              > 
                <span className={styles.span}>Peinture intérieure et extérieure haut de gamme</span>Nos finitions sont réalisées avec des peintures professionnelles adaptées à chaque support. Préparation minutieuse des surfaces, application soignée, rendu impeccable.
              </motion.p>
             
            </li>
            <li className={styles.li}>
              <motion.img
                ref={ref10}  
                initial={{ opacity: 0, x: -100 }} 
                animate={{
                  opacity: inView10 ? 1 : 0,
                  x: inView10 ? 0 : -100,
                }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                src="/image9.jpg"
                alt="Vue pittoresque et charmante du Château de Projan entouré de collines"
                width={200}
                height={200}
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.picture}
              />
              <motion.p
                ref={ref11}  
                initial={{ opacity: 0, x: 100 }} 
                animate={{
                  opacity: inView11 ? 1 : 0,
                  x: inView11 ? 0 : 100,
                }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className={styles.p}
              >
                <span className={styles.span}> Maçonnerie solide et sur-mesure</span>De la rénovation de façades aux murets et dallages, nous garantissons des ouvrages robustes, durables et esthétiques, dans le respect des règles de l’art.
              </motion.p>
            </li>
            <li className={styles.li}>
              <motion.img
                ref={ref13} 
                initial={{ opacity: 0, x: -100 }} 
                animate={{
                  opacity: inView13 ? 1 : 0,
                  x: inView13 ? 0 : 100,
                }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                src="/image1.jpg"
                alt="Vue pittoresque et charmante du Château de Projan entouré de collines"
                width={300}
                height={300}
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.picture}
              />
               <motion.p
                ref={ref12}  
                initial={{ opacity: 0, x: 100 }} 
                animate={{
                  opacity: inView12 ? 1 : 0,
                  x: inView12 ? 0 : 100,
                }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={styles.p}
              >
                <span className={styles.span}> Matériel professionnel et techniques éprouvées</span>Nous utilisons des équipements de pointe et des méthodes éprouvées pour un chantier sécurisé, efficace et parfaitement exécuté, quelles que soient les conditions.
              </motion.p>
            </li>
          </ul>
        </div>
       </section>
      </section>
    </AnimatePresence>
  );
}
