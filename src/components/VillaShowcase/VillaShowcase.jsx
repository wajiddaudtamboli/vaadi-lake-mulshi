import React, { useState, useEffect, useCallback, useRef } from 'react';
import './VillaShowcase.css';
import estateImgB from '../../assets/Images for Landing Pages/B001.svg';
import img33 from '../../assets/Images for Landing Pages/33.jpg';
import img34 from '../../assets/Images for Landing Pages/34.jpg';
import img35 from '../../assets/Images for Landing Pages/35.jpg';
import img39 from '../../assets/Images for Landing Pages/39.jpg';
import img40 from '../../assets/Images for Landing Pages/40.jpg';

const images = [estateImgB, img33, img34, img35, img39, img40];
const AUTO_SLIDE_INTERVAL = 3500; // 3.5 seconds

const VillaShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const goNext = useCallback(() => {
    goToSlide((currentIndex + 1) % images.length);
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, goToSlide]);

  // Auto-slide
  useEffect(() => {
    timerRef.current = setInterval(goNext, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [goNext]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => clearInterval(timerRef.current);
  const handleMouseLeave = () => {
    timerRef.current = setInterval(goNext, AUTO_SLIDE_INTERVAL);
  };

  return (
    <section className="villa-showcase">
      {/* Left Side - Image Slideshow */}
      <div
        className="villa-showcase__image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="villa-showcase__slider">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Vaadi Estate View ${index + 1}`}
              className={`villa-showcase__slide ${index === currentIndex ? 'villa-showcase__slide--active' : ''}`}
            />
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="villa-showcase__indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`villa-showcase__indicator ${index === currentIndex ? 'villa-showcase__indicator--active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="villa-showcase__nav">
          <button className="villa-showcase__nav-btn" type="button" onClick={goPrev} aria-label="Previous">
            &lt;
          </button>
          <button className="villa-showcase__nav-btn" type="button" onClick={goNext} aria-label="Next">
            &gt;
          </button>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="villa-showcase__content">
        <p className="villa-showcase__badge">Elevated Natural Bliss</p>
        <h2 className="villa-showcase__title">Vaadi Estate</h2>
        <p className="villa-showcase__description">
          Meticulously crafted villas to experience luxe, every element offers an immersive experience of opulence and tranquility, redefining the art of luxurious living.
        </p>
      </div>
    </section>
  );
};

export default VillaShowcase;
