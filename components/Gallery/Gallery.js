'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

export default function Gallery() {
  const images = [
    { src: '/image1.avif', alt: 'chantier' },
    { src: '/image2.avif', alt: 'chantier' },
    { src: '/image3.avif', alt: 'chantier' },
    { src: '/image4.avif', alt: 'chantier' },
    { src: '/image5.avif', alt: 'chantier' },
    { src: '/image6.avif', alt: 'chantier' },
    { src: '/image7.avif', alt: 'chantier' },
    { src: '/image8.avif', alt: 'chantier' },
    { src: '/image9.avif', alt: 'chantier' },
    { src: '/image10.avif', alt: 'chantier' },
    { src: '/image11.avif', alt: 'chantier' },
    { src: '/image12.avif', alt: 'chantier' },
    { src: '/image13.avif', alt: 'chantier' },
    { src: '/image14.avif', alt: 'chantier' },
    { src: '/image15.avif', alt: 'chantier' },
    { src: '/image16.avif', alt: 'chantier' },
    { src: '/image17.avif', alt: 'chantier' },
    { src: '/image18.avif', alt: 'chantier' },
    { src: '/image19.avif', alt: 'chantier' },
    { src: '/image20.avif', alt: 'chantier' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null); // pour avant/après
  const [sliderValue, setSliderValue] = useState(50); // pour avant/après

  const openLightbox = (imageSrc, secondSrc = null) => {
    setCurrentImage(imageSrc);
    setSecondImage(secondSrc);
    setSliderValue(50);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  return (
    <div>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => openLightbox(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              style={{ objectFit: 'cover' }}
              className={styles.image}
              priority
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            {secondImage ? (
              <div className={styles.beforeAfter}>
                <div className={styles.after} style={{ width: `${sliderValue}%` }}>
                  <Image src={secondImage} alt="Après" fill style={{ objectFit: 'cover' }} />
                </div>
                <Image src={currentImage} alt="Avant" fill style={{ objectFit: 'cover' }} />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(e.target.value)}
                  className={styles.slider}
                />
              </div>
            ) : (
              <Image
                src={currentImage}
                alt="Lightbox"
                fill
                style={{ objectFit: 'contain' }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}