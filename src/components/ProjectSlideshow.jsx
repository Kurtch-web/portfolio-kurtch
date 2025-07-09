import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// 🔽 Import images
import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';

const thriftImages = [img1, img2, img3, img4, img5];
const enrollImages = [img6, img7, img8, img9, img10];

// 🎨 Styled Components
const SlideshowContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 40px auto;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SlideshowBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
`;

const SliderTrack = styled.div`
  display: flex;
  transition: transform 2s ease-in-out;
  transform: translateX(${(props) => `-${props.index * 100}%`});
`;

const Slide = styled.div`
  min-width: 100%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    max-height: 80vh;
    object-fit: contain;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    img {
      max-height: 50vh;
    }
  }
`;

const PersistentHoverOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  color: #fff;
  background: rgba(0, 0, 0, 0.65);
  padding: 20px 30px;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 10;

  ${SlideshowBox}:hover & {
    opacity: 1;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 15px 20px;
  }
`;

const ProjectSlideshow = () => {
  const [indexThrift, setIndexThrift] = useState(0);
  const [indexEnroll, setIndexEnroll] = useState(0);

  useEffect(() => {
    const thriftTimer = setInterval(() => {
      setIndexThrift((prev) => (prev + 1) % thriftImages.length);
    }, 5000); // 5 seconds

    const enrollTimer = setInterval(() => {
      setIndexEnroll((prev) => (prev + 1) % enrollImages.length);
    }, 5000);

    return () => {
      clearInterval(thriftTimer);
      clearInterval(enrollTimer);
    };
  }, []);

  return (
    <SlideshowContainer>
      {/* Thriftshop slideshow */}
      <SlideshowBox onClick={() => window.open('https://dreamersuniqueinc.vercel.app/', '_blank')}>
        <SliderTrack index={indexThrift}>
          {thriftImages.map((img, idx) => (
            <Slide key={idx}>
              <img src={img} alt={`Thriftshop Slide ${idx + 1}`} />
            </Slide>
          ))}
        </SliderTrack>
        <PersistentHoverOverlay>
          This is only for testing purposes of a working thriftshop ecommerce site.<br />
          The sole purpose is to pass as a project.<br />
           I used flask, vite + react, tailwind <br />
          Click to proceed to the website.
        </PersistentHoverOverlay>
      </SlideshowBox>

      {/* Enrollment slideshow */}
      <SlideshowBox onClick={() => window.open('https://enrollgo-six.vercel.app/', '_blank')}>
        <SliderTrack index={indexEnroll}>
          {enrollImages.map((img, idx) => (
            <Slide key={idx}>
              <img src={img} alt={`Enrollment Slide ${idx + 1}`} />
            </Slide>
          ))}
        </SliderTrack>
        <PersistentHoverOverlay>
          This is only for testing purposes of a student enrollment system site.<br />
          Built for demonstration purposes.<br />
          NOTICE: DISCONTINUED DUE TO LACK OF FUNDS TO RUN THE POSTGRESQL BACKEND.<br />
          MAY NOT FUNCTION AS INTENDED.<br />
          I used Django, React, Tailwind, Posgress SQL, MongoDB<br />
          Click to proceed to the website.
        </PersistentHoverOverlay>
      </SlideshowBox>
    </SlideshowContainer>
  );
};

export default ProjectSlideshow;


