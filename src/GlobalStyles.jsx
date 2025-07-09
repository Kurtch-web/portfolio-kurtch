// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    transition: background 0.3s, color 0.3s;
  }

  body.light {
    background-color: #f0f0f0; /* Light background */
    color: #333; /* Dark text */
  }

  body.dark {
    background-color: #000; /* Dark background */
    color: #e0e0e0; /* Light text */
  }

  a {
    text-decoration: none;
    color: #757575; /* Neutral link color */
    transition: color 0.3s;

    &:hover {
      color: #ffffff; /* Change link color on hover */
    }
  }

  /* Media Queries for Responsive Design */
  @media (max-width: 768px) {
    body {
      padding: 10px;
    }

    h1, h2, h3 {
      font-size: 24px;
    }

    input, textarea {
      width: 100%;
      margin: 10px 0;
    }
  }

  @media (max-width: 480px) {
    h1, h2, h3 {
      font-size: 20px;
    }
  }
`;

export default GlobalStyle;