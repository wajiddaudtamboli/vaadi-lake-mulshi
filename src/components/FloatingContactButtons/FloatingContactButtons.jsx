import React from 'react';
import './FloatingContactButtons.css';
import contactIcon from '../../assets/Images for Landing Pages/phone.svg';
import whatsappIcon from '../../assets/icons/whatsapp-outline.svg';

const FloatingContactButtons = () => {
  return (
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
  );
};

export default FloatingContactButtons;
