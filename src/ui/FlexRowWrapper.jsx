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
    ${props => props.$pointer && css `
        cursor: pointer;
    `}
    ${props => props.$paddingLeft && css `
        padding-left: 20px;
    `}
    ${props => props.$paddingRightSmall && css `
        padding-right: 12px;
    `}
    ${props => props.$paddingRightMedium && css `
        padding-right: 14px;
    `}
    ${props => props.$paddingTopBottomSmall && css `
        padding-top: 8px;
        padding-bottom: 8px;
    `}
    ${props => props.$paddingTopBottomMedium && css `
        padding-top: 12px;
        padding-bottom: 12px;
    `}
    ${props => props.$paddingTopBottomLarge && css `
        padding-top: 16px;
        padding-bottom: 16px;
    `}
    ${props => props.$marginLeftLarge && css `
        margin-left: 24px;
    `}
    ${props => props.$marginBottomSmall && css `
        margin-bottom: 10px;
    `}
    ${props => props.$marginTopBottomSmall && css `
        margin-top: 12px;
        margin-bottom: 12px;
    `}
    ${props => props.$fixedPosition && css `
        position: absolute;
        bottom: 0;
        margin-bottom: 20px;
    `}
    ${props => props.$width && css `
        width: calc(100% - 20px);
    `}
`;
