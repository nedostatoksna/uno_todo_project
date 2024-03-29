import React from "react";
import styled, { css } from "styled-components";
import plusIcon from "../resources/images/plusIcon.svg";
import plusIconLighter from "../resources/images/plusIconLighter.svg";
import plusIconWhite from "../resources/images/whitePlusIcon.svg";

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
    background-repeat: no-repeat;  
    background-position: center left 16px;
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
    ${props => props.$widthMax && css `
        width: 330px;
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
    ${props => props.$widthWithIndents && css `
        width: calc(100% - 40px);
    `}
    ${props => props.$MarginBottom && css `
        margin-bottom: 12px;
    `}
    ${props => props.$MarginSides && css `
        margin: 0 10px;
    `}
    ${props => props.$MarginBottomLarge && css `
        margin-bottom: 20px;
    `}
    ${props => props.$positionSmallIndent && css `
        background-position: center left 12px;
    `}
    ${props => props.$fixedPosition && css `
        position: absolute;
        bottom: 0;
    `}
    ${props => props.$width && css `
        width: calc(100% - 40px);
    `}
    ${props => props.$purpleHover && css `
        &:hover {
            background: var(--light-lavender);
            ${props => props.$mode === "Light" && css`
                color: var(--primary-purple);
            `} 
            ${props => props.$mode === "Dark" && css`
                color: var(--dark-mode-primary-purple);
            `}
        }
    `}
`;