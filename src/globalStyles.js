import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;

    --white: #fff;

    --primary-purple: #5946D2;
    --dark-mode-primary-purple: #9373FF;

    --primary-lavender: #E5DFF9;
    --light-lavender: #E5DEFF;

    --dark-grayish-lavender: #474459;

    --coral: #F85977;
    --dark-mode-coral: #D9415E;
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