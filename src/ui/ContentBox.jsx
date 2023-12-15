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
    ${props => props.$smallSize && css`
        padding: 4px;
        width: 328px;
    `}
    ${props => props.$mediumSize && css`
        padding: 12px;
        width: 390px;
    `}
    ${props => props.$sizeLargeSmallPadding && css`
        padding: 20px;
        width: 500px;
    `}
    ${props => props.$sizeLargeStandartPadding && css`
        padding: 24px;
        width: 500px;
    `}
    ${props => props.$minimumSize && css`
        padding: 24px;
        width: 310px;
    `}
`;
