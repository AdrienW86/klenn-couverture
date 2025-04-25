import Header from '@/components/Header/Header'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import PeintureMenu from '@/components/PeintureMenu/Menu'
import Footer from '@/components/Footer/Footer'

export default function page() {
  return (
    <main>
      <Header />
      <SimpleBanner />
      <PeintureMenu />
      <Footer />     
    </main>
  )
}
