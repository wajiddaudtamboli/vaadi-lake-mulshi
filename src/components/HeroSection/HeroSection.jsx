import React from 'react';
import './HeroSection.css';
import { useBookMeeting } from '../../context/BookMeetingContext';
import homeVaadiPoster from '../../assets/Images for Landing Pages/home-vaadi.png';

const HeroSection = () => {
  const { openModal } = useBookMeeting();

  return (
    <section className="hero" id="home">
      {/* Left Side - Hero Image */}
      <div className="hero__video">
        <video
          className="hero__video-player"
          src="https://vaadi.in/hero1.mp4"
          poster={homeVaadiPoster}
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
        <button type="button" className="hero__cta" onClick={openModal}>BOOK NOW</button>
      </div>

    </section>
  );
};

export default HeroSection;
