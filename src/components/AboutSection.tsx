import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content fade-in">
          <div className="section-title-wrapper">
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="about-text">
            <p>
              Hi, I'm <strong>TJ</strong>, a <strong>19-year-old self-taught programmer</strong> from Finland with a background in the <strong>military</strong>. 
              I've been programming for <strong>3–4 years</strong>, primarily as a hobby. Currently, I'm in my first year of 
              <strong> software engineering at university</strong>.
            </p>
            <p>
              I'm passionate about <strong>learning new technologies</strong>, <strong>building projects</strong>, and improving my skills 
              through hands-on experience. My journey in programming started with <strong>curiosity</strong> and has evolved 
              into a deep passion for creating <strong>meaningful solutions</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 