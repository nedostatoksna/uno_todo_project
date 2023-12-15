import React from "react";
import styled, { css } from "styled-components";

const SubText = ( props ) => {

    return (
        <StyledSubText {...props}>{props.children}</StyledSubText>
    )
};
export default SubText;

const StyledSubText = styled.p` 
    line-height: 20px;
    letter-spacing: 0.25px;
    margin-bottom: 20px;
    ${props => props.$mode === "Light" && css`
        color: var(--transparent-grey-text-medium-variant);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-transparent-grey-text-medium-variant);
    `} 
`;