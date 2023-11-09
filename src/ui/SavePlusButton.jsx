import React from "react";
import styled from "styled-components";
import plusIcon from "../images/whitePlusIcon.svg";

const SavePlusButton = ( props ) => { // text, onClick

    return (
        <>
            <StyledButton {...props}>{props.$text}</StyledButton>
        </>
    )
};
export default SavePlusButton;

const StyledButton = styled.button` 
    margin: 0px;
    color: #FFFFFF;
    background-color: #5946D2;
    background-image: url(${plusIcon});
    background-repeat: no-repeat;
    background-position: center left 16px;
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.1px;
    border: none;
    height: 40px;
    padding: 10px 24px 10px 42px;
    border-radius: 20px;
`;
