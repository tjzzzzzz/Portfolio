import React from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-content fade-in">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <div className="contact-details">
                <h3>Discord</h3>
                <p>tj88888</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 