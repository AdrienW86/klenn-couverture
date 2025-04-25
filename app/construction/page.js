import Header from '@/components/Header/Header'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import ConstructionMenu from '@/components/ConstructionMenu/Menu'
import Footer from '@/components/Footer/Footer'

export default function page() {
  return (
    <main>
      <Header />
      <SimpleBanner />
      <ConstructionMenu />
      <Footer />     
    </main>
  )
}
