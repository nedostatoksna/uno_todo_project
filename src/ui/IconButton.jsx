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
            :`url(${calendarGrey})` 
        };
    `} 
    ${props => props.$mode === "Dark" && css`
    background-image: ${props => props.$type === "cross" ? `url(${whiteCrossIcon})`
            : props.$type === "crossGrey" ? `url(${crossIconGreyForDark})`
            : props.$type === "search" ? `url(${searchIconDarkTheme})`
            : props.$type === "addDateActive" ? `url(${calendarIconForDark})`
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