import React from "react";
import styled, { css } from "styled-components";

const Wrapper = ( props ) => {

    return (
        <>
            <StyledWrapper {...props}>{props.children}</StyledWrapper>
        </>
    )
};
export default Wrapper;

const StyledWrapper = styled.div` 
    margin: auto;
    width: ${props => props.$width || "1232px"};
    height: 100%;
    padding: ${props => props.$padding};

    ${props => props.$primary && css `
        background-color: ${props => props.$mode === "Light" ? "#fff" : "#201F24"};
    `}
    ${props => props.$purple && css `
        background-color: ${props => props.$mode === "Light" ? "#B0A2F2" : "#544794"};
    `}
    ${props => props.$coral && css `
        background-color: ${props => props.$mode === "Light" ? "#F85977" : "#D9415E"};
    `}
    ${props => props.$transparent && css `
        background-color: ${props => props.$mode === "Light" ? "rgba(89, 70, 210, 0.08)" : "rgba(200, 191, 255, 0.08)"};
    `}
    ${props => props.$grey && css `
        background-color: ${props => props.$mode === "Light" ? "#F4F4F4" : "#252429"};
    `}
`;

