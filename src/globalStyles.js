import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  
  @font-face {
    font-family: "Roboto";
    src: local("Roboto-Regular"),
    url("./fonts/Roboto/Roboto-Regular.ttf") format("truetype");
  }
  input {
    border: none;
  }
  input:focus {
    outline: none;
  }
  button {
    border: none;
  }
  button:focus {
    outline: none;
  }
  li {
    list-style-type: none;
  }
`;

export default GlobalStyle;