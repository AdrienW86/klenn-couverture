'use client';

import React from 'react';

export default function GoogleMap() {
  return (
    <div className="w-full h-full min-h-[350px] relative group overflow-hidden">
      {/* Overlay discret pour le style au survol */}
      <div className="absolute inset-0 bg-blue-600/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 z-10" />
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173368.7924508065!2d-1.724796408285334!3d47.23834870571156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ee81f0a8aead%3A0x40d37521e0ded30!2sNantes!5e0!3m2!1sfr!2sfr!4v1746276564642!5m2!1sfr!2sfr"
        className="w-full h-full border-0 grayscale-[0.2] contrast-[1.1]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Zone d'intervention Klenn Couverture"
      ></iframe>

      {/* Petit badge flottant sur la carte */}
      <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-md border border-slate-200 hidden sm:block">
        <p className="text-xs font-bold text-slate-800 flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
          Interventions en Loire-Atlantique (44)
        </p>
      </div>
    </div>
  );
}