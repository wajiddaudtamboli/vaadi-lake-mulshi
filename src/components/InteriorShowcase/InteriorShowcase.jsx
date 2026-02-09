import React, { useState, useEffect } from 'react';
import './InteriorShowcase.css';
import img42 from '../../assets/Images for Landing Pages/42.jpg';
import img43 from '../../assets/Images for Landing Pages/43.jpg';
import img44 from '../../assets/Images for Landing Pages/44.jpg';
import img45 from '../../assets/Images for Landing Pages/45.jpg';
import img46 from '../../assets/Images for Landing Pages/46.jpg';
import img47 from '../../assets/Images for Landing Pages/47.jpg';
import img48 from '../../assets/Images for Landing Pages/48.jpg';
import img49 from '../../assets/Images for Landing Pages/49.jpg';

const INTERIOR_IMAGES = [img42, img43, img44, img45, img46, img47, img48, img49];
const SLIDESHOW_INTERVAL_MS = 4500;

const InteriorShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? INTERIOR_IMAGES.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === INTERIOR_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === INTERIOR_IMAGES.length - 1 ? 0 : prev + 1));
    }, SLIDESHOW_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="interior-showcase">
      {/* Left Side - Content */}
      <div className="interior-showcase__content">
        <p className="interior-showcase__badge">Schedule Your Exclusive Visit</p>
        <h2 className="interior-showcase__title">Luxe Living</h2>
        <p className="interior-showcase__description">
          Your dream villa awaits—crafted with exceptional precision and ready to offer an effortless blend of elegance and comfort. Designed for modern living, these homes ensure you transition seamlessly into a world of unparalleled luxury.
        </p>
      </div>

      {/* Right Side - Image Slideshow */}
      <div className="interior-showcase__image">
        <div className="interior-showcase__slide-wrap">
          {INTERIOR_IMAGES.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Luxe Living Interior ${index + 1}`}
              className={`interior-showcase__slide${index === currentIndex ? ' interior-showcase__slide--active' : ''}`}
            />
          ))}
        </div>

        {/* Slide Indicators (dots above image) */}
        <div className="interior-showcase__indicators">
          {INTERIOR_IMAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`interior-showcase__indicator ${index === currentIndex ? 'interior-showcase__indicator--active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="interior-showcase__nav">
          <button
            type="button"
            className="interior-showcase__nav-btn"
            aria-label="Previous"
            onClick={goToPrevious}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="interior-showcase__nav-btn"
            aria-label="Next"
            onClick={goToNext}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteriorShowcase;
