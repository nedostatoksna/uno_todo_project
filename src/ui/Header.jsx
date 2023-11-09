import React from "react";
import styled from "styled-components";

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
    color: ${props => props.$mode === "Light" ? "#1C1B1F" : "#E6E1E5"};
    font-family: "Roboto";
    font-size: 57px;
    font-style: normal;
    font-weight: 400;
    line-height: 64px;
    letter-spacing: -0.25px;
`;