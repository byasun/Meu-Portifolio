import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">MeuPortfólio</a>
          <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Início</a></li>
            <li><a href="#about" onClick={closeMenu}>Sobre</a></li>
            <li><a href="#skills" onClick={closeMenu}>Habilidades</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projetos</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;