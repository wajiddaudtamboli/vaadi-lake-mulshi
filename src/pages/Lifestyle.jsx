import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import styles from './Lifestyle.module.css';
import heroImage from '../assets/lifestyle/lifestyle-hero.png';

const Lifestyle = () => {
  // Update meta tags for SEO
  useEffect(() => {
    // Update title
    document.title = 'Luxury Amenities at Vaadi villas – Wellness, Nature & More';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'From a private gym and pet park to yoga pavilions, forest trails, and outdoor lounges - Vaadi offers thoughtfully designed amenities to elevate your everyday living.');
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://vaadi.in/amenities');
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Luxury Amenities at Vaadi villas – Wellness, Nature & More');
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', 'From a private gym and pet park to yoga pavilions, forest trails, and outdoor lounges - Vaadi offers thoughtfully designed amenities to elevate your everyday living.');
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://vaadi.in/amenities');
  }, []);

  return (
    <main className={styles.lifestylePage}>
      <section className={styles.hero}>
        <img src={heroImage} alt="Vaadi Lake Mulshi" className={styles.heroImage} />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <Navbar />
      </section>
      <Amenities />
      <Gallery />
      <Footer />
    </main>
  );
};

export default Lifestyle;
