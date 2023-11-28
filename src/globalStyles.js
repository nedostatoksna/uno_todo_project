import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;

    --white: #fff;
    --dark-mode-white-text: #E6E1E5;
    --white-input-background: #FAF9FB;
    --dark-mode-input-background: #49454F;
    --search-background: #F4F4F4;
    --dark-mode-search-background: #252429;
    --black: #1C1B1F;
    --dark-mode-background: #201F24;

    --primary-purple: #5946D2;
    --dark-mode-primary-purple: #9373FF;

    --primary-purple-light-variant: #5835E5;
    --dark-mode-primary-purple-light-variant: #CBBEFF;

    --primary-lavender: #E5DFF9;
    --light-lavender: #E5DEFF;
    --lavender-active: #C8BFFF;
    --lavender-background: #B0A2F2;
    --dark-mode-lavender-background: #544794;


    --dark-grayish-lavender: #474459;
    --dark-grayish-lavender-variant: #49454F;
    --dark-purple-button-text: #160067;

    --coral: #F85977;
    --dark-mode-coral: #D9415E;

    --dark-grey: #79747E;

    --light-grey-text: #A5A0AC;
    --dark-mode-light-grey-text: #CAC4D0;

    --transparent-grey-text: rgba(28, 27, 31, 0.08);
    --dark-mode-transparent-grey-text: rgba(230, 225, 229, 0.08); 

    --transparent-light-grey-text: rgba(28, 27, 31, 0.12);
    --dark-mode-transparent-light-grey-text: rgba(230, 225, 229, 0.12); 

    --transparent-grey-text-dark-variant: rgba(28, 27, 31, 0.6);
    --dark-mode-transparent-grey-text-dark-variant: rgba(230, 225, 229, 0.6);

    --transparent-grey-text-medium-variant: rgba(28, 27, 31, 0.38);
    --dark-mode-transparent-grey-text-medium-variant: rgba(230, 225, 229, 0.38);

    --transparent-lavender: rgba(89, 70, 210, 0.08);
    --dark-mode-transparent-lavender: rgba(200, 191, 255, 0.08);

    --transparent-modal-background: rgba(0, 0, 0, 0.4);
  }
  
  @font-face {
    font-family: "Roboto";
    src: local("Roboto-Regular"),
    url("./fonts/Roboto/Roboto-Regular.ttf") format("truetype");
  }
  input, button {
    border: none;
  }
  input:focus, select:focus, button:focus {
    outline: none;
  }
  li {
    list-style-type: none;
  }
`;

export default GlobalStyle;