import React, { useState } from 'react';
import styled from 'styled-components';
import coffeeImage from '../assets/images/coffee.png';
import liquorImage from '../assets/images/Liquorance.png';
import youthsaverImage from '../assets/images/youthsaver.png';
import checklistImage from '../assets/images/Checklist.png';
import ProjectSlideshow from './ProjectSlideshow'; // Adjust path if needed

const ProjectsContainer = styled.section`
  padding: 20px 5px;
  background: ${(props) => (props.isDark ? '#1a1a1a' : '#f0f0f0')};
`;

const ProjectsTitle = styled.h2`
  text-align: center;
  color: ${(props) => (props.isDark ? '#fff' : '#333')};
  font-size: 1.8em;
  margin-bottom: 10px;
`;

const ScrollableContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 10px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => (props.isDark ? '#555' : '#aaa')};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => (props.isDark ? '#333' : '#f0f0f0')};
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: ${(props) => (props.isDark ? '#2a2a2a' : '#ffffff')};
  border-radius: 8px;
  padding: 10px;
  box-shadow: ${(props) =>
    props.isDark
      ? '0 2px 10px rgba(255, 255, 255, 0.1)'
      : '0 2px 8px rgba(0, 0, 0, 0.1)'};
  text-align: center;
  cursor: pointer;

  h3 {
    margin: 5px 0;
    color: ${(props) => (props.isDark ? '#fff' : '#333')};
  }

  p {
    color: ${(props) => (props.isDark ? '#e0e0e0' : '#555')};
    font-size: 0.85em;
  }
`;

const ViewButton = styled.button`
  background-color: ${(props) => (props.isDark ? '#ff6f61' : '#333')};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 0.9em;

  &:hover {
    background-color: ${(props) => (props.isDark ? '#ff897a' : '#555')};
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContainer = styled.div`
  background: ${(props) => (props.isDark ? '#333' : '#fff')};
  border-radius: 8px;
  padding: 15px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ExitButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: ${(props) => (props.isDark ? '#fff' : '#333')};
  cursor: pointer;

  &:hover {
    color: #ff6f61;
  }
`;

const Projects = ({ theme }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      name: 'Coffeeshop',
      description: 'Coffee management system',
      detailedDescription:
        'A Java-based coffee shop system for automating management.',
      image: coffeeImage,
      link: 'https://github.com/Kurtch-web/CoffeeShop-main',
    },
    {
      name: 'YouthSaver',
      description: 'Safety and wellness',
      detailedDescription:
        'A system to report school incidents and support mental health.',
      image: youthsaverImage,
      link: 'https://github.com/Kurtch-web/youthsaver-main',
    },
    {
      name: 'Liquorance',
      description: 'Liquor kiosk',
      detailedDescription:
        'A kiosk for convenient beverage retail.',
      image: liquorImage,
      link: 'https://github.com/Kurtch-web/Liquorance-main',
    },
    {
      name: 'Checklist App',
      description: 'Track tasks',
      detailedDescription:
        'App to track academic tasks and grades.',
      image: checklistImage,
      link: 'https://github.com/Kurtch-web/checklist-main',
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <ProjectsContainer id="projects" isDark={theme === 'dark'}>
      <ProjectsTitle isDark={theme === 'dark'}>My Projects</ProjectsTitle>

      <ScrollableContainer isDark={theme === 'dark'}>
        <ProjectGrid>
          {projectList.map((project, index) => (
            <ProjectCard key={index} isDark={theme === 'dark'}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ViewButton
                isDark={theme === 'dark'}
                onClick={() => openModal(project)}
              >
                View Project
              </ViewButton>
            </ProjectCard>
          ))}
        </ProjectGrid>

 
      </ScrollableContainer>
  
      {modalOpen && (
        <ModalOverlay>
          <ModalContainer isDark={theme === 'dark'}>
            <ExitButton isDark={theme === 'dark'} onClick={closeModal}>
              &times;
            </ExitButton>
            {selectedProject && (
              <>
                <h2>{selectedProject.name}</h2>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    marginBottom: '10px',
                  }}
                />
                <p>{selectedProject.detailedDescription}</p>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit File
                  </a>
                )}
              </>
            )}
          </ModalContainer>
        </ModalOverlay>
      )}
      <ProjectSlideshow projects={projectList} isDark={theme === 'dark'} />
    </ProjectsContainer>
  );
};

export default Projects;
