import React from "react";
import styled, { css } from "styled-components";
import plusIcon from "../images/plusIcon.svg";
import plusIconLighter from "../images/plusIconLighter.svg";
import plusIconWhite from "../images/whitePlusIcon.svg";

const Button = ( props ) => { 
    return (
        <StyledButton {...props}>{props.children}</StyledButton>
    )
};

export default Button;

const StyledButton = styled.button` 
    color: var(--white);
    height: 40px;
    border-radius: 20px;
    width: ${props => props.$width || undefined};
    background-repeat: no-repeat;  
    background-position: ${props => props.$position || "center left 16px"};
    text-align: ${props => props.$textAlign || "start"};
    padding: 10px 24px;
    margin: ${props => props.$margin || undefined};
     
    ${props => props.$mode === "Light" && css`
    
        ${props => props.$primary && css `
            background-color: var(--primary-purple);
        `}
        ${props => props.$coral && css `
            background-color: var(--coral);
        `}
        ${props => props.$coralColor && css `
            color: var(--coral);
        `}
        ${props => props.$purpleColor && css `
            color: var(--primary-purple); 
        `}
        ${props => props.$purplePlus && css `
            background-image: url(${plusIcon});
            padding: 10px 16px 10px 38px;
        `}
        ${props => props.$greyTransparent && css `
            background-color: rgba(28, 27, 31, 0.16);
        `}
    `} 

    ${props => props.$mode === "Dark" && css`

        ${props => props.$primary && css `
            background-color: var(--dark-mode-primary-purple);
        `}
        ${props => props.$coral && css `
            background-color: var(--dark-mode-coral);
        `}
        ${props => props.$coralColor && css `
            color: var(--dark-mode-coral); 
        `}
        ${props => props.$purpleColor && css `
            color: var(--dark-mode-primary-purple); 
        `}
        ${props => props.$purplePlus && css `
            background-image: url(${plusIconLighter});
            padding: 10px 16px 10px 38px;
        `}
        ${props => props.$greyTransparent && css `
            background-color: rgba(230, 225, 229, 0.16);
        `}
    `} 
    
    ${props => props.$paddingSmall && css`
        padding: 10px 12px;
    `}
    ${props => props.$paddingForPlus && css`
        padding: 10px 24px 10px 42px;
    `}
    ${props => props.$ClearBackground && css`
        background-color: transparent;
    `}
    ${props => props.$whitePlus && css `
        background-image: url(${plusIconWhite});
    `}
    ${props => props.$widthMax && css `
        width: 100%;
    `}
    ${props => props.$purpleHover && css `
        &:hover {
        background: var(--light-lavender);
        color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
        }
    `}
`;