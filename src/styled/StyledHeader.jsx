import React from "react";
import styled, { css } from "styled-components";

const Header = ( props ) => {

    return (
        <StyledHeader {...props}>{props.children}</StyledHeader>
    )
};
export default Header;

const StyledHeader = styled.h1` 
    line-height: ${props => props.$lineHeight || "28px"}; 
    margin: 18px 0px;

    ${props => props.$mode === "Light" && css`
        color: var(--black);

        ${props => props.$mediumGrey && css `
            color: var(--transparent-grey-text-dark-variant);
        `}
        ${props => props.$lightGrey && css `
            color: var(--transparent-grey-text-medium-variant);
        `}
    `}
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-white-text);

        ${props => props.$mediumGrey && css `
            color: var(--dark-mode-transparent-grey-text-dark-variant);
        `}
        ${props => props.$lightGrey && css `
            color: var(--dark-mode-transparent-grey-text-medium-variant);
        `}
    `}

    ${props => props.$white && css `
        color: var(--white);
    `}
    ${props => props.$darkGrey && css `
        color: var(--dark-grey-header);
    `}
    ${props => props.$large && css `
        font-size: 22px;
    `}
    ${props => props.$bold && css `
        font-weight: 600;
    `}
    ${props => props.$smallMargin && css `
        margin: 0px 0px 10px 0px;
    `}
    ${props => props.$mediumMargin && css `
        margin: 0px 0px 16px 0px;
    `}
    ${props => props.$zeroMargin && css `
        margin: 0;
    `}
    ${props => props.$mediumLineHeight && css `
        line-height: 36px; 
    `}
`;