import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
    height: 100%;
    overflow-x: hidden;

    @media (min-width: 1981px) {
      font-size: 80%;
    }
  }

  body {
    height: auto;
    background: rgba(249, 250, 255);
    color: ${({ theme }) => theme.colors.gray};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
  }

  #root {
    height: 100%;
  }
  
  body, input, button {
    font: 1.6rem 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
    line-height: 1.48;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    background: none;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;    
  }

  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`;
