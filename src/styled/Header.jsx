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
    margin-bottom: 16px;
    font-size: 22px;
    line-height: ${props => props.$lineHeight || "28px"}; 
    margin: ${props => props.$margin || "0px"};
    color: ${props => props.$mode === "Light" ? "#1C1B1F" : "#E6E1E5"};
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;

    ${props => props.$white && css `
        color: #fff;
    `}
    ${props => props.$darkGrey && css `
        color: #313033;
    `}
    ${props => props.$mediumGrey && css `
        color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.6)" : "rgba(230, 225, 229, 0.6)"};
    `}
    ${props => props.$lightGrey && css `
        color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.38)" : "rgba(230, 225, 229, 0.38)"};
    `}
`;