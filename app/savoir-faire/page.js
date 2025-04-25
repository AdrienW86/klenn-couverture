import Header from '@/components/Header/Header'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'

export default function page() {
  return (
    <main>
      <Header />
      <SimpleBanner />
      <About />
      <Footer />     
    </main>
  )
}