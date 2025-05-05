'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

export default function Gallery() {
  const images = [
    { src: '/image1.jpg', alt: 'chantier' },
    { src: '/image2.jpg', alt: 'chantier' },
    { src: '/image3.jpg', alt: 'chantier' },
    { src: '/image4.jpg', alt: 'chantier' },
    { src: '/image5.jpg', alt: 'chantier' },
    { src: '/image6.jpg', alt: 'chantier' },
    { src: '/image7.jpg', alt: 'chantier' },
    { src: '/image8.jpg', alt: 'chantier' },
    { src: '/image9.jpg', alt: 'chantier' },
    { src: '/image10.jpg', alt: 'chantier' },
    { src: '/image11.jpg', alt: 'chantier' },
    { src: '/image12.jpg', alt: 'chantier' },
    { src: '/image13.jpg', alt: 'chantier' },
    { src: '/image14.jpg', alt: 'chantier' },
    { src: '/image15.jpg', alt: 'chantier' },
    { src: '/image16.jpg', alt: 'chantier' },
    { src: '/image17.jpg', alt: 'chantier' },
    { src: '/image18.jpg', alt: 'chantier' },
    { src: '/image19.jpg', alt: 'chantier' },
    { src: '/image20.jpg', alt: 'chantier' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Ouvrir la lightbox
  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  // Fermer la lightbox
  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div className={styles.imageWrapper} key={index} onClick={() => openLightbox(image.src)}>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div className={styles.lightboxContent}>
            <img src={currentImage} alt="Lightbox" className={styles.lightboxImage} />
          </div>
        </div>
      )}
    </div>
  );
}


