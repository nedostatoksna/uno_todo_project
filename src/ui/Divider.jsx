import React from "react";
import styled, { css } from "styled-components";

const Divider = ( props ) => {

    return (
        <StyledDivider {...props} />
    )
};
export default Divider;

const StyledDivider = styled.hr` 
    border: 1px solid;
    height: ${props => props.$height || "2px"};
    margin: ${props => props.$margin || "0px 0px 20px 0px"};
    ${props => props.$mode === "Light" && css`
        border-color: var(--transparent-grey-text-medium-variant);
    `} 
    ${props => props.$mode === "Dark" && css`
        border-color: var(--dark-mode-transparent-grey-text-medium-variant);
    `} 

    ${props => props.$light && css `
        height: 1px;
        border: 0.5px solid;
        ${props => props.$mode === "Light" && css`
            border-color: var(--transparent-light-grey-text);
        `} 
        ${props => props.$mode === "Dark" && css`
            border-color: var(--dark-mode-transparent-light-grey-text);
        `} 
    `}
    ${props => props.$white && css `
        height: 1px;
        border: 0.5px solid;
        opacity: 20%;
        ${props => props.$mode === "Light" && css`
            border-color: var(--white);
        `} 
        ${props => props.$mode === "Dark" && css`
            border-color: var(--primary-purple);
        `} 
    `}
`;