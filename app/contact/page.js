import Header from '@/components/Header/Header'
import Map from '@/components/Map/Map'
import Form from '@/components/Form/Form'
import Footer from '@/components/Footer/Footer'
import styles from '../page.module.css'


export default function Contact() {
  return (
    <main className={styles.container}>
      <Header />
     <h2 className={styles.h2}>  Nous contacter </h2>    
      <Map />
      <Form />
      <Footer />    
    </main>
  )
}
