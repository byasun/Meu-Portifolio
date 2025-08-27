import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Olá, eu sou <span>Anna Clara</span></h1>
          <p>Desenvolvedora Backend | Machine Learning | Unity</p>
          <div className="hero-btns">
            <a href="#projects" className="btn">Ver Projetos</a>
            <a href="#contact" className="btn btn-outline">Entrar em Contato</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;