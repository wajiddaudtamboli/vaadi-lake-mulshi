import React from 'react';
import './MasterPlan.css';
import mapImg from '../../assets/Images for Landing Pages/Frame 33380.png';

const MasterPlan = () => {
  return (
    <section className="masterplan">
      {/* Full-width Map Image */}
      <div className="masterplan__image">
        <img src={mapImg} alt="Vaadi Lake Mulshi Master Plan" />
      </div>
    </section>
  );
};

export default MasterPlan;
