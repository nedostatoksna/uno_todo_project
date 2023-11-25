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
    color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-medium-variant)" : "var(--dark-mode-transparent-grey-text-medium-variant)"};
    background: ${props => props.$mode === "Light" ? "var(--white-input-background)" : "var(--dark-mode-input-background)"};
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin: 20px 0px;
    width: 452px;
    height: 60px;
    padding: 8px 16px;
    border: none;
    border-bottom: 2px solid ${props => props.$mode === "Light" ? "var(--transparent-grey-text-medium-variant)" : "var(--dark-mode-transparent-grey-text-medium-variant)"};
`;
