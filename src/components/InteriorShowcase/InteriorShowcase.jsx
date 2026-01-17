import React from 'react';
import './InteriorShowcase.css';
import interiorImg from '../../assets/Images for Landing Pages/file (47).jpg';

const InteriorShowcase = () => {
  return (
    <section className="interior-showcase">
      {/* Left Side - Content */}
      <div className="interior-showcase__content">
        <p className="interior-showcase__badge">Schedule Your Exclusive Visit</p>
        <h2 className="interior-showcase__title">Luxe Living</h2>
        <p className="interior-showcase__description">
          Your dream villa awaits—crafted with exceptional precision and ready to offer an effortless blend of elegance and comfort. Designed for modern living, these homes ensure you transition seamlessly into a world of unparalleled luxury.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="interior-showcase__image">
        <img src={interiorImg} alt="Luxe Living Interior" />
        {/* Navigation Buttons */}
        <div className="interior-showcase__nav">
          <button className="interior-showcase__nav-btn" aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="interior-showcase__nav-btn" aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteriorShowcase;
