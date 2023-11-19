import React from "react";
import styled, { css } from "styled-components";

const Background = ( props ) => {

    return (
        <>
            <StyledBackground {...props}>{props.children}</StyledBackground>
        </>
    )
};
export default Background;

const StyledBackground = styled.div` 
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${props => props.$zIndex || 0 };

    ${props => props.$darkTransparent && css `
        background-color: rgba(0, 0, 0, 0.4);
    `}
`;