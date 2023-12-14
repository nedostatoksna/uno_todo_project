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
    ${props => props.$width100 && css `
        width: 100%;
    `}
    ${props => props.$flexStart && css `
        align-items: flex-start;
    `}
    ${props => props.$marginBottomSmall && css `
        margin-bottom: 5px;
    `}
    ${props => props.$marginBottomLarge && css `
        margin-bottom: 12px;
    `}
    ${props => props.$paddingOnTheSidesSmall && css `
        padding: 0 10px;
    `}
    ${props => props.$paddingOnTheSidesLarge && css `
        padding: 0 20px;
    `}
    ${props => props.$paddingTopSmall && css `
        padding-top: 12px;
    `}
    ${props => props.$paddingTopMedium && css `
        padding-top: 30px;
    `}
    ${props => props.$paddingTopLarge && css `
        padding-top: 40px;
    `}
    ${props => props.$paddingBottom && css `
        padding-bottom: 20px;
    `}
`;
