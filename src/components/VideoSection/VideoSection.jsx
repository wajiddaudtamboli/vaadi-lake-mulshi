import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video-section" id="video">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="video-section__bg"
      >
        <source src="https://drive.google.com/uc?export=download&id=1zdAbRT9YxFEHK8WVo_9AjhyMbRL5cOo-" type="video/mp4" />
      </video>
      <div className="video-section__overlay"></div>
    </section>
  );
};

export default VideoSection;
