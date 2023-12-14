import React from "react";
import styled, { css } from "styled-components";

const Picture = ( props ) => {

    return (
        <StyledPicture {...props}>{props.children}</StyledPicture>
    )
};
export default Picture;

const StyledPicture = styled.div` 
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.25px;
    margin-right: 10px;
    ${props => props.$large && css`
        width: 60px;
        height: 60px;
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 12px;
    `}
    ${props => props.$mode === "Light" && css`
        background: var(--primary-purple);
        color: var(--white);
    `}
    ${props => props.$mode === "Dark" && css`
        background: var(--dark-mode-primary-purple);
        color: var(--dark-mode-background);
    `}
`;