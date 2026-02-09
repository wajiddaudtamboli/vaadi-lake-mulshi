import React, { useState, useEffect, useRef } from 'react';
import './WelcomeSection.css';
import welcomeImg1 from '../../assets/Images for Landing Pages/49.jpg';
import welcomeImg2 from '../../assets/Images for Landing Pages/Welcome.jpg';

const images = [welcomeImg1, welcomeImg2];
const AUTO_SLIDE_INTERVAL_MS = 4500; // same speed as InteriorShowcase

const WelcomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide: same speed as InteriorShowcase, keeps images moving in frame
  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, AUTO_SLIDE_INTERVAL_MS);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timerRef.current);
  }, []);

  // Pause auto-slide on hover, resume at same speed when mouse leaves
  const handleMouseEnter = () => clearInterval(timerRef.current);
  const handleMouseLeave = () => startAutoSlide();

  return (
    <section className="welcome">
      {/* Left Side - Content */}
      <div className="welcome__content">
        <p className="welcome__badge">Nature's Calm, Luxury's Touch</p>
        <h2 className="welcome__title">Welcome to<br />Vaadi Lake Mulshi</h2>
        <p className="welcome__description">
          Nestled amidst the tranquil landscapes of Mulshi, Vaadi Villas redefine luxury living with breathtaking serene views, sophisticated architecture, and unmatched exclusivity. Offering a seamless fusion of nature's serenity and modern opulence, these villas are thoughtfully designed to provide a refined lifestyle and the ultimate private retreat.
        </p>
        <a href="#contact" className="welcome__cta">ENQUIRE NOW</a>
      </div>

      {/* Right Side - Image Slideshow */}
      <div
        className="welcome__image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="welcome__slider">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Vaadi Lake Mulshi View ${index + 1}`}
              className={`welcome__slide ${index === currentIndex ? 'welcome__slide--active' : ''}`}
            />
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="welcome__indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`welcome__indicator ${index === currentIndex ? 'welcome__indicator--active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="welcome__nav">
          <button className="welcome__nav-btn" onClick={goPrev} aria-label="Previous slide">&lt;</button>
          <button className="welcome__nav-btn" onClick={goNext} aria-label="Next slide">&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
