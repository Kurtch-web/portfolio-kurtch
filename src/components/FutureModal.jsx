import React, { useState } from 'react';
import styled from 'styled-components';
import ProfilePicture from '../assets/images/ProfilePicture.jpg';
import CV from '../assets/file/Manuel.pdf';

const ModalBackdrop = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  padding: 30px 25px;
  width: 100%;
  max-width: 550px;
  color: #fff;
  position: relative;
  box-shadow: 0 8px 30px rgba(0, 255, 204, 0.12);
  animation: fadeIn 0.4s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 480px) {
    padding: 24px 18px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 18px;
  font-size: 22px;
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const Picture = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 20px;
  border: 3px solid #00ffc3;
  box-shadow: 0 0 12px #00ffc355;
`;

const IntroText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #ddd;
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const RevealButton = styled.button`
  background-color: #00ffc3;
  color: #111;
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  border-radius: 8px;
  margin: 18px 0;
  cursor: pointer;
  transition: background 0.3s ease;
  box-shadow: 0 0 12px #00ffc3aa;

  &:hover {
    background-color: #00e6b3;
  }
`;

const GoalLine = styled.div`
  color: #ddd;
  font-size: 1rem;
  margin: 10px 0;
  animation: fadeIn 0.4s ease;
  text-align: center;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 22px;
  background: #00ffc3;
  color: #111;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 0 10px #00ffc3aa;
  transition: all 0.3s ease;

  &:hover {
    background: #00e6b3;
    box-shadow: 0 0 14px #00ffc3dd;
  }
`;

const FutureModal = ({ isOpen, onClose }) => {
  const [revealedGoals, setRevealedGoals] = useState([]);
  const [isRevealing, setIsRevealing] = useState(false);

  const futureGoals = [
    "Gain real-world web development experience.",
    "Achieve financial stability doing what I love.",
    "Work remotely from anywhere — home, cafés, or while traveling.",
    "Explore different countries and cultures while coding.",
    "Build websites that are helpful, meaningful, and beautiful.",
  ];

  const handleReveal = () => {
    setIsRevealing(true);
    let index = 0;
    const interval = setInterval(() => {
      setRevealedGoals(prev => [...prev, futureGoals[index]]);
      index++;
      if (index >= futureGoals.length) {
        clearInterval(interval);
        setIsRevealing(false);
      }
    }, 1000);
  };

  return (
    <ModalBackdrop show={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Picture src={ProfilePicture} alt="Kurt Chester Manuel" />
        <IntroText>
          I’m an aspiring web developer with a deep passion for building websites.  
          I enjoy crafting things that people can use and experience online.  
          Right now, my goal is to gain experience and grow my career while creating a stable future for myself through code.
        </IntroText>

        {!isRevealing && revealedGoals.length === 0 && (
          <RevealButton onClick={handleReveal}>
            Reveal My Future ✨
          </RevealButton>
        )}

        {revealedGoals.map((goal, index) => (
          <GoalLine key={index}>✅ {goal}</GoalLine>
        ))}

        <DownloadButton href={CV} download="Kurt_Manuel_CV">
          Download CV
        </DownloadButton>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default FutureModal;
