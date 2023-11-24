import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;

    --white: #fff;
    --black: #1C1B1F;

    --primary-purple: #5946D2;
    --dark-mode-primary-purple: #9373FF;

    --primary-lavender: #E5DFF9;
    --light-lavender: #E5DEFF;

    --dark-grayish-lavender: #474459;
    --dark-purple-button-text: #160067;

    --coral: #F85977;
    --dark-mode-coral: #D9415E;

    --dark-grey: #79747E;

    --light-grey-text: #A5A0AC;
    --dark-mode-light-grey-text: #CAC4D0;

    --transparent-light-grey-text: rgba(28, 27, 31, 0.08);
    --dark-mode-transparent-light-grey-text: rgba(230, 225, 229, 0.08);
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