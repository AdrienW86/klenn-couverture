"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* COLONNE 1 : LOGO & BIO */}
          <div className="space-y-6">
            <Image
              src="/logo2.png" // Assure-toi que c'est bien la version claire du logo
              alt="Klenn Couverture Logo"
              width={180}
              height={60}
              className="brightness-0 invert opacity-90" // Rend le logo blanc s'il est noir
            />
            <p className="text-sm leading-relaxed max-w-sm">
              Artisan expert en couverture, peinture et maçonnerie en Loire-Atlantique. 
              Qualité, réactivité et garantie décennale pour tous vos chantiers.
            </p>
          </div>

          {/* COLONNE 2 : LIENS UTILES & LÉGAL */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Informations</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/mentions" className="hover:text-blue-400 transition-colors">Mentions légales</Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-blue-400 transition-colors">Conditions d'utilisation</Link>
              </li>
              <li>
                <Link href="/politique" className="hover:text-blue-400 transition-colors">Politique de confidentialité</Link>
              </li>
              <li>
                <Link href="https://code-v.fr" target="_blank" className="text-xs text-slate-500 hover:text-white">
                  Réalisé par <span className="text-blue-500 font-bold">Codev</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLONNE 3 : CONTACT & RÉSEAUX */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Suivez-nous</h3>
            <div className="flex gap-4 mb-6">
              <Link 
                href="https://www.instagram.com/klenn_couverture/" 
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-all"
              >
                <Image width={24} height={24} src="/instagram.svg" alt="Instagram" className="invert" />
              </Link>
              <Link 
                href="https://www.facebook.com/profile.php?id=61575584465166" 
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-all"
              >
                <Image width={24} height={24} src="/facebook.svg" alt="Facebook" className="invert" />
              </Link>
            </div>
            <p className="text-sm">Loire-Atlantique, 44</p>
            <p className="text-sm font-bold text-white mt-2">06 98 14 42 22</p>
          </div>

        </div>

        {/* LIGNE DE SÉPARATION ET COPYRIGHT */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Klenn Couverture. Tous droits réservés.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1">🛡️ Garantie Décennale</span>
            <span className="flex items-center gap-1">👷 Travail Soigné</span>
          </div>
        </div>

      </div>
    </footer>
  );
}