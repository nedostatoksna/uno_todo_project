import React from "react";
import styled, { css } from "styled-components";
import whiteCrossIcon from "../images/whiteCrossIcon.svg";
import blackCrossIcon from "../images/blackCrossIcon.svg";
import searchIcon from "../images/searchIcon.svg";
import searchIconDarkTheme from "../images/searchIconDark.svg";
import editIconWhite from "../images/editIcon.svg";
import deleteIconWhite from "../images/deleteIcon.svg";
import calendarIcon from "../images/calenderIcon.svg";
import calendarIconForDark from "../images/calendarIconForDark.svg";
import crossIconGrey from "../images/crossIconGrey.svg";
import crossIconGreyForDark from "../images/crossIconGreyForDark.svg";
import calendarGrey from "../images/calendarIconGrey.svg";
import calendarGreyForDark from "../images/calendarIconGreyDark.svg";
import editIconGrey from "../images/editIconGrey.svg";
import editIconGreyForDark from "../images/editIconGreyForDark.svg";
import arrowLeft from "../images/arrowIconLeft.svg";
import arrowLeftForDark from "../images/arrowIconLeftForDark.svg";
import arrowRight from "../images/arrowIcon.svg";
import arrowRightForDark from "../images/arrowIconDark.svg";
import deleteIconGrey from "../images//deleteIconGrey.svg";
import deleteIconGreyForDark from "../images/deleteIconGreyForDark.svg";

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
`;