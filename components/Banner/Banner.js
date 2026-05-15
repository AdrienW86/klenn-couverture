"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const images = [
  '/image1.avif', '/image2.avif', '/image3.avif', '/image4.avif', '/image5.avif',
  '/image6.avif', '/image7.avif', '/image8.avif', '/image9.avif', '/image10.avif',
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
      {/* CAROUSEL D'IMAGES */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt="Chantier Klenn Couverture"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay pour la lisibilité */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENU CENTRAL */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        
        {/* Badge Garantie Décennale */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <Image          
            src="/garantie.png"
            alt="Garantie décennale"
            width={120}
            height={120}
            className="drop-shadow-xl"
          />
        </motion.div>

        {/* Titre Accroche */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
        >
          K L E N N <span className="text-blue-500">C O U V E R T U R E</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-100 text-lg md:text-xl mb-8 max-w-2xl font-light"
        >
          Expertise en toiture, ravalement et maçonnerie. <br /> Votre artisan de confiance pour un habitat protégé.
        </motion.p>

        {/* BOUTONS */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <Link 
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
          >
            Devis gratuit
          </Link>
          <Link 
            href="/pictures"
            className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center"
          >
            Nos réalisations
          </Link>
        </div>
      </div>

      {/* BOUTON APPEL FLOTTANT (Optionnel dans la bannière, souvent mieux en bas à droite) */}
      <Link
        href="tel:0698144222"
        className="absolute bottom-8 right-8 z-30 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center gap-2 font-bold"
        onClick={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag('event', 'conversion', { 'send_to': 'AW-17050234458/GT-WKR8X772' });
          }
        }}
      >
        <span className="text-xl">📞</span> 
        <span className="hidden md:inline">Appeler maintenant</span>
      </Link>
    </section>
  );
}