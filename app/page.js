import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import Equipment from '@/components/Equipment/Equipment'
import Description from '@/components/Description/Description'
import Footer from '@/components/Footer/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <Equipment />
      <Description />
      <Footer />     
    </main>
  )
}
