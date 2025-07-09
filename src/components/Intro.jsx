import React, { useState } from 'react';
import styled from 'styled-components';
import FutureModal from '../components/FutureModal';

const IntroContainer = styled.section`
  padding: 180px 20px;
  text-align: center;
  background: ${({ isDark, isMobile }) =>
    isDark ? (isMobile ? 'transparent' : '#0d0d0d') : '#f0f0f0'};
  color: ${({ isDark }) => (isDark ? '#ffffff' : '#000000')};
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
    animation: rotateBackground 10s infinite linear;
    z-index: 0;
  }

  @keyframes rotateBackground {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    padding: 120px 10px;
  }

  @media (max-width: 480px) {
    padding: 80px 5px;
  }
`;

const GlowingText = styled.h1`
  font-size: 3.5em;
  font-weight: bold;
  position: relative;
  z-index: 1;
  text-shadow: ${({ isDark }) =>
    isDark
      ? '0px 0px 10px rgba(255, 69, 0, 0.8), 0px 0px 20px rgba(255, 69, 0, 0.8), 0px 0px 30px rgba(255, 69, 0, 0.9)'
      : 'none'};
  color: ${({ isDark }) => (isDark ? '#ffffff !important' : '#000000')};
  animation: textEntrance 1.2s ease-in-out;

  @keyframes textEntrance {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const IntroText = styled.p`
  font-size: 1.7em;
  margin-top: 20px;
  color: ${({ isDark }) => (isDark ? '#ffffff !important' : '#000000')};
  position: relative;
  z-index: 1;
  animation: fadeIn 1.6s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const OverviewButton = styled.button`
  margin-top: 40px;
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  background-color: ${({ isDark }) => (isDark ? '#ffffff' : '#000000')};
  color: ${({ isDark }) => (isDark ? '#000000' : '#ffffff')};
  border: none;
  border-radius: 5px;
  position: relative;
  z-index: 1;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ isDark }) => (isDark ? '#f0f0f0' : '#1a1a1a')};
  }

  @media (max-width: 768px) {
    font-size: 1.1em;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 1em;
    padding: 6px 12px;
  }
`;

const Modal = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation: ${({ show }) => (show ? 'fadeIn 0.5s ease' : 'fadeOut 0.5s ease')};

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-30px);
    }
  }
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 90%;
  max-width: 600px;
  position: relative;
  transform: scale(0.9);
  animation: ${({ show }) => (show ? 'scaleIn 0.5s ease' : 'scaleOut 0.5s ease')};

  @keyframes scaleIn {
    from {
      transform: scale(0.9);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes scaleOut {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.9);
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const Picture = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

const BioText = styled.p`
  font-size: 1.2em;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
`;

const Intro = ({ theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <IntroContainer isDark={theme === 'dark'} isMobile={isMobile}>
      {theme === 'dark' && isMobile && (
        <video
          autoPlay
          loop
          muted
          preload="auto"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source
            src="https://iavtqaoakjhafyyrwxko.supabase.co/storage/v1/object/public/Pictures/intro.mp4.mp4?t=2024-11-23T00%3A42%3A56.415Z"
            type="video/mp4"
          />
        </video>
      )}

      <GlowingText isDark={theme === 'dark'}>
        Hello, I'm Kurt Chester Manuel
      </GlowingText>
      <IntroText isDark={theme === 'dark'}>
        Welcome to my Portfolio!
      </IntroText>
      <OverviewButton onClick={handleModalToggle} isDark={theme === 'dark'}>
        ABOUT ME
      </OverviewButton>

      <FutureModal isOpen={isModalOpen} onClose={handleModalToggle} />
    </IntroContainer>
  );
};

export default Intro;
