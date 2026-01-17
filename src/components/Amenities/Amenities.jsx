import React, { useRef, useEffect, useState, useCallback } from 'react';
import './Amenities.css';
import img1 from '../../assets/Images for Landing Pages/14.png';
import img2 from '../../assets/Images for Landing Pages/16.png';
import img3 from '../../assets/Images for Landing Pages/3.png';
import img4 from '../../assets/Images for Landing Pages/19.png';
import img5 from '../../assets/Images for Landing Pages/15.png';
import img6 from '../../assets/Images for Landing Pages/17.png';
import img7 from '../../assets/Images for Landing Pages/18.png';
import img8 from '../../assets/Images for Landing Pages/11.png';
import img9 from '../../assets/Images for Landing Pages/20.png';
import img10 from '../../assets/Images for Landing Pages/file (40).jpg';
import img11 from '../../assets/Images for Landing Pages/file (42).jpg';
import img12 from '../../assets/Images for Landing Pages/file (44).jpg';
import img13 from '../../assets/Images for Landing Pages/13.png';
import img14 from '../../assets/Images for Landing Pages/6.png';
import img15 from '../../assets/Images for Landing Pages/file (43).jpg';
import img16 from '../../assets/Images for Landing Pages/13.png';
import img17 from '../../assets/Images for Landing Pages/21.png';
import img18 from '../../assets/Images for Landing Pages/23.png';
import img19 from '../../assets/Images for Landing Pages/25.png';
import img20 from '../../assets/Images for Landing Pages/22.png';
import img21 from '../../assets/Images for Landing Pages/24.png';

const images = [null, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21];

const amenitiesData = [
  { id: 1, name: 'Visitor Parking', row: 1, size: 'tall' },
  { id: 2, name: 'Remote Control Car Tracks', row: 1, size: 'wide' },
  { id: 3, name: 'Themed Climbing Wall', row: 1, size: 'tall' },
  { id: 4, name: 'Medical Facility', row: 1, size: 'normal' },
  { id: 5, name: 'Business Lounge', row: 2, size: 'normal' },
  { id: 6, name: 'Exclusive Concierge Service', row: 2, size: 'normal' },
  { id: 7, name: 'Organic Farm', row: 2, size: 'wide' },
  { id: 8, name: 'Bungee Trampoline', row: 2, size: 'normal' },
  { id: 9, name: 'Helipad', row: 1, size: 'tall' },
  { id: 10, name: 'Pet Park', row: 1, size: 'wide' },
  { id: 11, name: 'Kids Play Area', row: 1, size: 'normal' },
  { id: 12, name: 'Fine Dining Restaurant', row: 1, size: 'normal' },
  { id: 13, name: 'Jogging Track', row: 2, size: 'normal' },
  { id: 14, name: 'Wellness Retreat Zones', row: 2, size: 'normal' },
  { id: 15, name: 'Spiritual Arena', row: 2, size: 'normal' },
  { id: 16, name: 'Luxury Gymnasium', row: 2, size: 'normal' },
  { id: 17, name: 'Bungee Ramp', row: 1, size: 'normal' },
  { id: 18, name: 'Horse Stable & Related Areas', row: 1, size: 'wide' },
  { id: 19, name: 'ATV Training Area', row: 1, size: 'normal' },
  { id: 20, name: 'Library & Office', row: 2, size: 'wide' },
  { id: 21, name: 'Water Body', row: 2, size: 'normal' },
];

const row1Data = amenitiesData.filter(a => a.row === 1);
const row2Data = amenitiesData.filter(a => a.row === 2);

const CARD_WIDTH = 280;
const CARD_GAP = 16;
const CARD_TOTAL_WIDTH = CARD_WIDTH + CARD_GAP;

const Amenities = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [row1Order, setRow1Order] = useState(row1Data.map((_, i) => i));
  const [row2Order, setRow2Order] = useState(row2Data.map((_, i) => i));
  const offset1Ref = useRef(0);
  const offset2Ref = useRef(0);
  const animationRef = useRef(null);

  const animate = useCallback(() => {
    if (!isPaused) {
      // Row 1 moves left
      offset1Ref.current -= 1.2;
      // Row 2 moves left (same direction)
      offset2Ref.current -= 1.2;

      if (Math.abs(offset1Ref.current) >= CARD_TOTAL_WIDTH) {
        offset1Ref.current = 0;
        setRow1Order(prev => {
          const newOrder = [...prev];
          const first = newOrder.shift();
          newOrder.push(first);
          return newOrder;
        });
      }

      if (Math.abs(offset2Ref.current) >= CARD_TOTAL_WIDTH) {
        offset2Ref.current = 0;
        setRow2Order(prev => {
          const newOrder = [...prev];
          const first = newOrder.shift();
          newOrder.push(first);
          return newOrder;
        });
      }

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset1Ref.current}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${offset2Ref.current}px)`;
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  return (
    <section className="amenities" id="amenities">
      <div className="amenities__header">
        <p className="amenities__badge">Vaadi Lake Mulshi</p>
        <h2 className="amenities__title">Amenities That Redefine Excellence</h2>
        <p className="amenities__description">
          Vaadi Lake Mulshi offers an exceptional array of meticulously designed amenities, thoughtfully curated to enrich every aspect of your lifestyle. From state-of-the-art wellness and recreation facilities to spaces for relaxation and indulgence, each feature reflects a commitment to excellence. Here, luxury transcends the ordinary, delivering an unparalleled experience of comfort, convenience, and exclusivity.
        </p>
      </div>

      <div 
        className="amenities__carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Row 1 */}
        <div className="amenities__row">
          <div className="amenities__track" ref={row1Ref}>
            {row1Order.map((index) => {
              const amenity = row1Data[index];
              return (
                <div key={amenity.id} className={`amenity-card amenity-card--${amenity.size}`}>
                  <img src={images[amenity.id]} alt={amenity.name} className="amenity-card__image" />
                  <div className="amenity-card__overlay"></div>
                  <div className="amenity-card__content">
                    <span className="amenity-card__label">EXPLORE</span>
                    <h3 className="amenity-card__title">{amenity.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2 */}
        <div className="amenities__row">
          <div className="amenities__track" ref={row2Ref}>
            {row2Order.map((index) => {
              const amenity = row2Data[index];
              return (
                <div key={amenity.id} className={`amenity-card amenity-card--${amenity.size}`}>
                  <img src={images[amenity.id]} alt={amenity.name} className="amenity-card__image" />
                  <div className="amenity-card__overlay"></div>
                  <div className="amenity-card__content">
                    <span className="amenity-card__label">EXPLORE</span>
                    <h3 className="amenity-card__title">{amenity.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="amenities__cta-wrapper">
        <a href="#contact" className="amenities__cta">SCHEDULE YOUR EXCLUSIVE VISIT</a>
      </div>
    </section>
  );
};

export default Amenities;
