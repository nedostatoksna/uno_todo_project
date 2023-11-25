import React from "react";
import styled, { css } from "styled-components";

const Divider = ( props ) => {

    return (
        <>
            <StyledDivider {...props} />
        </>
    )
};
export default Divider;

const StyledDivider = styled.hr` 
    border: 1px solid;
    border-color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-medium-variant)" : "var(--dark-mode-transparent-grey-text-medium-variant)"};
    height: ${props => props.$height || "2px"};
    margin: ${props => props.$margin || "0px 0px 20px 0px"};

    ${props => props.$light && css `
        height: 1px;
        border: 0.5px solid;
        border-color: ${props => props.$mode === "Light" ? "var(--transparent-light-grey-text)" : "var(--dark-mode-transparent-light-grey-text)"};
    `}
    ${props => props.$white && css `
        height: 1px;
        border: 0.5px solid;
        border-color: ${props => props.$mode === "Light" ? "var(--white)" : "var(--primary-purple)"};
        opacity: 20%;
    `}
`;