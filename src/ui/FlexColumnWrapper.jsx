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
    position: relative;

    ${props => props.$widthSmall && css `
        width: 20%;
    `}
    ${props => props.$widthMax && css `
        width: 80%;
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
    ${props => props.$paddingBottomLarge && css `
        padding-bottom: 40px;
    `}
    ${props => props.$paddingTopBottomSmall && css `
        padding-bottom: 8px;
        padding-top: 8px;
    `}
    ${props => props.$heightMin && css `
        height: calc(100% - 40px);
    `}
    ${props => props.$heightMinLarge && css `
        min-height: calc(100vh - 182px);
    `}
    ${props => props.$heighToContent && css `
        height: fit-content;
    `}
`;
