import React from "react";
import styled, { css } from "styled-components";

const FlexColumnWrapper = ( props ) => {

    return (
        <StyledFlexWrapper {...props}>{props.children}</StyledFlexWrapper>
    )
};
export default FlexColumnWrapper;

const StyledFlexWrapper = styled.div` 
    display: flex;
    flex-direction: column;
    padding: ${props => props.$padding};
    margin: ${props => props.$margin};
    width: ${props => props.$width};

    ${props => props.$spaceBetween && css `
        justify-content: space-between;
    `}
    ${props => props.$center && css `
        align-items: center;
        justify-content: center;
    `}
    ${props => props.$smallPaddingTop && css `
        padding-top: 10px;
    `}
    ${props => props.$Calcheight && css `
        height: calc(100% - 104px);
    `}
    ${props => props.$height100 && css `
        height: 100%;
    `}
    ${props => props.$flexStart && css `
        align-items: flex-start;
    `}
`;
