import React from 'react';
import ParticleBackground from './ParticleBackground';
import './GlobalBackground.css';
const GlobalBackground: React.FC = () => {
  return (
    <div className="global-background">
      <ParticleBackground />
      <div className="floating-shapes">
        <div className="floating-shape floating-shape-1"></div>
        <div className="floating-shape floating-shape-2"></div>
        <div className="floating-shape floating-shape-3"></div>
        <div className="floating-shape floating-shape-4"></div>
        <div className="floating-shape floating-shape-5"></div>
        <div className="floating-shape floating-shape-6"></div>
        <div className="floating-shape floating-shape-7"></div>
        <div className="floating-shape floating-shape-8"></div>
      </div>
    </div>
  );
};
export default GlobalBackground; 