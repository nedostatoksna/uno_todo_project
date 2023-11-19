import React from "react";
import styled, { css } from "styled-components";
import plusIcon from "../images/plusIcon.svg";
import plusIconLighter from "../images/plusIconLighter.svg";
import plusIconWhite from "../images/whitePlusIcon.svg";
import whiteCrossIcon from "../images/whiteCrossIcon.svg";
import blackCrossIcon from "../images/blackCrossIcon.svg";
import searchIcon from "../images/searchIcon.svg";
import searchIconDarkTheme from "../images/searchIconDark.svg";
import editIconWhite from "../images/editIcon.svg";
import deleteIconWhite from "../images/deleteIcon.svg";


const Button = ( props ) => { 
    return (
        <>
            <StyledButton {...props}>{props.children}</StyledButton>
        </>
    )
};

export default Button;

const StyledButton = styled.button` 
    color: ${props => props.$color || "#fff"};
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.1px;
    height: 40px;
    border-radius: 20px;
    width: ${props => props.$width || undefined};
    background-repeat: no-repeat;  

    ${props => props.$primary && css `
        background-color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
        padding: 10px 24px;
    `}
    ${props => props.$coral && css `
        background-color: ${props => props.$mode === "Light" ? "#F85977" : "#D9415E"};
        padding: 10px 24px;
    `}
    ${props => props.$coralWhite && css `
        color: ${props => props.$mode === "Light" ? "#F85977" : "#D9415E"};
        padding: 10px 12px;
        background: transparent;
        text-align: center;
        margin-bottom: 12px;
    `}
    ${props => props.$white && css `
        background-color: ${props => props.$mode === "Light" ? "#fff" : "#201F24"};
        color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
        margin: 0px 10px;
        padding: 10px 12px;
        &:hover {
        background: #E5DEFF;
        color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
        }
    `}
    ${props => props.$plusBtnWhite && css `
        background-color: ${props => props.$mode === "Light" ? "#fff" : "#201F24"};
        color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
        background-image: ${props.$mode === "Light" ? `url(${plusIcon})` : `url(${plusIconLighter})`};
        background-position: center left 12px;
        padding: 10px 16px 10px 38px;
        text-align: start;
        width: 100%;
    `}
    ${props => props.$plusBtnPurple && css `
        background-color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
        color: #fff;
        background-image: url(${plusIconWhite});
        background-position: center left 16px;
        padding: 10px 24px 10px 42px;
        text-align: start;
    `}
    ${props => props.$plusBtnTransparent && css `
        background-color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.16)" : "rgba(230, 225, 229, 0.16)"};
        background-image: url(${plusIconWhite});
        background-position: center left 16px;
        padding: 10px 24px 10px 42px;
        color: #fff;
        text-align: start;
        width: 100%;
    `}
    ${props => props.$icon && css `
        background-image: ${props => props.$type === "edit" ? `url(${editIconWhite})`
            : props.$type === "delete" ? `url(${deleteIconWhite})` 
            : props.$type === "cross" && props.$mode === "Light" ? `url(${blackCrossIcon})` 
            : props.$type === "cross" && props.$mode === "Dark" ? `url(${whiteCrossIcon})`
            : props.$type === "search" && props.$mode === "Light" ? `url(${searchIcon})` 
            : props.$type === "search" && props.$mode === "Dark" ? `url(${searchIconDarkTheme})`
            : undefined
        };
        background-position: center;
        padding: ${props => props.$padding || "0px"};
        margin: ${props => props.$margin || "0px"};
        width: ${props => props.$width || "40px"};;
        height: ${props => props.$height || "40px"};
        border-radius: 0px;
        background-color: transparent;
    `}

`;