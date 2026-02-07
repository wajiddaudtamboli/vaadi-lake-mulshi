import React from 'react';
import './ReimagineLiving.css';
import reimagineImg from '../../assets/Images for Landing Pages/above_footer.png';

const ReimagineLiving = () => {
  return (
    <section className="reimagine-section">
      <img src={reimagineImg} alt="Reimagine Living" className="reimagine-image" />
      <div className="reimagine-overlay"></div>
      
     
    </section>
  );
};

export default ReimagineLiving;
