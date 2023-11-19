import React from "react";
import styled from "styled-components";

const TextInput = ( props ) => {

    return (
        <>
            <StyledTextInput {...props} />
        </>
    )
};
export default TextInput;

const StyledTextInput = styled.input` 
    color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.38)" : "rgba(230, 225, 229, 0.38)"};
    background: ${props => props.$mode === "Light" ? "#FAF9FB" : "#49454F"};
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: 0.5px;
    margin: 20px 0px;
    width: 452px;
    height: 60px;
    padding: 8px 16px;
    border: none;
    border-bottom: 2px solid ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.38)" : "rgba(230, 225, 229, 0.38)"};
`;
