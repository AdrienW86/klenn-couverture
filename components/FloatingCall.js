"use client"

import Link from 'next/link';

export default function FloatingCall() {
  return (
    <Link
      href="tel:0698144222"
      className="md:hidden fixed bottom-6 right-6 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce-slow border-2 border-white"
      onClick={() => {
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag('event', 'conversion', { 'send_to': 'AW-17050234458/GT-WKR8X772' });
        }
      }}
    >
      {/* Icône Téléphone */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-7 h-7"
      >
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.915l-2.26 1.81a11.214 11.214 0 005.424 5.424l1.81-2.26a1.875 1.875 0 011.915-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
      </svg>
    </Link>
  );
}