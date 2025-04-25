import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Elite couverture',
  description: "Elite Couverture – Spécialiste en couverture et peinture dans le 66. Interventions rapides et travaux de qualité dans tout le département des Pyrénées-Orientales. Toitures, façades, intérieurs : votre expert local."
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
       <head>
       
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SD7E6L1ZYY">
</script>
<script> window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-SD7E6L1ZYY');
</script>
        <link rel="icon" href="favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
