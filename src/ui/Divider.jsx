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
    border-color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.38)" : "rgba(230, 225, 229, 0.38)"};
    height: 2px;
    margin: ${props => props.$margin || "0px 0px 20px 0px"};

    ${props => props.$white && css `
        height: 1px;
        border: 0.5px solid;
        border-color: ${props => props.$mode === "Light" ? "#fff" : "#5946D2"};
        opacity: 20%;
    `}
`;