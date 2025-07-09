// src/components/Weakness.jsx
import React from 'react';
import styled from 'styled-components';
import { FaRegSadTear, FaArrowUp } from 'react-icons/fa';

const Container = styled.section`
  padding: 60px 20px;
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'linear-gradient(135deg, #0a0a0a, #161616)'
      : 'linear-gradient(135deg, #f4f4f4, #eaeaea)'};
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#111')};
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 0 30px ${({ theme }) => (theme === 'dark' ? 'rgba(0,255,204,0.06)' : 'rgba(0,0,0,0.06)')};
`;

const Title = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 20px;
  text-shadow: ${({ theme }) =>
    theme === 'dark' ? '0 0 12px #00ffc355' : '0 0 6px #888'};

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Card = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 30px 25px;
  background: ${({ theme }) =>
    theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#fff'};
  border-radius: 15px;
  backdrop-filter: blur(8px);
  box-shadow: ${({ theme }) =>
    theme === 'dark'
      ? '0 8px 20px rgba(0,255,204,0.04)'
      : '0 8px 20px rgba(0,0,0,0.05)'};
  transition: all 0.3s ease;

  .icon {
    font-size: 2.2rem;
    margin-bottom: 12px;
    color: ${({ theme }) => (theme === 'dark' ? '#00ffc3' : '#444')};
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => (theme === 'dark' ? '#ddd' : '#444')};

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
`;

const Weakness = ({ theme = 'dark' }) => {
  return (
    <Container id="weakness" theme={theme}>
      <Title theme={theme}>Facing My Biggest Weakness</Title>
      <Card theme={theme}>
        <div className="icon"><FaRegSadTear /></div>
        <h3>Fear of Failure & Lack of Confidence</h3>
        <p>
          For a long time, I struggled with not being confident in my skills — especially when comparing myself to others in the same field. The fear of making mistakes or being judged sometimes held me back from speaking up, contributing ideas, or taking on challenges.
          <br /><br />
          But over time, I’ve learned that growth comes **through** discomfort. I started pushing myself to take small risks — like building projects, presenting them, asking questions, and seeking feedback.
          <br /><br />
          Every time I overcame a fear or completed something I didn’t think I could do, my confidence slowly grew. I’m still learning, but I now see failure not as something to avoid — but as a necessary part of becoming a better developer and a stronger person.
        </p>
        <div className="icon" style={{ marginTop: '20px' }}><FaArrowUp /></div>
      </Card>
    </Container>
  );
};

export default Weakness;
