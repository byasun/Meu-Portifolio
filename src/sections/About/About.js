import React from 'react';
import { aboutData } from '../../data';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-content">
          <div className="about-text slide-in-left">
            {aboutData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <a href={aboutData.cvLink} className="btn" target="_blank" rel="noopener noreferrer">Download CV</a>
          </div>
          <div className="about-image slide-in-right">
            <img src={aboutData.avatar} alt={aboutData.title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;