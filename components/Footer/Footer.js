import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css'

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className={styles.footer}>
       <div className={styles.container}>
        <Image
            src="/logo2.png"
            alt="logo"
            width={200}
            height={200}
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
       </div>
       <p className={styles.socialTitle}> Suivez-nous sur les réseaux</p>
       <div className={styles.social}>
         
            <Link href='https://www.instagram.com/klenn_couverture/' className={styles.p} >
              <Image 
                width={40}
                height={40}
                src="/instagram.svg"
                alt="logo instagram"
              />
            </Link>
            <Link href='https://www.facebook.com/profile.php?id=61575584465166&locale=fr_FR' className={styles.p} >
              <Image 
                width={40}
                height={40}
                src="/facebook.svg"
                alt="logo facebook"
              />
            </Link>
       </div>
      <a className={styles.link} href="https://code-v.fr" target="_blank" rel="noopener noreferrer">
        Réalisé par <span className={styles.codev}> Codev </span>
      </a>
      <p className={styles.txt}> © {currentYear}. Tous droits réservés. </p>
    </footer>
  )
}