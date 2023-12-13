import React from "react";
import styled, { css } from "styled-components";

const TextInput = ( props ) => {

    return (
        <>
            <StyledTextInput {...props} />
        </>
    )
};
export default TextInput;

const StyledTextInput = styled.input` 
    margin: 20px 0px;
    width: 452px;
    height: 60px;
    padding: 8px 16px;
    border: none;
    ${props => props.$mode === "Light" && css`
        color: var(--transparent-grey-text-medium-variant);
        background: var(--white-input-background);
        border-bottom: 2px solid var(--transparent-grey-text-medium-variant);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-transparent-grey-text-medium-variant);
        background: var(--dark-mode-input-background);
        border-bottom: 2px solid var(--dark-mode-transparent-grey-text-medium-variant);
    `} 
`;
