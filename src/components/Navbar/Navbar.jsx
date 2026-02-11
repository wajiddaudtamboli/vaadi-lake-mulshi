import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoDefault from '../../assets/Images for Landing Pages/Vaadi Logo PNG 003.png';
import logoAlt from '../../assets/Images for Landing Pages/Vaadi Logo PNG 002.png';
import capricornLogo from '../../assets/Images for Landing Pages/Frame 33380.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const useAltLogo =
    location.pathname === '/contact' ||
    location.pathname === '/blogs' ||
    location.pathname.startsWith('/blogs/');

  return (
    <header className="navbar">
      {/* Left - Logo */}
      <div className="navbar__logo">
        <img
          src={useAltLogo ? logoAlt : logoDefault}
          alt="Vaadi Lake Mulshi"
          className="navbar__logo-img"
        />
      </div>

      {/* Right - Navigation Links + Partner Section */}
      <nav className={`navbar__nav ${mobileMenuOpen ? 'navbar__nav--open' : ''}`}>
        <Link to="/" className="navbar__link" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
        <Link to="/about" className="navbar__link" onClick={() => setMobileMenuOpen(false)}>VAADI</Link>
        <Link to="/lifestyle" className="navbar__link" onClick={() => setMobileMenuOpen(false)}>LIFESTYLE</Link>
        <Link to="/contact" className="navbar__link" onClick={() => setMobileMenuOpen(false)}>BLOGS</Link>
        <Link to="/contact" className="navbar__link" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
        <div className="navbar__partner-section">
          <img src={capricornLogo} alt="Capricorn" className="navbar__capricorn" />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="navbar__overlay" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Button */}
      <button 
        className={`navbar__mobile-btn ${mobileMenuOpen ? 'navbar__mobile-btn--open' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setMobileMenuOpen(!mobileMenuOpen);
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setMobileMenuOpen(!mobileMenuOpen);
        }}
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Navbar;
