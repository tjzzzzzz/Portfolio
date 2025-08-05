import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content fade-in">
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>
              Hi, I'm TJ, a 19-year-old self-taught programmer from Finland with a background in the military. 
              I've been programming for 3–4 years, primarily as a hobby. Currently, I'm in my first year of 
              software engineering at university.
            </p>
            <p>
              I'm passionate about learning new technologies, building projects, and improving my skills 
              through hands-on experience. My journey in programming started with curiosity and has evolved 
              into a deep passion for creating meaningful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 