import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import ConstructionMenu from '@/components/ConstructionMenu/Menu'

export const metadata = {
  title: 'Maçonnerie à Nantes - Klenn Couverture',
  description:
    "Klenn Couverture réalise vos travaux de maçonnerie à Nantes : rénovation, petits ouvrages, murets, enduits… Un travail fiable et soigné.",
}

export default function page() {
  return (
    <main>
      <SimpleBanner />
      <ConstructionMenu />   
    </main>
  )
}
