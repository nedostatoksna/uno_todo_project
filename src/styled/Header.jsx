import React from "react";
import styled, { css } from "styled-components";

const Header = ( props ) => {

    return (
        <>
            <StyledHeader {...props}>{props.children}</StyledHeader>
        </>
    )
};
export default Header;

const StyledHeader = styled.h1` 
    margin: ${props => props.$margin || "0px 0px 16px 0px"};
    font-size: 22px;
    line-height: ${props => props.$lineHeight || "28px"}; 
    margin: ${props => props.$margin || "0px"};
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;

    ${props => props.$white && css `
        color: var(--white);
    `}
    ${props => props.$darkGrey && css `
        color: #313033;
    `}
    ${props => props.$mediumGrey && css `
        color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-dark-variant)" : "var(--dark-mode-transparent-grey-text-dark-variant)"};
    `}
    ${props => props.$lightGrey && css `
        color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-medium-variant)" : "var(--dark-mode-transparent-grey-text-medium-variant)"};
    `}
`;