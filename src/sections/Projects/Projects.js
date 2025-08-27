import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  
  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'backend', name: 'Backend' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'unity', name: 'Unity' }
  ];
  
  const projects = [
    { 
      id: 1, 
      title: 'Sistema de API REST', 
      description: 'Desenvolvimento de uma API robusta para gerenciamento de dados com autenticação JWT e documentação Swagger.', 
      image: '/images/projeto1.jpg', 
      categories: ['backend'],
      technologies: ['Python', 'Flask', 'MongoDB'],
      link: '#',
      github: '#'
    },
    { 
      id: 2, 
      title: 'Modelo de Previsão de Demanda', 
      description: 'Modelo de machine learning para prever demandas de produtos usando séries temporais e Random Forest.', 
      image: '/images/projeto2.jpg', 
      categories: ['ml'],
      technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
      link: '#',
      github: '#'
    },
    { 
      id: 3, 
      title: 'Simulador de Treinamento VR', 
      description: 'Simulador desenvolvido na Unity para treinamento de funcionários em realidade virtual.', 
      image: '/images/projeto3.jpg', 
      categories: ['unity'],
      technologies: ['C#', 'Unity', 'Blender'],
      link: '#',
      github: '#'
    }
  ];
  
  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));
  
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Meus Projetos</h2>
        
        <div className="project-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="projects-container">
          {filteredProjects.map((project, index) => (
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