import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import About from '@/components/About/About'

export const metadata = {
  title: 'À propos - Klenn Couverture à Nantes',
  description:
    "Klenn Couverture, entreprise locale à Nantes, vous accompagne avec sérieux et expérience sur tous vos projets. Découvrez notre histoire.",
}

export default function page() {
  return (
    <main>
      <SimpleBanner />
      <About /> 
    </main>
  )
}