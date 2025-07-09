import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #282c34;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-top: 2px solid #61dafb;  // Accent color

  // Media query for mobile responsiveness
  @media (max-width: 600px) {
    padding: 15px;  // Adjust padding for smaller screens
  }
`;

const SocialLinks = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;  // Align links in a row
  flex-wrap: wrap;  // Allow wrapping on small screens

  a {
    margin: 0 10px;
    color: #61dafb;  // Accent color
    text-decoration: none;
    font-size: 1.2em;  // Default font size
    
    &:hover {
      color: #21a1f1;  // Hover color
    }

    // Media query for mobile devices
    @media (max-width: 600px) {
      font-size: 1em;  // Smaller font size for mobile
      margin: 5px 8px;  // Smaller margin on mobile
    }
  }
`;

const CopyRight = styled.p`
  margin: 5px 0;
  font-size: 0.9em;  // Default font size

  // Media query for mobile devices
  @media (max-width: 600px) {
    font-size: 0.8em;  // Slightly smaller font size on mobile
  }
`;

const BottomPage = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        {/* Facebook link */}
        <a href="https://www.facebook.com/profile.php?id=100083982332870" target="_blank" rel="noopener noreferrer">Facebook</a>

        {/* GitHub link */}
        <a href="https://github.com/Kurtch-web" target="_blank" rel="noopener noreferrer">GitHub</a>
      </SocialLinks>
      <CopyRight>© 2024 KURT CHESTER MANUEL. All rights reserved.</CopyRight>
    </FooterContainer>
  );
};

export default BottomPage;
