import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const hasLinks = project.link || project.github;
  
  return (
    <div className="project fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        {hasLinks && (
          <div className="project-overlay">
            <div className="project-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;