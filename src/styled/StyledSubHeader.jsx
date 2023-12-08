import React from "react";
import styled, { css } from "styled-components";

const SubHeader = ( props ) => {

    return (
        <StyledSubHeader {...props}>{props.children}</StyledSubHeader>
    )
};
export default SubHeader;

const StyledSubHeader = styled.h2` 
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.25px;
    margin-bottom: 60px;
    ${props => props.$mode === "Light" && css`
        color: var(--transparent-grey-text-medium-variant);
    `}
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-transparent-grey-text-medium-variant);
    `}
    ${props => props.$white && css`
        color: var(--white);
    `}
`;
