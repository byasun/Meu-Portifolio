import React from 'react';
import SkillBar from '../../components/SkillBar/SkillBar';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'C#', level: 80 },
    { name: 'SQL', level: 85 },
    { name: 'TensorFlow', level: 75 },
    { name: 'Unity', level: 80 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 }
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