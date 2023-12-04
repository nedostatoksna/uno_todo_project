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
    margin: 20px 0px;
    width: 452px;
    height: 60px;
    padding: 8px 16px;
    border: none;
    border-bottom: 2px solid ${props => props.$mode === "Light" ? "var(--transparent-grey-text-medium-variant)" : "var(--dark-mode-transparent-grey-text-medium-variant)"};
`;
