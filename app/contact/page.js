import Map from '@/components/Map/Map'
import Form from '@/components/Form/Form'
import styles from '../page.module.css'
import ConversionTracker from '@/components/ConversionTracker'

export const metadata = {
  title: 'Contactez Klenn Couverture - Couvreur à Nantes',
  description:
    "Besoin d’un devis ou d’un renseignement ? Contactez Klenn Couverture à Nantes. Réponse rapide et conseils personnalisés.",
}

export default function Contact() {
  return (
    <main className={styles.container}>
      <ConversionTracker />
      <h2 className={styles.h2}>Nous contacter</h2>
      <Map />
      <Form />
    </main>
  )
}
