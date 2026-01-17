import React from 'react';
import './Founder.css';
import founderImg from '../../assets/Images for Landing Pages/file (45).jpg';

const Founder = () => {
  return (
    <section className="founder">
      {/* Left Side - Image */}
      <div className="founder__image">
        <img src={founderImg} alt="Mr. Kamal Khalia - Managing Director" />
      </div>

      {/* Right Side - Content */}
      <div className="founder__content">
        <p className="founder__badge">Vaadi Lake Mulshi By Capricorn</p>
        <h2 className="founder__title">An Estate Beyond<br/>Imagination</h2>
        <p className="founder__description">
          Vaadi Lake Mulshi is the realization of a visionary concept by Mr. Kamal Khalia, Managing Director of Capricorn Group. With a focus on harmonizing natural beauty and sophisticated living, he has meticulously conceptualized this project to set a new benchmark in luxury. The development exemplifies architectural brilliance and sustainable practices. Each villa reflects his unwavering commitment to creating residences that seamlessly integrate elegance, comfort, and environmental harmony.
        </p>
      </div>
    </section>
  );
};

export default Founder;
