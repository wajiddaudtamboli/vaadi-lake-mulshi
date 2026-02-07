import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      {/* Left Side - Hero Image */}
      <div className="hero__video">
        <video
          className="hero__video-player"
          src="https://vaadi.in/hero1.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>

      {/* Right Side - Content */}
      <div className="hero__content">
        <span className="hero__badge">Embrace</span>
        <h1 className="hero__title">Symphony of<br />Nature</h1>
        <p className="hero__description">
          Immerse yourself in the harmonious blend of serene lakes, lush greenery, and the unspoiled beauty of Vaadi Lake Mulshi, where nature's melody rejuvenates your soul.
        </p>
        <Link to="/book-meeting" className="hero__cta">BOOK NOW</Link>
      </div>

    </section>
  );
};

export default HeroSection;
