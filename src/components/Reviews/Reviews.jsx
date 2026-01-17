import React from 'react';
import './Reviews.css';
import reviewImg from '../../assets/Images for Landing Pages/Testimol.png';

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      {/* Header */}
      <div className="reviews__header">
        <p className="reviews__badge">Elevated Natural Bliss</p>
        <h2 className="reviews__title">Testimonials</h2>
      </div>

      {/* Content */}
      <div className="reviews__content">
        {/* Left - Image */}
        <div className="reviews__image">
          <img src={reviewImg} alt="Happy Customer" />
        </div>

        {/* Right - Testimonial */}
        <div className="reviews__testimonial">
          {/* Stars */}
          <div className="reviews__stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="reviews__star">★</span>
            ))}
          </div>

          {/* Quote */}
          <p className="reviews__quote">
            The product's flexibility and customization options are outstanding. It adapts perfectly to our unique needs.
          </p>

          {/* Author */}
          <div className="reviews__author">
            <span className="reviews__author-name">Victoria parrish</span>
            <span className="reviews__author-separator">•</span>
            <span className="reviews__author-role">Project Manager</span>
          </div>

          {/* Navigation */}
          <div className="reviews__nav">
            <button className="reviews__nav-btn reviews__nav-btn--prev" aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="reviews__nav-btn reviews__nav-btn--next" aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
