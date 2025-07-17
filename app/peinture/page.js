import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import PeintureMenu from '@/components/PeintureMenu/Menu'

export const metadata = {
  title: 'Peinture intérieure & extérieure à Nantes - Klenn Couverture',
  description:
    "Confiez vos travaux de peinture à Klenn Couverture. Intérieur, façade, boiseries… à Nantes et alentours. Finitions nettes et durables.",
}

export default function page() {
  return (
    <main>
      <SimpleBanner />
      <PeintureMenu />   
    </main>
  )
}
