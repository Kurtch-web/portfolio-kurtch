// src/components/Skills.jsx
import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  FaReact, FaJava, FaPython, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiVite, SiSupabase, SiMongodb, SiPostgresql
} from 'react-icons/si';

// Animations
const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideOut = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-100%); opacity: 0; }
`;

// Styled Components
const SkillsContainer = styled.section`
  padding: 50px 15px;
  text-align: center;
  background: linear-gradient(135deg, #1a1a1a, #333);
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 35px 10px;
  }

  @media (max-width: 480px) {
    padding: 20px 5px;
    background: linear-gradient(135deg, #2a2a2a, #444);
  }
`;

const SkillsTitle = styled.h2`
  color: #fff;
  font-size: 3em;
  margin-bottom: 25px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    font-size: 2.2em;
  }

  @media (max-width: 480px) {
    font-size: 1.6em;
    margin-bottom: 15px;
  }
`;

const SkillItem = styled.div`
  color: #fff;
  font-size: 18px;
  padding: 10px;
  border-radius: 8px;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${({ isExiting }) => (isExiting ? slideOut : slideIn)} 0.5s forwards;
  position: relative;
  margin: 8px;

  .icon {
    font-size: 28px;
    margin-bottom: 8px;
    color: #00ffc3;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
  padding: 15px 0;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 8px;
  }
`;

const Description = styled.p`
  color: #ddd;
  font-size: 16px;
  margin-top: 12px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  transition: opacity 0.5s ease;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-top: 8px;
  }
`;

const ToggleButton = styled.button`
  padding: 8px 18px;
  font-size: 14px;
  color: #fff;
  background-color: #444;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 15px;

  &:hover {
    background-color: #666;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 14px;
    margin-top: 12px;
  }
`;

// Skill Data
const skillsData = [
  { name: 'JavaScript', icon: <SiJavascript />, description: 'Versatile scripting language mainly used for web development.' },
  { name: 'React', icon: <FaReact />, description: 'Component-based JavaScript library for building UIs.' },
  { name: 'Vite', icon: <SiVite />, description: 'A fast build tool and development server for modern web projects.' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, description: 'Utility-first CSS framework for rapid UI development.' },
  { name: 'Python', icon: <FaPython />, description: 'Powerful high-level language great for scripting and backend development.' },
  { name: 'Java', icon: <FaJava />, description: 'Popular, object-oriented programming language known for reliability and portability.' },
  { name: 'Node.js', icon: <FaNodeJs />, description: 'JavaScript runtime for server-side development.' },
  { name: 'Supabase', icon: <SiSupabase />, description: 'Open-source Firebase alternative for building secure and scalable backends.' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, description: 'Advanced open-source SQL database system.' },
  { name: 'MongoDB', icon: <SiMongodb />, description: 'NoSQL database program, uses JSON-like documents.' },
  { name: 'HTML5', icon: <FaHtml5 />, description: 'Markup language for creating web page structures.' },
  { name: 'CSS3', icon: <FaCss3Alt />, description: 'Style sheet language used for describing the look of web pages.' },
  { name: 'Git', icon: <FaGitAlt />, description: 'Version control system for tracking code changes in software development.' },
];

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleNext = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % skillsData.length);
      setIsExiting(false);
    }, 500);
  }, [currentIndex]);

  useEffect(() => {
    if (!showAll) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [handleNext, showAll]);

  return (
    <SkillsContainer id="skills">
      <SkillsTitle>My Skills</SkillsTitle>
      {showAll ? (
        <SkillGrid>
          {skillsData.map((skill, index) => (
            <SkillItem key={index} isExiting={false}>
              <div className="icon">{skill.icon}</div>
              {skill.name}
              <Description>{skill.description}</Description>
            </SkillItem>
          ))}
        </SkillGrid>
      ) : (
        <>
          <SkillItem isExiting={isExiting}>
            <div className="icon">{skillsData[currentIndex].icon}</div>
            {skillsData[currentIndex].name}
          </SkillItem>
          <Description>{skillsData[currentIndex].description}</Description>
        </>
      )}
      <ToggleButton onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show One by One' : 'Show All Skills'}
      </ToggleButton>
    </SkillsContainer>
  );
};

export default Skills;
