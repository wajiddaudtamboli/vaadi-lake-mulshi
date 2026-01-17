import React from 'react';
import './ReimagineLiving.css';
import reimagineImg from '../../assets/Images for Landing Pages/above_footer.png';

const ReimagineLiving = () => {
  return (
    <section className="reimagine-section">
      <img src={reimagineImg} alt="Reimagine Living" className="reimagine-image" />
      <div className="reimagine-overlay"></div>
      
      <div className="reimagine-nav">
        <button className="reimagine-nav-btn" aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="reimagine-nav-btn" aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      
  
    </section>
  );
};

export default ReimagineLiving;
