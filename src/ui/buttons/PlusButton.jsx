import React from "react";
import styled, { css } from "styled-components";
import plusIcon from "../../images/plusIcon.svg";
import plusIconLighter from "../../images/plusIconLighter.svg";
import plusIconWhite from "../../images/whitePlusIcon.svg";

const PlusButton = ( props ) => { 

    return (
        <>
            <StyledPlusButton {...props}>{props.children}</StyledPlusButton>
        </>
    )
};
export default PlusButton;

const StyledPlusButton = styled.button` 
    background-repeat: no-repeat;
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.1px;
    border: none;
    height: 40px;
    border-radius: 20px;
    width: ${props => props.$width || undefined};
    text-align: start;    

    ${props => props.$primary && css `
        background-color: ${props => props.$mode === "Light" ? "#fff" : "#201F24"};
        color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
        background-image: ${props.$mode === "Light" ? `url(${plusIcon})` : `url(${plusIconLighter})`};
        background-position: center left 12px;
        padding: 8px 8px 8px 38px;
    `}
    ${props => props.$modal && css `
        background-color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
        color: #fff;
        background-image: url(${plusIconWhite});
        background-position: center left 16px;
        padding: 10px 24px 10px 42px;
    `}
    ${props => props.$transparent && css `
        background-color: ${props => props.$mode === "Light" ? "#F85977" : "#D9415E"};
    `}
`;