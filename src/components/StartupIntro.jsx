import React, { useEffect, useState } from 'react';
import '../assets/css/StartupIntro.css';

const StartupIntro = ({ onFinish }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);  
    }, 2500);  

    const finishTimer = setTimeout(() => {
      onFinish(); 
    }, 5000);  

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="startup-intro">
      <div className="black-overlay" />
      {showText && <h1 className="intro-text">Welcome to My Portfolio</h1>}
    </div>
  );
};

export default StartupIntro;
