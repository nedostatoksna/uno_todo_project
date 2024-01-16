import React from "react";
import styled, { css } from "styled-components";

const Background = ( props ) => {

    return (
        <StyledBackground {...props}>{props.children}</StyledBackground>
    )
};
export default Background;

const StyledBackground = styled.div` 
    padding: 20px;
    ${props => props.$widthLarge && css`
        width: 80%;
    `}
    ${props => props.$widthSmall && css`
        width: 60%;
    `}
    ${props => props.$heightMin && css `
        height: fit-content;
    `}
    ${props => props.$mode === "Light" && css`
        ${props => props.$primary && css `
            background-color: var(--lavender-background);
        `}
        ${props => props.$coral && css `
            background-color: var(--coral);
        `}
        ${props => props.$grey && css `
            background-color: var(--search-background); 
        `}
    `} 
    ${props => props.$mode === "Dark" && css`

        ${props => props.$primary && css `
            background-color: var(--dark-mode-lavender-background);
        `}
        ${props => props.$coral && css `
            background-color: var(--dark-mode-coral);
        `}
        ${props => props.$grey && css `
            background-color: var(--dark-mode-search-background); 
        `}
    `} 
`;




