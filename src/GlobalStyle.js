import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: "Lato", sans-serif;
    background-color: #f0f0f0;
  }
  `;
  
  