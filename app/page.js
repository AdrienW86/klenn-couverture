import Banner from '@/components/Banner/Banner'
import Equipment from '@/components/Equipment/Equipment'
import Description from '@/components/Description/Description'

export const metadata = {
  title: 'Klenn Couverture - Couvreur à Nantes',
  description:
    "Klenn Couverture – Spécialiste en couverture, maçonnerie et peinture à Nantes et alentours. Intervention rapide, travail soigné, devis gratuit.",
}

export default function Home() {
  return (
    // On retire className={styles.main} au profit d'un background propre
    <main className="min-h-screen bg-white">
      <Banner />
      <Equipment />
      <Description />        
    </main>
  )
}