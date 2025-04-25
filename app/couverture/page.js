import Header from '@/components/Header/Header'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import Menu from '@/components/Menu/Menu'
import Footer from '@/components/Footer/Footer'
import styles from './couverture.module.css'

export default function page() {
  return (
    <main className={styles.main}>
      <Header />
      <SimpleBanner />
      <Menu />
      <Footer />     
    </main>
  )
}
