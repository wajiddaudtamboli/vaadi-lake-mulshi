import React from 'react';
import './VillaShowcase.css';
import estateImgB from '../../assets/Images for Landing Pages/B001.svg';

const VillaShowcase = () => {
  return (
    <section className="villa-showcase">
      {/* Left Side - Image */}
      <div className="villa-showcase__image">
        
        <img src={estateImgB} alt="Vaadi Estate B" className="villa-showcase__image-b" />
      </div>

      {/* Right Side - Content */}
      <div className="villa-showcase__content">
        <p className="villa-showcase__badge">Elevated Natural Bliss</p>
        <h2 className="villa-showcase__title">Vaadi Estate</h2>
        <p className="villa-showcase__description">
          Meticulously crafted villas to experience luxe, every element offers an immersive experience of opulence and tranquility, redefining the art of luxurious living.
        </p>
      </div>
    </section>
  );
};

export default VillaShowcase;
