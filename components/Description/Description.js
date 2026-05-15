"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // Importation nécessaire

const services = [
  {
    img: '/image5.avif',
    title: 'Travaux de Couverture',
    location: 'Nantes & Loire-Atlantique',
    text: 'Intervention sur tous types de toitures (tuiles, ardoises, bac acier, zinc) pour une étanchéité optimale et une longévité maximale.',
    href: '/couverture', // Route vers ta page couverture
  },
  {
    img: '/image20.avif',
    title: 'Peinture Professionnelle',
    location: 'Intérieur & Extérieur',
    text: 'Utilisation de produits pros adaptés au climat du 44. Finitions nettes pour vos façades et vos murs intérieurs.',
    href: '/peinture', // Route vers ta page peinture
  },
  {
    img: '/image18.avif',
    title: 'Maçonnerie Générale',
    location: 'Gros œuvre & Rénovation',
    text: 'Terrasses, murets et ravalement de façade. Un savoir-faire garantissant des ouvrages solides respectant les règles de l’art.',
    href: '/construction', // Route vers ta page maçonnerie
  },
  {
    img: '/image13.avif',
    title: 'Matériel Professionnel',
    location: 'Sécurité & Efficacité',
    text: 'Équipements de pointe et méthodes éprouvées pour des chantiers sécurisés et des délais respectés.',
    href: '/savoir-faire', // Route vers ta page à propos/matériel
  },
];

export default function Description() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* SECTION ZONE D'INTERVENTION */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="md:w-1/2 relative h-[300px] md:h-[450px] w-full">
              <Image
                src="/image1.avif"
                alt="Artisan Klenn Couverture"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Zone d'intervention</h2>
              <p className="text-lg text-slate-300 leading-relaxed italic">
                "Basée en Loire-Atlantique (44), notre entreprise intervient dans tout le département : 
                Nantes, Saint-Nazaire, Rezé, Saint-Herblain, Pornic, Châteaubriant..."
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-2">✅ Devis Gratuit</div>
                <div className="flex items-center gap-2">✅ Déplacement Rapide</div>
                <div className="flex items-center gap-2">✅ Garantie Décennale</div>
                <div className="flex items-center gap-2">✅ Matériaux Pros</div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION POURQUOI NOUS ? */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Pourquoi nous faire confiance ?
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="space-y-20">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}
            >
              {/* IMAGE */}
              <Link href={item.href} className="w-full md:w-1/2 group cursor-pointer">
                <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-lg border-4 border-slate-50 transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-semibold">{item.location}</p>
                  </div>
                </div>
              </Link>

              {/* TEXTE */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                  {item.title}
                </h3>
                <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                  {item.location}
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {item.text}
                </p>
                <div className="pt-4">
                  {/* REMPLACEMENT DU BUTTON PAR LINK */}
                  <Link 
                    href={item.href}
                    className="text-blue-600 font-bold hover:translate-x-2 transition-transform inline-flex items-center gap-2 group"
                  >
                    En savoir plus <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}