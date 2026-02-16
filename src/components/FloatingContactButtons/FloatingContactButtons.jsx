import React, { useState, useEffect } from 'react';
import './FloatingContactButtons.css';
import contactIcon from '../../assets/Images for Landing Pages/phone.svg';
import whatsappIcon from '../../assets/Images for Landing Pages/whatsapp.svg';

const FloatingContactButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top Button - Left Side */}
      <div className={`back-to-top ${showBackToTop ? 'back-to-top--visible' : ''}`}>
        <button
          onClick={scrollToTop}
          className="back-to-top__button"
          aria-label="Back to top"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>

      {/* Contact Buttons - Right Side */}
      <div className="floating-contact">
        <a
          href="tel:+919699800948"
          className="floating-contact__button"
          aria-label="Contact us by phone"
        >
          <img src={contactIcon} alt="" aria-hidden="true" />
        </a>
        <a
          href="https://wa.me/919699800948"
          className="floating-contact__button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <img src={whatsappIcon} alt="" aria-hidden="true" />
        </a>
      </div>
    </>
  );
};

export default FloatingContactButtons;
