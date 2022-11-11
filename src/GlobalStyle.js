import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    background-color: #d0e8fd;
  }
`;

export default GlobalStyle;
