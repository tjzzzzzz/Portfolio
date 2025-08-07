import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import TypewriterText from './TypewriterText';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useMagneticEffect } from '../hooks/useMagneticEffect';
const HeroSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
  });
  const magneticRef = useMagneticEffect<HTMLButtonElement>({ strength: 0.2, distance: 150 });
  const magneticRefContact = useMagneticEffect<HTMLButtonElement>({ strength: 0.2, distance: 150 });
  const [showSecondLine, setShowSecondLine] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondLine(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="hero-section" ref={elementRef}>
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title neon-text">
            <div className="title-line">
              <TypewriterText 
                text="tj88888" 
                speed={80}
                className="typewriter-name"
              />
            </div>
            {showSecondLine && (
              <div className="title-line">
                <TypewriterText 
                  text="Game/Website Developer" 
                  speed={80}
                  className="typewriter-title"
                />
              </div>
            )}
          </h1>
          <p className="hero-subtitle fade-in-up">
            Building cool stuff with code. Focused on Minecraft, Backend systems, and real-world projects.
          </p>
          <div className="hero-buttons fade-in-up">
            <button 
              ref={magneticRef}
              className="btn btn-primary glow"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </button>
            <button 
              ref={magneticRefContact}
              className="btn btn-primary glow"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection; 