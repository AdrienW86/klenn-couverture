"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = Array.from({ length: 20 }, (_, i) => ({
  src: `/image${i + 1}.avif`,
  alt: `Réalisation Klenn Couverture ${i + 1}`,
}));

export default function Gallery() {
  // Correction ici : on enlève le <string | null>
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">Nos Réalisations</h2>
          <p className="text-slate-600 text-center">Découvrez nos chantiers de couverture, peinture et maçonnerie en images.</p>
        </div>

        {/* GRILLE D'IMAGES MASONRY */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative break-inside-avoid cursor-pointer group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
              onClick={() => setSelectedImg(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white p-2 rounded-full shadow-lg text-blue-600">
                   🔍
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white text-4xl hover:text-blue-400">
              ×
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg}
                alt="Zoom chantier"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}