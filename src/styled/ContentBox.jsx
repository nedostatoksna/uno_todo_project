import React from "react";
import styled, { css } from "styled-components";

const ContentBox = ( props ) => {

    return (
        <StyledContentBox {...props}>{props.children}</StyledContentBox>
    )
};
export default ContentBox;

const StyledContentBox = styled.div` 
    border-radius: 28px;
    width: ${props => props.$width || "500px" };
    padding: ${props => props.$padding || "24px"};
    display: flex;
    flex-direction: column;
    
    ${props => props.$primary && css`
        ${props => props.$mode === "Light" && css`
            background-color: var(--white);
        `} 
        ${props => props.$mode === "Dark" && css`
            background-color: var(--dark-mode-background);
        `} 
    `}
`;
