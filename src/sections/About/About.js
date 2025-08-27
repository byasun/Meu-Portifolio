import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-content">
          <div className="about-text slide-in-left">
            <p>Olá! Meu nome é [Seu Nome] e sou uma desenvolvedora com experiência em backend, machine learning e desenvolvimento Unity.</p>
            <p>Minha jornada na programação começou com [sua história]. Ao longo dos anos, trabalhei em diversos projetos desafiadores, desde APIs robustas até soluções de inteligência artificial e simuladores de treinamento.</p>
            <p>Quando não estou codando, gosto de [seus hobbies/interesses].</p>
            <a href="/cv.pdf" className="btn" target="_blank" rel="noopener noreferrer">Download CV</a>
          </div>
          <div className="about-image slide-in-right">
            <img src="/images/avatar.jpg" alt="Sua Foto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;