import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
     <head>
  <link rel="icon" href="favicon.png" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
    rel="stylesheet"
  />
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=AW-17050234458"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17050234458');
    `}
  </Script>
</head>

      <body className={inter.className}>
       
        <Header /> 
          {children}
        <Footer /> 
      </body>
    </html>
  )
}