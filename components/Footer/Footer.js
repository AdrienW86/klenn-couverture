import React from 'react'
import Image from 'next/image';
import styles from './footer.module.css'

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className={styles.footer}>
       <div className={styles.container}>
        <Image
            src="/favicon2.png"
            alt="Vue du château-hôtel"
            width={120}
            height={50}
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
       </div>
      <h3 className={styles.h3}> Château de Projan </h3>
      <a className={styles.link} href="https://code-v.fr" target="_blank" rel="noopener noreferrer">
        Réalisé par <span className={styles.codev}> Codev </span>
      </a>
      <p className={styles.txt}> © {currentYear}. Tous droits réservés. </p>
    </footer>
  )
}
