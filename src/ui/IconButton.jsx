import React from "react";
import styled, { css } from "styled-components";
import whiteCrossIcon from "../resources/images/whiteCrossIcon.svg";
import blackCrossIcon from "../resources/images/blackCrossIcon.svg";
import searchIcon from "../resources/images/searchIcon.svg";
import searchIconDarkTheme from "../resources/images/searchIconDark.svg";
import editIconWhite from "../resources/images/editIcon.svg";
import deleteIconWhite from "../resources/images/deleteIcon.svg";
import calendarIcon from "../resources/images/calenderIcon.svg";
import calendarIconForDark from "../resources/images/calendarIconForDark.svg";
import crossIconGrey from "../resources/images/crossIconGrey.svg";
import crossIconGreyForDark from "../resources/images/crossIconGreyForDark.svg";
import calendarGrey from "../resources/images/calendarIconGrey.svg";
import calendarGreyForDark from "../resources/images/calendarIconGreyDark.svg";
import editIconGrey from "../resources/images/editIconGrey.svg";
import editIconGreyForDark from "../resources/images/editIconGreyForDark.svg";
import arrowLeft from "../resources/images/arrowIconLeft.svg";
import arrowLeftForDark from "../resources/images/arrowIconLeftForDark.svg";
import arrowRight from "../resources/images/arrowIcon.svg";
import arrowRightForDark from "../resources/images/arrowIconDark.svg";
import deleteIconGrey from "../resources/images//deleteIconGrey.svg";
import deleteIconGreyForDark from "../resources/images/deleteIconGreyForDark.svg";

const IconButton = ( props ) => { 
    return (
        <StyledButton {...props}>{props.children}</StyledButton>
    )
};

export default IconButton;

const StyledButton = styled.button` 
    background-color: transparent;
    background-repeat: no-repeat;  
    background-position: center;
    padding: ${props => props.$padding || "8px"};
    margin: ${props => props.$margin || undefined};
    background-image: ${props => props.$type === "edit" ? `url(${editIconWhite})` : `url(${deleteIconWhite})`};
     
    ${props => props.$mode === "Light" && css`
    background-image: ${props => props.$type === "cross" ? `url(${blackCrossIcon})` 
            : props.$type === "crossGrey" ? `url(${crossIconGrey})` 
            : props.$type === "search" ? `url(${searchIcon})` 
            : props.$type === "addDateActive" ? `url(${calendarIcon})` 
            : props.$type === "editGrey" ? `url(${editIconGrey})` 
            : props.$type === "arrowLeft" ? `url(${arrowLeft})` 
            : props.$type === "arrowRight" ? `url(${arrowRight})`
            : props.$type === "deleteGrey" ? `url(${deleteIconGrey})`
            :`url(${calendarGrey})` 
        };
    `} 
    ${props => props.$mode === "Dark" && css`
    background-image: ${props => props.$type === "cross" ? `url(${whiteCrossIcon})`
            : props.$type === "crossGrey" ? `url(${crossIconGreyForDark})`
            : props.$type === "search" ? `url(${searchIconDarkTheme})`
            : props.$type === "addDateActive" ? `url(${calendarIconForDark})`
            : props.$type === "editGrey" ? `url(${editIconGreyForDark})` 
            : props.$type === "arrowLeft" ? `url(${arrowLeftForDark})` 
            : props.$type === "arrowRight" ? `url(${arrowRightForDark})`
            : props.$type === "deleteGrey" ? `url(${deleteIconGreyForDark})`
            :`url(${calendarGreyForDark})`
        };
    `} 
    ${props => props.$large && css`
        height: 40px;
        width: 40px;
    `}
    ${props => props.$small && css`
        height: 24px;
        width: 24px;
    `}
    ${props => props.$marginTopBottom && css`
        margin-top: 17px;
        margin-bottom: 17px;
    `}
    ${props => props.$marginRightSmall && css`
        margin-right: 8px;
    `}
    ${props => props.$marginLeftSmall && css`
        margin-left: 8px;
    `}
    ${props => props.$marginRightLarge && css`
        margin-right: 16px;
    `}
    ${props => props.$marginLeftLarge && css`
        margin-left: 16px;
    `}
    ${props => props.$rightPosition && css`
        position: absolute;
        left: calc(100% - 16px);
    `}
`;