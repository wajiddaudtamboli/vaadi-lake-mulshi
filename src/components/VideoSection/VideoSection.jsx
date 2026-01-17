import React from 'react';
import './VideoSection.css';
import sectionVideo from '../../assets/Images for Landing Pages/Untitled video - Made with Clipchamp (7).mp4';

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
        <source src={sectionVideo} type="video/mp4" />
      </video>
      <div className="video-section__overlay"></div>
    </section>
  );
};

export default VideoSection;
