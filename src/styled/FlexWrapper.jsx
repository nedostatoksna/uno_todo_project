import React from "react";
import styled, { css } from "styled-components";

const FlexWrapper = ( props ) => {

    return (
        <StyledFlexWrapper {...props}>{props.children}</StyledFlexWrapper>
    )
};
export default FlexWrapper;

const StyledFlexWrapper = styled.div` 
    height: calc(100% - 104px);
    display: flex;
    flex-direction: column;

    ${props => props.$spaceBetween && css `
        justify-content: space-between;
    `}
    ${props => props.$center && css `
        width: 100%;
        align-items: center;
        justify-content: center;
        padding-top: 10px;
    `}
`;
