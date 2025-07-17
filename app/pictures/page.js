import Gallery from '@/components/Gallery/Gallery'
import styles from '../page.module.css'

export const metadata = {
  title: 'Nos Réalisations - Klenn Couverture Nantes',
  description:
    "Découvrez les chantiers réalisés par Klenn Couverture à Nantes : toiture, peinture, maçonnerie… Un aperçu de notre savoir-faire.",
}

export default function Pictures() {
  return (
    <main className={styles.main}>
     <h2 className={styles.h2}>  Nos réalisations </h2>
      <Gallery />    
    </main>
  )
}
