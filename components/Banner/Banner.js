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
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENU CENTRAL - Ajout du padding-top (pt-32) pour éviter le Header */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-32 md:pt-40">
        
        {/* Badge Garantie Décennale */}
       {/* Badge Garantie Décennale Responsive */}
<motion.div
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  className="mb-6 md:mb-10" // Marge qui s'adapte aussi
>
  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 mx-auto">
    <Image          
      src="/garantie.png"
      alt="Garantie décennale"
      fill
      className="object-contain drop-shadow-2xl"
      priority
    />
  </div>
</motion.div>

        {/* Nouveau Titre : Plus petit et élégant */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white text-3xl md:text-5xl font-light uppercase tracking-[0.2em] mb-4 drop-shadow-lg"
        >
          L'exigence de la <span className="font-bold text-blue-500">Qualité</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-200 text-base md:text-lg mb-10 max-w-2xl font-light italic"
        >
          Toiture · Ravalement · Maçonnerie <br className="hidden sm:block" /> 
          Votre artisan de confiance en Loire-Atlantique.
        </motion.p>

        {/* BOUTONS */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <Link 
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-blue-500/20"
          >
            Devis gratuit
          </Link>
          <Link 
            href="/pictures"
            className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white text-white hover:text-slate-900 px-10 py-4 rounded-full font-bold transition-all"
          >
            Nos réalisations
          </Link>
        </div>
      </div>

      {/* BOUTON APPEL FLOTTANT */}
      <Link
        href="tel:0698144222"
        className="hidden md:flex absolute bottom-8 right-8 z-30 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-6 py-4 rounded-full shadow-2xl transition-all hover:scale-105 items-center gap-3 font-bold"
        onClick={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag('event', 'conversion', { 'send_to': 'AW-17050234458/GT-WKR8X772' });
          }
        }}
      >
        <div className="bg-green-500 p-2 rounded-full animate-pulse">
          <span className="text-xl">📞</span> 
        </div>
        <div className="flex flex-col items-start text-left">
          <span className="text-[10px] uppercase opacity-70 leading-none">Une urgence ?</span>
          <span className="text-lg">06 98 14 42 22</span>
        </div>
      </Link>
    </section>
  );
}