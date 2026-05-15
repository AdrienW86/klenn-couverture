"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Equipment() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* TEXTE D'EXPERTISE */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Votre Artisan de Confiance en <span className="text-blue-600">Loire-Atlantique</span>
            </h2>
            
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                Basée en <strong>Loire-Atlantique</strong>, notre entreprise vous accompagne pour tous vos travaux de 
                <span className="text-slate-900 font-medium"> couverture, peinture et maçonnerie</span> dans le 44.
              </p>
              <p>
                Que ce soit pour rénover votre toiture à <strong>Nantes</strong>, repeindre vos façades à 
                <strong> Saint-Nazaire</strong> ou effectuer des travaux de gros œuvre à <strong>Rezé</strong>, 
                nous intervenons avec professionnalisme et réactivité.
              </p>
              <p>
                Faites appel à une équipe d’artisans expérimentés, utilisant des matériaux de qualité pour concrétiser vos projets en toute confiance.
              </p>
            </div>

            {/* PETIT BADGE DE LOCALISATION */}
            <div className="mt-8 flex items-center gap-3 text-blue-700 font-semibold">
              <div className="p-2 bg-blue-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span>Intervention rapide dans tout le département</span>
            </div>
          </motion.div>

          {/* IMAGE D'ILLUSTRATION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/image6.avif" // Utilise une de tes belles images de chantier
              alt="Artisan couvreur en Loire-Atlantique"
              fill
              className="object-cover"
            />
            {/* Petit overlay décoratif */}
            <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-6 py-3 rounded-tl-2xl font-bold">
              44 - Loire Atlantique
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}