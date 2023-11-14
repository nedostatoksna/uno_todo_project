import React from "react";
import styled, { css } from "styled-components";

const Button = ( props ) => { 
    return (
        <>
            <StyledButton {...props}>{props.children}</StyledButton>
        </>
    )
};

export default Button;

const StyledButton = styled.button` 
    color: ${props => props.$color || "#fff"};
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.1px;
    border: none;
    height: 40px;
    border-radius: 20px;
    width: ${props => props.$width || undefined};

    ${props => props.$primary && css `
        background-color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
        padding: 10px 24px;
    `}
    ${props => props.$coral && css `
        background-color: ${props => props.$mode === "Light" ? "#F85977" : "#D9415E"};
        padding: 10px 24px;
    `}
    ${props => props.$cancel && css `
        background-color: ${props => props.$mode === "Light" ? "#fff" : "#201F24"};
        color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
        margin: 0px 10px;
        padding: 10px 12px;
        &:hover {
        background: #E5DEFF;
        color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
        }
    `}

`;