import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import Menu from '@/components/Menu/Menu'

export const metadata = {
  title: 'Travaux de Couverture à Nantes - Klenn Couverture',
  description:
    "Couvreur à Nantes, Klenn Couverture intervient pour la pose, la rénovation et l’entretien de toiture. Devis gratuit, qualité et rapidité garanties.",
}

export default function page() {
  return (
    <main>
      <SimpleBanner />
      <Menu />   
    </main>
  )
}
