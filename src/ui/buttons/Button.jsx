import React from "react";
import styled, { css } from "styled-components";

const Button = ( props ) => { // text, onClick, btnColor

    // const darkPink = "#D9415E";
    // const darkPurple = "#9373FF";
    // const lightPink = "#F85977";
    // const lightPurple = "#5946D2";

    return (
        <>
            <StyledButton {...props}>{props.children}</StyledButton>
        </>
    )
};
export default Button;

const StyledButton = styled.button` 
    margin: 0px;
    color: ${props => props.$color || "#fff"};
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.1px;
    border: none;
    height: 40px;
    padding: 10px 24px;
    border-radius: 20px;
    width: ${props => props.$width || undefined};

    ${props => props.$primary && css `
        background-color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
    `}
    ${props => props.$coral && css `
        background-color: ${props => props.$mode === "Light" ? "#F85977" : "#D9415E"};
    `}

`;