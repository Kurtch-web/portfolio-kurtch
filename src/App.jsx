import React, { useState, useEffect } from 'react';

import GlobalStyle from './GlobalStyles';
import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StartupIntro from './components/StartupIntro';
import BottomPage from './components/BottomPage';
import Strengths from './components/Strenghts.jsx'
import Weakness from './components/Weakness.jsx'



const App = () => {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleIntroFinish = () => {
    setIsIntroComplete(true);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <GlobalStyle />
      {!isIntroComplete ? (
        <StartupIntro onFinish={handleIntroFinish} />
      ) : (
        <>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Intro theme={theme} />
          <Skills theme={theme} />
          <Projects theme={theme} />
          <Strengths theme={theme} />
          <Weakness theme={theme} />
          <Contact theme={theme} />
          <BottomPage /> {/* Add Footer here */}
        </>
      )}
    </>
  );
};

export default App;