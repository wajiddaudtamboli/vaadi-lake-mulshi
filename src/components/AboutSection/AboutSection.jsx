import React from 'react';
import './AboutSection.css';
import aboutVideo from '../../assets/Images for Landing Pages/vaadi_video.mp4';
import fullLogo from '../../assets/Images for Landing Pages/Vaadi Logo PNG 002.png';

const AboutSection = () => {
  return (
    <section className="about" id="vaadi">
      {/* Full-width Background Video */}
      <div className="about__background">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="about__video"
        >
          <source src={aboutVideo} type="video/mp4" />
        </video>
      </div>

      {/* Floating White Card - Positioned Right */}
      <div className="about__card">
        {/* Full Logo with Icon + VAADI + LAKE MULSHI */}
        <div className="about__logo">
          <img src={fullLogo} alt="Vaadi Lake Mulshi" className="about__logo-full" />
        </div>

        {/* Description */}
        <p className="about__description">
          Nestled amidst the pristine landscapes of Mulshi, the serene lake reflects the endless sky, creating a canvas of tranquility. Surrounded by lush forests and gentle hills, this is a place where every moment feels like nature's embrace. Every breath carries the earthy scent of greenery, and the gentle whispers of the breeze weave a soothing melody for your soul.
        </p>

        {/* CTA Button */}
        <a href="#contact" className="about__cta">GET MORE INFO</a>
      </div>
    </section>
  );
};

export default AboutSection;
