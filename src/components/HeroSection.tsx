import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            TJ – <span className="highlight">Game/Website Developer</span>
          </h1>
          <p className="hero-subtitle">
            Building cool stuff with code. Focused on Minecraft, Backend systems, and real-world projects.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
    </section>
  );
};

export default HeroSection; 