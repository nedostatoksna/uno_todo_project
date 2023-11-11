import React from "react";
import styled from "styled-components";

const CancelButton = ( props ) => {

    return (
        <>
            <StyledButton {...props}>Cancel</StyledButton>
        </>
    )
};
export default CancelButton;

const StyledButton = styled.button` 
    margin: 0px 10px;
    color: ${props => props.$mode === 'Light' ? '#5946D2' : '#9373FF'};
    background-color: ${props => props.$mode === "Light" ? "#fff" : "#201F24"};
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.1px;
    border: none;
    width: 68px;
    height: 40px;
    padding: 10px 12px;
    border-radius: 20px;
    &:hover {
        background: #E5DEFF;
        color: ${props => props.$mode === 'Light' ? '#5946D2' : '#9373FF'};
    }
`;