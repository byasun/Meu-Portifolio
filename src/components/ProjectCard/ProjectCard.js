import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  return (
    <div className="project fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
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