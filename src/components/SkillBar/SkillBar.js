import React, { useState, useEffect } from 'react';
import './SkillBar.css';

const SkillBar = ({ name, level, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className="skill-item fade-in">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: isVisible ? `${level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;