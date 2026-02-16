import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WelcomeSection from '../components/WelcomeSection';
import VillaShowcase from '../components/VillaShowcase';
import InteriorShowcase from '../components/InteriorShowcase';
import VideoSection from '../components/VideoSection';
import Amenities from '../components/Amenities';
import Founder from '../components/Founder';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import GoogleReviews from '../components/GoogleReviews';
import ReimagineLiving from '../components/ReimagineLiving';
import Footer from '../components/Footer';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  // Reset meta tags to home page on mount
  useEffect(() => {
    // Update title
    document.title = 'Luxury Lakeside Villas near Lonavala – Vaadi by Capricorn Group';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience timeless luxury at Vaadi Lake Mulshi. Discover limited-edition lakeside villas nestled in nature, just 45 minutes from Pune. Book your private visit today.');
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://vaadi.in/');
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Luxury Lakeside Villas near Lonavala – Vaadi by Capricorn Group');
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', 'Experience timeless luxury at Vaadi Lake Mulshi. Discover limited-edition lakeside villas nestled in nature, just 45 minutes from Pune. Book your private visit today.');
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://vaadi.in/');
  }, []);

  return (
    <div className={styles.landingPage}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WelcomeSection />
      <VillaShowcase />
      <InteriorShowcase />
      <VideoSection />
      <Amenities />
      <Founder />
      <Gallery />
      <Reviews />
      {/* <GoogleReviews /> */}
      <ReimagineLiving />
      <Footer />
    </div>
  );
};

export default LandingPage;
