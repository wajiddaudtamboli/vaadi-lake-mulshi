import React from 'react';
import './WelcomeSection.css';
import welcomeImg from '../../assets/Images for Landing Pages/A001.svg';

const WelcomeSection = () => {
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

      {/* Right Side - Image with Labels */}
      <div className="welcome__image">
        <img src={welcomeImg} alt="Vaadi Lake Mulshi Aerial View" />
       
        <div className="welcome__nav">
          <button className="welcome__nav-btn">&lt;</button>
          <button className="welcome__nav-btn">&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
