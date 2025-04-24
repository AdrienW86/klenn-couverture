import Header from '@/components/Header/Header'
import Gallery from '@/components/Gallery/Gallery'
import Footer from '@/components/Footer/Footer'
import styles from '../page.module.css'


export default function Pictures() {
  return (
    <main className={styles.main}>
      <Header />
     <h2 className={styles.h2}>  Nos réalisations </h2>
      <Gallery />
      <Footer />     
    </main>
  )
}
