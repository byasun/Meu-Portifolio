import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { contactData } from '../../data';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href={contactData.social.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={contactData.social.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Anna Clara Gomes Silva Sousa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;