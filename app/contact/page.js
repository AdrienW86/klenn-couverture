'use client'

import { useEffect } from 'react'
import Map from '@/components/Map/Map'
import Form from '@/components/Form/Form'
import styles from '../page.module.css'

export const metadata = {
  title: 'Contactez Klenn Couverture - Couvreur à Nantes',
  description:
    "Besoin d’un devis ou d’un renseignement ? Contactez Klenn Couverture à Nantes. Réponse rapide et conseils personnalisés.",
}

export default function Contact() {
  useEffect(() => {
    // Déclenchement automatique de la conversion Google Ads
    window.gtag?.('event', 'conversion', {
      send_to: 'AW-17050234458/B6_9CJvTnfgaENrcl8I_',
    })
  }, [])

  return (
    <main className={styles.container}>
      <h2 className={styles.h2}>Nous contacter</h2>
      <Map />
      <Form />
    </main>
  )
}
