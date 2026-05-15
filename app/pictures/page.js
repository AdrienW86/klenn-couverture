import Gallery from '@/components/Gallery/Gallery'

export const metadata = {
  title: 'Nos Réalisations - Klenn Couverture Nantes',
  description:
    "Découvrez les chantiers réalisés par Klenn Couverture à Nantes : toiture, peinture, maçonnerie… Un aperçu de notre savoir-faire.",
}

export default function Pictures() {
  return (
    // 'pt-24' permet de ne pas cacher le haut de la page sous ton Header fixe
    <main className="min-h-screen bg-white pt-24">
      <Gallery />    
    </main>
  )
}