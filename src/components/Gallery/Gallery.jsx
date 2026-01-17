import React from 'react';
import './Gallery.css';
import gallery1 from '../../assets/Images for Landing Pages/1.png';
import gallery2 from '../../assets/Images for Landing Pages/3.png';
import gallery3 from '../../assets/Images for Landing Pages/5.png';
import gallery4 from '../../assets/Images for Landing Pages/7.png';
import gallery5 from '../../assets/Images for Landing Pages/2.png';
import gallery6 from '../../assets/Images for Landing Pages/4.png';
import gallery7 from '../../assets/Images for Landing Pages/6.png';
import gallery8 from '../../assets/Images for Landing Pages/8.png';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery__header">
        <p className="gallery__badge">Elevated Natural Bliss</p>
        <h2 className="gallery__title">Gallery</h2>
      </div>

      {/* First Grid */}
      <div className="gallery__grid">
        {/* Column 1 */}
        <div className="gallery__column">
          <div className="gallery__item gallery__item--tall">
            <img src={gallery1} alt="Gallery" />
            <div className="gallery__overlay">
              <p className="gallery__overlay-title">Effective product marketing</p>
              <p className="gallery__overlay-text">Lorem Ipsum is simply dummy</p>
            </div>
          </div>
          <div className="gallery__item gallery__item--medium">
            <img src={gallery5} alt="Gallery" />
            <div className="gallery__overlay">
              <p className="gallery__overlay-title">Effective product marketing</p>
              <p className="gallery__overlay-text">Lorem Ipsum is simply dummy</p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="gallery__column">
          <div className="gallery__item gallery__item--short">
            <img src={gallery2} alt="Gallery" />
            <div className="gallery__overlay">
              <p className="gallery__overlay-title">Effective product marketing</p>
              <p className="gallery__overlay-text">Lorem Ipsum is simply dummy</p>
            </div>
          </div>
          <div className="gallery__item gallery__item--tall">
            <img src={gallery6} alt="Gallery" />
            <div className="gallery__overlay">
              <p className="gallery__overlay-title">Effective product marketing</p>
              <p className="gallery__overlay-text">Lorem Ipsum is simply dummy</p>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="gallery__column">
          <div className="gallery__item gallery__item--tall">
            <img src={gallery3} alt="Gallery" />
            <div className="gallery__overlay">
              <p className="gallery__overlay-title">Effective product marketing</p>
              <p className="gallery__overlay-text">Lorem Ipsum is simply dummy</p>
            </div>
          </div>
          <div className="gallery__item gallery__item--short">
            <img src={gallery7} alt="Gallery" />
            <div className="gallery__overlay">
              <p className="gallery__overlay-title">Effective product marketing</p>
              <p className="gallery__overlay-text">Lorem Ipsum is simply dummy</p>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="gallery__column">
          <div className="gallery__item gallery__item--short">
            <img src={gallery4} alt="Gallery" />
            <div className="gallery__overlay">
              <p className="gallery__overlay-title">Effective product marketing</p>
              <p className="gallery__overlay-text">Lorem Ipsum is simply dummy</p>
            </div>
          </div>
          <div className="gallery__item gallery__item--tall">
            <img src={gallery8} alt="Gallery" />
            <div className="gallery__overlay">
              <p className="gallery__overlay-title">Effective product marketing</p>
              <p className="gallery__overlay-text">Lorem Ipsum is simply dummy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
