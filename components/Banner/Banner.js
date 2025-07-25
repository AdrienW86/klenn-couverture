'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import styles from './banner.module.css';

const images = [
  '/image1.avif',
  '/image2.avif',
  '/image3.avif', 
  '/image4.avif', 
  '/image5.avif',
  '/image6.avif',
  '/image7.avif',
  '/image8.avif',
  '/image9.avif',
  '/image10.avif',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.0 });
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className={styles.carousel} id="carouselExampleFade">
      <Image          
            src="/garantie.png"
            alt="garantie decenale"
            width={140}
            height={140}
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
        <div className={styles.btnContainer}>
            <motion.a 
              className={styles.btn} 
              href="/contact"
              ref={ref1}  
              initial={{ opacity: 0, x: -50 }} 
              animate={{
                opacity: inView1 ? 1 : 0,
                x: inView1 ? 0 : -50,
              }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            > 
              Devis gratuit
            </motion.a>
            <motion.a 
              className={styles.btn2} 
              href="/pictures"
              ref={ref2}  
              initial={{ opacity: 0, x: 50 }} 
              animate={{
                opacity: inView2 ? 1 : 0,
                x: inView2 ? 0 : 50,
              }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            > 
              Nos réalisations 
            </motion.a>
       
        </div>
      <div className={styles.carouselInner}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '85vh', 
            }}
          />
        ))}
      </div>  
      <Link
  href="tel:0698144222"
  className={styles.call}
  onClick={() => {
    if (typeof window !== "undefined") {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17050234458/GT-WKR8X772', // Remplace avec ton étiquette exacte
        event_callback: () => {
          console.log("Conversion Appel déclenchée");
        }
      });
    }
  }}
>
  📞 Appeler
</Link>

    </div>
  );
}
