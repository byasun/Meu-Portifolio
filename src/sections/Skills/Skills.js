import React from 'react';
import SkillBar from '../../components/SkillBar/SkillBar';
import { skillsData } from '../../data';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Minhas Habilidades</h2>
        <div className="skills-grid">
          {skillsData.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className="skill-category fade-in">
              <h3 className="category-title">{skillCategory.category}</h3>
              <div className="skills-container">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    name={skill.name} 
                    level={skill.level} 
                    delay={(categoryIndex * 100) + (skillIndex * 50)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;