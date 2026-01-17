import React, { useState } from 'react';
import './GoogleReviews.css';
import p1 from '../../assets/Images for Landing Pages/p1.png';
import p2 from '../../assets/Images for Landing Pages/p2.png';
import p3 from '../../assets/Images for Landing Pages/p3.png';

const REVIEWS = [
  {
    id: 1,
    stars: 5,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    author: 'Elisa Grant',
    role: 'Legacy Solutions Engineer',
    image: p1,
  },
  {
    id: 2,
    stars: 4.5,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    author: 'Elisa Grant',
    role: 'Legacy Solutions Engineer',
    image: p2,
  },
  {
    id: 3,
    stars: 5,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    author: 'Elisa Grant',
    role: 'Legacy Solutions Engineer',
    image: p3,
  }
];

const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : REVIEWS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < REVIEWS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="google-reviews" id="google-reviews">
      {/* Header */}
      <div className="google-reviews__header">
        <div className="google-reviews__logo">
          <span className="google-reviews__logo-text">Google</span>
          <div className="google-reviews__logo-sub">
            <span className="google-reviews__logo-label">Reviews</span>
            <div className="google-reviews__logo-rating">
              <span className="google-reviews__logo-score">5.0</span>
              <div className="google-reviews__logo-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="google-reviews__logo-star">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="google-reviews__carousel">
        {REVIEWS.map((review) => (
          <div key={review.id} className="review-item">
            {/* Photo Frame */}
            <div className="review-item__photo-frame">
              <img src={review.image} alt={review.author} className="review-item__photo" />
            </div>
            {/* Review Card */}
            <div className="review-card">
              <div className="review-card__content">
                <div className="review-card__rating">
                  <div className="review-card__stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="review-card__star">★</span>
                    ))}
                  </div>
                  <span className="review-card__rating-text">{review.stars} Rating</span>
                </div>
                <p className="review-card__text">{review.text}</p>
              </div>
              <div className="review-card__author">
                <p className="review-card__author-name">{review.author}</p>
                <p className="review-card__author-role">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="google-reviews__nav">
        <button className="google-reviews__nav-btn google-reviews__nav-btn--prev" aria-label="Previous" onClick={handlePrev}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="google-reviews__nav-btn google-reviews__nav-btn--next" aria-label="Next" onClick={handleNext}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default GoogleReviews;
