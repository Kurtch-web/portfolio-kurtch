import React, { useState } from 'react';
import styled from 'styled-components';

// Switch animation for theme toggle
const SlideDownSwitch = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
  background: ${props => (props.isDark ? '#333' : '#ddd')}; 
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: ${props => (props.isDark ? '#ff4081' : '#ffffff')}; 
    border-radius: 50%;
    transform: ${props => (props.isDark ? 'translateX(25px)' : 'translateX(0)')}; 
    transition: transform 0.3s ease, background 0.3s ease;
  }

  &:hover {
    background: ${props => (props.isDark ? '#ff4081' : '#ddd')};
  }
`;

const HeaderContainer = styled.header`
  background: ${props => (props.isDark ? '#000' : '#000')}; /* Black background in both modes */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff; /* White text for better contrast */
  position: fixed; /* Make the header fixed */
  top: 0; /* Align it to the top */
  left: 0; /* Align it to the left */
  right: 0; /* Align it to the right */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
  z-index: 1000; /* Ensure it's above other elements */
  
  @media (max-width: 768px) {
    flex-direction: row; /* Keep side by side on mobile */
  }
`;

const Logo = styled.h1`
  font-size: 28px; /* Increased logo size */
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #ff4081; /* Change color on hover for effect */
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;

  a {
    color: inherit; /* Use inherited color from the header */
    margin-left: 20px;
    font-size: 16px;
    position: relative;
    padding: 5px 0;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    text-transform: uppercase; /* Uppercase text */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #ff4081; /* Vibrant hover color */
      transform: scale(1.1); /* Slightly enlarge the link */
      background: rgba(255, 64, 129, 0.1); /* Subtle background highlight */
      border-radius: 5px; /* Rounded corners */
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: #ff4081;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover:after {
      transform: scaleX(1); /* Animated underline effect */
    }
  }

  @media (max-width: 768px) {
    display: none; /* Hide nav links by default */
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 28px; /* Larger hamburger icon */
  margin-right: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SideNav = styled.div`
  position: fixed;
  top: 10;
  right: ${props => (props.isOpen ? '0' : '-250px')}; /* Slide effect */
  width: 250px;
  height: 100%;
  background: #222; /* Dark background for side nav */
  color: #ffffff;
  padding: 60px 20px; /* Add top padding to avoid overlap with header */
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease; /* Smooth transition */
  z-index: 999; /* Ensure it's above other elements */

  h2 {
    margin-top: 0; /* Remove default margin */
    color: #ff4081; /* Vibrant header color */
    font-size: 24px; /* Slightly larger font */
  }

  a {
    display: block; /* Stack links */
    color: #ffffff; /* White text for links */
    margin: 15px 0;
    text-decoration: none;
    transition: color 0.3s, transform 0.3s ease;

    &:hover {
      color: #ff4081; /* Vibrant color on hover */
      transform: translateX(10px); /* Slide effect */
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: #ff4081;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover:after {
      transform: scaleX(1); /* Animated underline effect */
    }
  }
  
  @media (max-width: 768px) {
    h2 {
      margin-top: 0; /* Reset margin on mobile */
      color: #ff4081;
    }

    a {
      margin-left: 20px;
      padding: 10px;
      font-size: 18px;
      letter-spacing: 1px;
      transition: all 0.3s ease;
      text-transform: uppercase;

      &:hover {
        background: rgba(255, 64, 129, 0.1);
        transform: scale(1.1);
        border-radius: 5px;
      }
    }
  }
`;

const Header = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);

    // If the id is "home", scroll to the top of the page
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scroll to the top
      });
    } else {
      const headerOffset = 100; // Offset in pixels
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth', // Smooth scroll
      });
    }

    setIsOpen(false); // Close menu after selection
  };

  return (
    <>
      <HeaderContainer isDark={theme === 'dark'}>
        <Logo>My Portfolio</Logo>
        <Hamburger onClick={toggleMenu}>
          ☰
        </Hamburger>
        <Nav>
        <a href="#home" onClick={(e) => {scrollToSection(e, 'home'); toggleMenu();}}>Home</a>
        <a href="#skills" onClick={(e) => {scrollToSection(e, 'skills'); toggleMenu();}}>Skills</a>
        <a href="#projects" onClick={(e) => {scrollToSection(e, 'projects'); toggleMenu();}}>Projects</a>
        <a href="#contact" onClick={(e) => {scrollToSection(e, 'contact'); toggleMenu();}}>Contact</a>
        </Nav>
        <SlideDownSwitch isDark={theme === 'dark'} onClick={toggleTheme} />
      </HeaderContainer>
      
      <SideNav isOpen={isOpen}>
        
        <a href="#home" onClick={(e) => {scrollToSection(e, 'home'); toggleMenu();}}>Home</a>
        <a href="#skills" onClick={(e) => {scrollToSection(e, 'skills'); toggleMenu();}}>Skills</a>
        <a href="#projects" onClick={(e) => {scrollToSection(e, 'projects'); toggleMenu();}}>Projects</a>
        <a href="#contact" onClick={(e) => {scrollToSection(e, 'contact'); toggleMenu();}}>Contact</a>
      </SideNav>
    </>
  );
};

export default Header;
