import React from 'react';
import './Footer.css';
import logo from '../../assets/Images for Landing Pages/Vaadi Logo PNG 003.png';
import scannerImg from '../../assets/Images for Landing Pages/scanner.png';
import capricornLogo from '../../assets/Images for Landing Pages/Frame 33380.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logos">
            <div className="footer-vaadi-logo">
              <img src={logo} alt="Vaadi Logo" className="footer-vaadi-icon" />
            </div>
            <div className="footer-qr">
              <img src={scannerImg} alt="QR Code" className="footer-qr-image" />
            </div>
          </div>
          <div className="footer-project-text">
            A PROJECT BY
            <strong>CAPRICORN GROUP INDIA</strong>
          </div>
        </div>

        {/* Corporate Office */}
        <div className="footer-column">
          <h4 className="footer-column-title">CORPORATE OFFICE</h4>
          <p>
            Capricorn Group,<br />
            192 Dhole Patil Road,<br />
            Pune, India- 411001
          </p>
        </div>

        {/* Site Address */}
        <div className="footer-column">
          <h4 className="footer-column-title">SITE ADDRESS</h4>
          <p>
            Vaadi Estate,<br />
            Lonavala Road<br />
            Village Shiravli,<br />
            Taluka, Mulshi,<br />
            Maharashtra<br />
            412108
          </p>
        </div>

        {/* International & India */}
        <div className="footer-column footer-contact">
          <h4 className="footer-column-title">INTERNATIONAL</h4>
          <a href="mailto:internationalsales@capricorngroup.co.in">
            internationalsales@capricorngroup.co.in
          </a>
          <a href="tel:+971505793490">+971 50 579 3490</a>
          
          <h4 className="footer-column-title footer-column-title--mt">INDIA</h4>
          <a href="mailto:vaadisales@capricorngroup.co.in">
            vaadisales@capricorngroup.co.in
          </a>
          <a href="tel:+919699800948" className="footer-phone-highlight">+91 9699800948</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div className="footer-capricorn-logo">
            <img src={capricornLogo} alt="Capricorn Logo" className="footer-capricorn-icon-img" />
          </div>
          <div className="footer-links">
            <span className="footer-copyright">©2024 CAPRICORN GROUP INDIA</span>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Disclaimer</a>
            <span className="footer-developed">Designed and Developed By IDEALIZEER</span>
          </div>
        </div>
        
        <div className="footer-social">
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="#0d1414"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
