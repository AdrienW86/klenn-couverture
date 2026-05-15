"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Accueil', href: '/' },
  { name: 'Photos', href: '/pictures' },
  { name: 'Couverture', href: '/couverture' },
  { name: 'Peinture', href: '/peinture' },
  { name: 'Maçonnerie', href: '/construction' },
  { name: 'Qui sommes-nous ?', href: '/savoir-faire' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2 text-slate-900' 
          : 'bg-slate-900 py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* LOGO avec inversion dynamique */}
        <Link href="/" className="relative z-50">
          <Image
            src="/logo.png"
            alt="Klenn Couverture Logo"
            width={140}
            height={50}
            className={`w-auto h-12 md:h-16 object-contain transition-all duration-300 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                scrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-transform hover:scale-105"
          >
            Devis Gratuit
          </Link>
        </nav>

        {/* HAMBURGER BUTTON */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden p-2 rounded-md transition-colors relative z-50 ${
            scrolled || isMenuOpen ? 'text-slate-900' : 'text-white'
          }`}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center lg:hidden"
            >
              <ul className="flex flex-col items-center gap-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.li 
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                <Link 
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg"
                >
                  Devis Gratuit
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}