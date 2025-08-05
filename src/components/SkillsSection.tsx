import React from 'react';
import './SkillsSection.css';

const SkillsSection: React.FC = () => {
  const programmingLanguages = [
    'Java', 'JavaScript', 'Lua', 'C# (Still Learning)', 
    'SourcePawn', 'SQL (Basic–Intermediate)', 'Python', 'HTML/CSS'
  ];

  const toolsAndTech = [
    'MongoDB', 'Redis', 'Paper API', 
    'Networking Protocols', 'Backend/Server Management'
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-content fade-in">
          <h2 className="section-title">Skills & Tools</h2>
          <div className="skills-grid">
            <div className="skills-column">
              <h3 className="skills-category">Programming Languages</h3>
              <div className="skills-list">
                {programmingLanguages.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-badge">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skills-column">
              <h3 className="skills-category">Tools & Tech</h3>
              <div className="skills-list">
                {toolsAndTech.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-badge">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="skills-philosophy fade-in">
            <p>
              I don't believe anyone becomes a 'perfect' programmer — and I'm no exception. 
              What sets me apart is my dedication to learning and growing through real projects 
              and constant practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 