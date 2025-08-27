import React from 'react';
import SkillBar from '../../components/SkillBar/SkillBar';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Azure', level: 80 },
    { name: 'MongoDB', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Unity', level: 75 },
    { name: 'C#', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'Node.js', level: 70 },
    { name: 'PI AF', level: 50 }
  ];
  
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Minhas Habilidades</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <SkillBar 
              key={index} 
              name={skill.name} 
              level={skill.level} 
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;