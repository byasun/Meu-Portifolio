import React from 'react';
import Header from './components/Header/Header';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './App.css';

function App() {
  useScrollAnimation();
  
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;