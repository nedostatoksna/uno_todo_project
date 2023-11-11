import React from "react";
import styled from "styled-components";
import plusIcon from "../../images/plusIcon.svg";

const PlusButton = ( props ) => { 

    return (
        <>
            <StyledPlusButton {...props}>{props.children}</StyledPlusButton>
        </>
    )
};
export default PlusButton;

const StyledPlusButton = styled.button` 
    margin-top: 20px;
    color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
    background-color: ${props => props.$mode === "Light" ? "#fff" : "#201F24"};
    background-image: url(${plusIcon});
    background-repeat: no-repeat;
    background-position: center left 12px;
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.1px;
    border: none;
    height: 44px;
    padding: 8px 8px 8px 38px;
    border-radius: 20px;
    width: 240px;
    text-align: start;    
`;