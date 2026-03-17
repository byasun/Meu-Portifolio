import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projectsData } from '../../data';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Meus Projetos</h2>
        
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;