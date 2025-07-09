// src/components/SoftSkills.jsx
import React from 'react';
import styled from 'styled-components';
import { FaRegCheckCircle, FaRocket, FaBrain, FaComments, FaPeopleArrows, FaClock, FaUserShield } from 'react-icons/fa';

const Container = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #0e0e0e, #1e1e1e);
  border-radius: 20px;
  color: white;
  text-align: center;
  box-shadow: 0 0 30px rgba(0, 255, 204, 0.08);
`;

const Title = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 35px;
  text-shadow: 0 0 10px #00ffc355;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 22px 18px;
  border-radius: 12px;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 16px rgba(0, 255, 204, 0.07);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  .icon {
    font-size: 2rem;
    color: #00ffc3;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 1.15rem;
    color: #fff;
    margin-bottom: 6px;
  }

  p {
    font-size: 14px;
    color: #ccc;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    padding: 18px 14px;

    .icon {
      font-size: 1.6rem;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 13px;
    }
  }
`;

const softSkills = [
  {
    title: 'Attention to Detail',
    icon: <FaRocket />,
    description: 'Delivers pixel-perfect, bug-free interfaces that reflect care and professionalism.',
  },
  {
    title: 'Problem-Solving',
    icon: <FaBrain />,
    description: 'Thinks logically and creatively to solve technical challenges efficiently.',
  },
  {
    title: 'Clear Communication',
    icon: <FaComments />,
    description: 'Explains complex ideas clearly to both developers and non-technical stakeholders.',
  },
  {
    title: 'Team Collaboration',
    icon: <FaPeopleArrows />,
    description: 'Works well with others using Git, agile workflows, and open feedback.',
  },
  {
    title: 'Thrives Under Pressure',
    icon: <FaClock />,
    description: 'Delivers results calmly and consistently — even on tight deadlines.',
  },
  {
    title: 'Self-Sufficient & Proactive',
    icon: <FaUserShield />,
    description: 'Takes ownership, works independently, and seeks solutions before asking.',
  },
];

const SoftSkills = () => {
  return (
    <Container id="softskills">
      <Title>What Makes Me a Good Developer</Title>
      <Grid>
        {softSkills.map((skill, index) => (
          <Card key={index}>
            <div className="icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default SoftSkills;
