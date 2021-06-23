import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}

  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  img {
    display:block;
    max-width:100%;
    height:auto; 
  }

  h1, h2, h3, h4, h5, p {
    margin:0;
    padding:0;
  }
`;

export default GlobalStyle;
