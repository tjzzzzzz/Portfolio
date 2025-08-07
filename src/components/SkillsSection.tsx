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
          <div className="section-title-wrapper">
            <h2 className="section-title">Skills & Tools</h2>
          </div>
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
              I don't believe anyone becomes a <strong>'perfect' programmer</strong> — and I'm no exception. 
              What sets me apart is my <strong>dedication to learning</strong> and <strong>growing</strong> through <strong>real projects</strong> 
              and <strong>constant practice</strong>. I'm not afraid to <strong>fail</strong> and <strong>learn from my mistakes</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection; 