import React from "react";
import styled, { css } from "styled-components";

const FlexRowWrapper = ( props ) => {

    return (
        <StyledFlexWrapper {...props}>{props.children}</StyledFlexWrapper>
    )
};
export default FlexRowWrapper;

const StyledFlexWrapper = styled.div` 
    display: flex;
    flex-direction: row;
    padding: ${props => props.$padding};
    margin: ${props => props.$margin};
    width: ${props => props.$width};

    ${props => props.$spaceBetween && css `
        justify-content: space-between;
    `}
    ${props => props.$center && css `
        align-items: center;
    `}
    ${props => props.$smallPaddingTop && css `
        padding-top: 10px;
    `}
    ${props => props.$flexStart && css `
        align-items: flex-start;
    `}
`;
