import Banner from '@/components/Banner/Banner'
import Equipment from '@/components/Equipment/Equipment'
import Description from '@/components/Description/Description'
import styles from './page.module.css'

export const metadata = {
  title: 'Klenn Couverture - Couvreur à Nantes',
  description:
    "Klenn Couverture – Spécialiste en couverture, maçonnerie et peinture à Nantes et alentours. Intervention rapide, travail soigné, devis gratuit.",
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Equipment />
      <Description />        
    </main>
  )
}
