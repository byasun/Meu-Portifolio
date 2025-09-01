import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/byasun" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/anna-clara-gomes-silva-sousa-687b57185/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/byasun1?igsh=MXQ1dnp2YnNiZHkzYw==" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Anna Clara. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;