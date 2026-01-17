import React from 'react';
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

const LandingPage = () => {
  return (
    <>
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
      <GoogleReviews />
      <ReimagineLiving />
      <Footer />
    </>
  );
};

export default LandingPage;
