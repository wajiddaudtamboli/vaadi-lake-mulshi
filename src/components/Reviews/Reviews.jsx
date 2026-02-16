import React, { useState } from 'react';
import './Reviews.css';

const reviewImg1 = "https://img.freepik.com/free-photo/happy-smiling-long-haired-woman-with-big-blue-eyes-red-shirt-grey-coat-walks-near-sea_291650-354.jpg";
const reviewImg2 = "https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg";
const reviewImg3 = "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg";
const reviewImg4 = "https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg";

const Reviews = () => {
  // All testimonials data
  const allTestimonials = [
    {
      id: 1,
      image: reviewImg1,
      quote: "Vaadi Lake Mulshi is an absolute paradise! The serene lake views, lush greenery, and world-class amenities make it the perfect escape from city life. Truly a luxury retreat.",
      name: "Alice Joseph",
      role: "Tourist"
    },
    {
      id: 2,
      image: reviewImg2,
      quote: "The attention to detail at Vaadi is exceptional. From the thoughtfully designed villas to the premium amenities, every aspect reflects unparalleled excellence.",
      name: "Sumit Dorle",
      role: "Business Owner"
    },
    {
      id: 3,
      image: reviewImg3,
      quote: "A perfect blend of luxury and nature. The peaceful surroundings and top-notch facilities exceeded all my expectations. Highly recommended!",
      name: "Rahul Mehta",
      role: "Architect"
    },
    {
      id: 4,
      image: reviewImg4,
      quote: "Vaadi offers an unmatched living experience. The community, amenities, and natural beauty create a perfect harmony. Best decision I ever made!",
      name: "Vikram Patel",
      role: "Entrepreneur"
    }
  ];

  // State to track current index for each card (card 1 and card 2)
  const [cardIndices, setCardIndices] = useState([0, 1]);
  const [isAnimating, setIsAnimating] = useState([false, false]);

  // Get next available index that's not used by the other card
  const getNextIndex = (currentIndex, otherCardIndex, direction) => {
    const otherIndex = cardIndices[otherCardIndex];
    let newIndex = currentIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % allTestimonials.length;
      // Skip if it's the same as the other card
      if (newIndex === otherIndex) {
        newIndex = (newIndex + 1) % allTestimonials.length;
      }
    } else {
      newIndex = (currentIndex - 1 + allTestimonials.length) % allTestimonials.length;
      // Skip if it's the same as the other card
      if (newIndex === otherIndex) {
        newIndex = (newIndex - 1 + allTestimonials.length) % allTestimonials.length;
      }
    }
    
    return newIndex;
  };

  const handlePrev = (cardIndex) => {
    if (isAnimating[cardIndex]) return;
    
    const otherCardIndex = cardIndex === 0 ? 1 : 0;
    
    setIsAnimating(prev => {
      const newState = [...prev];
      newState[cardIndex] = true;
      return newState;
    });

    setTimeout(() => {
      setCardIndices(prev => {
        const newIndices = [...prev];
        newIndices[cardIndex] = getNextIndex(prev[cardIndex], otherCardIndex, 'prev');
        return newIndices;
      });
      
      setTimeout(() => {
        setIsAnimating(prev => {
          const newState = [...prev];
          newState[cardIndex] = false;
          return newState;
        });
      }, 50);
    }, 200);
  };

  const handleNext = (cardIndex) => {
    if (isAnimating[cardIndex]) return;
    
    const otherCardIndex = cardIndex === 0 ? 1 : 0;
    
    setIsAnimating(prev => {
      const newState = [...prev];
      newState[cardIndex] = true;
      return newState;
    });

    setTimeout(() => {
      setCardIndices(prev => {
        const newIndices = [...prev];
        newIndices[cardIndex] = getNextIndex(prev[cardIndex], otherCardIndex, 'next');
        return newIndices;
      });
      
      setTimeout(() => {
        setIsAnimating(prev => {
          const newState = [...prev];
          newState[cardIndex] = false;
          return newState;
        });
      }, 50);
    }, 200);
  };

  return (
    <section className="reviews" id="reviews">
      {/* Header */}
      <div className="reviews__header">
        <p className="reviews__badge">What Our Residents Say</p>
        <h2 className="reviews__title">Testimonials</h2>
      </div>

      {/* Content - Two Cards */}
      <div className="reviews__grid">
        {[0, 1].map((cardIndex) => {
          const testimonial = allTestimonials[cardIndices[cardIndex]];
          return (
            <div key={cardIndex} className="reviews__card">
              {/* Left - Image */}
              <div className={`reviews__image ${isAnimating[cardIndex] ? 'reviews__image--animating' : ''}`}>
                <img src={testimonial.image} alt={testimonial.name} />
              </div>

              {/* Right - Testimonial */}
              <div className={`reviews__testimonial ${isAnimating[cardIndex] ? 'reviews__testimonial--animating' : ''}`}>
                {/* Stars */}
                <div className="reviews__stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="reviews__star">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="reviews__quote">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="reviews__author">
                  <span className="reviews__author-name">{testimonial.name}</span>
                  <span className="reviews__author-separator">•</span>
                  <span className="reviews__author-role">{testimonial.role}</span>
                </div>

                {/* Navigation */}
                <div className="reviews__nav">
                  <button 
                    className="reviews__nav-btn reviews__nav-btn--prev" 
                    aria-label="Previous"
                    onClick={() => handlePrev(cardIndex)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button 
                    className="reviews__nav-btn reviews__nav-btn--next" 
                    aria-label="Next"
                    onClick={() => handleNext(cardIndex)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reviews;
