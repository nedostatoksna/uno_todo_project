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

    ${props => props.$widthSmall && css `
        width: 20vw;
    `}
    ${props => props.$widthMax && css `
        width: 80vw;
    `}
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
    ${props => props.$heightMax && css `
        height: 100%;
    `}
    ${props => props.$widthMax && css `
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
    ${props => props.$paddingOnTheSidesMiddle && css `
        padding: 0 12px;
    `}
    ${props => props.$paddingOnTheSidesLarge && css `
        padding: 0 20px;
    `}
    ${props => props.$paddingAllSides && css `
        padding: 12px;
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
    ${props => props.$paddingTopBottomSmall && css `
        padding-bottom: 8px;
        padding-top: 8px;
    `}
`;
