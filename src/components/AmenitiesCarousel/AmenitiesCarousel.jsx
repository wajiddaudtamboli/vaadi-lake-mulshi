import React, { useState, useEffect, useCallback } from 'react';
import styles from './AmenitiesCarousel.module.css';

const amenitiesImages = [
  { src: 'https://vaadi.in/eva-1.jpg', alt: 'Luxury living top villa for sale in Pune, Mumbai' },
  { src: 'https://vaadi.in/eva-2.jpg', alt: 'Luxury lounge area' },
  { src: 'https://vaadi.in/eva-3.jpg', alt: 'Sophisticated home design' },
  { src: 'https://vaadi.in/eva-4.jpg', alt: 'Stylish Living Room' },
  { src: 'https://vaadi.in/eva-5.jpg', alt: 'Modern Home Office' },
  { src: 'https://vaadi.in/eva-6.jpg', alt: 'Cozy Bedroom Retreat' },
  { src: 'https://vaadi.in/eva-7.jpg', alt: 'Modern Bedroom Interior' },
  { src: 'https://vaadi.in/eva-8.jpg', alt: 'Elegant Kitchen with Marble Accents' },
  { src: 'https://vaadi.in/eva-9.jpg', alt: 'Luxurious Bathroom with Indoor Plants' },
];

const AmenitiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = amenitiesImages.length;

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, totalSlides, goToSlide]);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const getSlideStyle = (index) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff % totalSlides) + totalSlides) % totalSlides;
    
    // Center slide
    if (normalizedDiff === 0) {
      return {
        transform: 'scale(1.1)',
        zIndex: 3,
        opacity: 1,
      };
    }
    
    // Previous slide (left)
    if (normalizedDiff === totalSlides - 1 || diff === -1) {
      return {
        transform: 'perspective(800px) rotateY(10deg) translateX(-5px) scale(0.95)',
        zIndex: 2,
        opacity: 1,
      };
    }
    
    // Next slide (right)
    if (normalizedDiff === 1) {
      return {
        transform: 'perspective(800px) rotateY(-10deg) translateX(5px) scale(0.95)',
        zIndex: 2,
        opacity: 1,
      };
    }
    
    // Hidden slides
    return {
      transform: 'scale(0.75)',
      zIndex: 1,
      opacity: 0,
    };
  };

  const isOverlayVisible = (index) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff % totalSlides) + totalSlides) % totalSlides;
    // Show overlay on side slides only
    return normalizedDiff === totalSlides - 1 || normalizedDiff === 1 || diff === -1;
  };

  // Get visible slides (prev, current, next)
  const getVisibleSlides = () => {
    const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    const nextIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    return [
      { ...amenitiesImages[prevIndex], originalIndex: prevIndex, position: 'prev' },
      { ...amenitiesImages[currentIndex], originalIndex: currentIndex, position: 'current' },
      { ...amenitiesImages[nextIndex], originalIndex: nextIndex, position: 'next' },
    ];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section className={styles.amenitiesSection}>
      <h2 className={styles.amenitiesTitle}>Exclusive Villa Amenities</h2>
      
      <div className={styles.carouselContainer}>
        <button 
          type="button" 
          className={`${styles.navButton} ${styles.navButtonLeft}`}
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          ❮
        </button>

        <div className={styles.carouselTrack}>
          {visibleSlides.map((slide, idx) => {
            const slideStyle = getSlideStyle(slide.originalIndex);
            const showOverlay = slide.position !== 'current';
            
            return (
              <div
                key={`${slide.originalIndex}-${slide.position}`}
                className={`${styles.slide} ${styles[`slide${slide.position.charAt(0).toUpperCase() + slide.position.slice(1)}`]}`}
                style={slideStyle}
              >
                <div className={styles.slideInner}>
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className={styles.slideImage}
                    loading="lazy"
                  />
                  {showOverlay && (
                    <div className={styles.slideOverlay} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button 
          type="button" 
          className={`${styles.navButton} ${styles.navButtonRight}`}
          onClick={goToNext}
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default AmenitiesCarousel;
