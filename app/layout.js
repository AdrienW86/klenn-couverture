import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Klenn Couverture',
  description:
    "Klenn Couverture – Spécialiste en couverture et peinture dans le 44. Interventions rapides et travaux de qualité dans toute la Loire-Atlantique. Toitures, façades, intérieurs : votre expert local à votre service.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {/* Scripts Google Analytics (client-side only) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SD7E6L1ZYY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SD7E6L1ZYY');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}