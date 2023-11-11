import React from "react";
import styled from "styled-components";

const PrimaryButton = ( props ) => { // text, onClick, btnColor

    // const darkPink = "#D9415E";
    // const darkPurple = "#9373FF";
    // const lightPink = "#F85977";
    // const lightPurple = "#5946D2";

    return (
        <>
            <StyledPrimaryButton {...props}>{props.children}</StyledPrimaryButton>
        </>
    )
};
export default PrimaryButton;

const StyledPrimaryButton = styled.button` 
    margin: 0px;
    color: #fff;
    background-color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
    background-repeat: no-repeat;
    background-position: center left 16px;
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
    min-width: ${props => props.$width || "79px"};
`;
