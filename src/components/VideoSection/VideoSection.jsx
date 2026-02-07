import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video-section" id="video">
      <div className="video-section__bg">
        <video
          className="video-section__video"
          src="https://vaadi.in/capricorn-mulshi-vaadi.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
      <div className="video-section__overlay"></div>
    </section>
  );
};

export default VideoSection;
