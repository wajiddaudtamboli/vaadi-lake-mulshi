import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Images for Landing Pages/Vaadi Logo PNG 003.png';
import capricornLogo from '../../assets/Images for Landing Pages/Frame 33380.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Left - Logo */}
      <div className="navbar__logo">
        <img src={logo} alt="Vaadi Lake Mulshi" className="navbar__logo-img" />
      </div>

      {/* Right - Navigation Links + Partner Section */}
      <nav className={`navbar__nav ${mobileMenuOpen ? 'navbar__nav--open' : ''}`}>
        <a href="#home" className="navbar__link">HOME</a>
        <a href="#vaadi" className="navbar__link">VAADI</a>
        <a href="#amenities" className="navbar__link">AMENITIES</a>
        <a href="#blogs" className="navbar__link">BLOGS</a>
        <a href="#contact" className="navbar__link">CONTACT</a>
        <div className="navbar__partner-section">
          <img src={capricornLogo} alt="Capricorn" className="navbar__capricorn" />
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="navbar__mobile-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Navbar;
