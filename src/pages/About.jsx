import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from './About.module.css';

import sliderImage from '../assets/about/about-slider.png';
import slider52 from '../assets/Images for Landing Pages/52.jpg';
import slider53 from '../assets/Images for Landing Pages/53.jpg';
import slider54 from '../assets/Images for Landing Pages/54.jpg';
import slider55 from '../assets/Images for Landing Pages/55.jpg';
import slider56 from '../assets/Images for Landing Pages/56.jpg';
import slider57 from '../assets/Images for Landing Pages/57.jpg';
import chevronLeft from '../assets/about/chevron-left.svg';
import chevronRight from '../assets/about/chevron-right.svg';
import eleganceImage from '../assets/about/about-elegance-image.png';
import vaadiEmblem from '../assets/about/vaadi-emblem.png';
import freshPerspectiveImage from '../assets/about/about-fresh-perspective-e846a2.png';
import Footer from '../components/Footer';
import AmenitiesCarousel from '../components/AmenitiesCarousel';

const sliderImages = [slider52, slider53, slider54, slider55, slider56, slider57];
const AUTO_SLIDE_INTERVAL_MS = 4500;

const About = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const timerRef = useRef(null);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % sliderImages.length);
    }, AUTO_SLIDE_INTERVAL_MS);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleMouseEnter = () => clearInterval(timerRef.current);
  const handleMouseLeave = () => startAutoSlide();
  return (
    <main className={styles.aboutViewport}>
      <div className={styles.aboutPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.heroImage}
          >
            <source src="https://vaadi.in/hero-about1.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay} aria-hidden="true" />
          <Navbar />
        </section>

        {/* Welcome Section */}
        <section className={styles.welcomeSection}>
          <div className={styles.welcomeBlock}>
            <p className={styles.welcomeLabel}>Welcome to</p>
            <h1 className={styles.welcomeTitle}>
              <span>Vaadi Lake Mulshi</span>
              <span>A World Apart</span>
            </h1>
          </div>
          <div className={styles.welcomeDivider} aria-hidden="true" />
          <p className={styles.welcomeDescription}>
            Vaadi Lake Mulshi is an embodiment of timeless luxury, where every season transforms into an exquisite celebration of life.
            Surrounded by lush, meticulously landscaped gardens and serene natural settings, this exclusive retreat offers unparalleled
            privacy and architectural splendor, redefining the art of refined living.
          </p>
        </section>

        {/* Slider Section */}
        <section 
          className={styles.sliderSection}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {sliderImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Vaadi Lake Mulshi Villas ${index + 1}`}
              className={`${styles.sliderImage} ${index === currentSlideIndex ? styles.sliderImageActive : ''}`}
            />
          ))}
          <button type="button" className={styles.sliderButtonLeft} onClick={goToPrevSlide} aria-label="Previous">
            <img src={chevronLeft} alt="" className={styles.sliderChevronLeft} aria-hidden="true" />
          </button>
          <button type="button" className={styles.sliderButtonRight} onClick={goToNextSlide} aria-label="Next">
            <img src={chevronRight} alt="" className={styles.sliderChevronRight} aria-hidden="true" />
          </button>
        </section>

        {/* Elegance Section */}
        <section className={styles.eleganceSection}>
          <img src={eleganceImage} alt="Elegance and Serenity" className={styles.eleganceImage} />
          <div className={styles.eleganceOverlay}>
            <div className={styles.eleganceContent}>
              <p className={styles.eleganceKicker}>A Vision Of</p>
              <h2 className={styles.eleganceTitle}>Elegance and Serenity</h2>
              <p className={styles.eleganceDescription}>
                Designed by the visionary Capricorn Group, Vaadi Lake Mulshi transcends the concept of a residence to become an extraordinary
                experience. With private courtyards, shimmering pools, elegant pavilions, and thoughtfully crafted outdoor spaces, every detail
                is tailored to enhance your lifestyle. This sanctuary seamlessly merges the beauty of nature with impeccable design, offering a
                timeless retreat perfectly aligned with your aspirations.
              </p>
            </div>
            <img src={vaadiEmblem} alt="Vaadi Lake Mulshi Emblem" className={styles.eleganceEmblem} />
          </div>
        </section>

        {/* Amenities Section */}
        <AmenitiesCarousel />

        {/* Map Section */}
        <section className={styles.mapSection}>
          <iframe
            className={styles.mapIframe}
            title="Vaadi Estate Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171094.0518156239!2d73.2958690276414!3d18.633444519632093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be81db9477d301f%3A0xbe733eea59b0c335!2sVaadi!5e0!3m2!1sen!2sin!4v1736617116320!5m2!1sen!2sin"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        {/* Fresh Perspective Section */}
        <section className={styles.freshSection}>
          <div className={styles.freshAccent} aria-hidden="true" />
          <img src={freshPerspectiveImage} alt="A Fresh Perspective on Living" className={styles.freshImage} />
          <div className={styles.freshContent}>
            <p className={styles.freshKicker}>Vaadi Lake Mulshi</p>
            <h2 className={styles.freshTitle}>A Fresh Perspective on Living</h2>
            <p className={styles.freshDescription}>
              Vaadi Lake Mulshi sets a new benchmark for outdoor living, offering a seamless integration of luxury, functionality, and
              aesthetic brilliance. Every space is thoughtfully crafted to enhance your connection with the outdoors. The attention to detail
              extends to every element—be it ambient lighting, premium materials, or architectural design—creating an environment that exudes
              sophistication and ease. Here, outdoor living transcends the ordinary, delivering a lifestyle that is as refined as it is effortless.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className={styles.footerWrap}>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default About;
