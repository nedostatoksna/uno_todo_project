import React, { useContext } from "react";
import styled, { css } from "styled-components";
import sunIcon from "../resources/images/sunIcon.svg";
import sunIconDark from "../resources/images/sunIconForDark.svg";
import moonIcon from "../resources/images/moonIcon.svg";
import moonIconDark from "../resources/images/moonIconForDark.svg";
import { AppContext } from "../context/context";

const SettingsButton = ({ option, onChange, checked }) => { 

    const context = useContext(AppContext);

    return (
        <StyledContainer $mode={context.mode}>
            <StyledInput 
                $mode={context.mode} 
                type="radio" 
                value={option} 
                id={option} 
                onChange={onChange} 
                checked={checked}
            />
            <StyledLabel $mode={context.mode} htmlFor={option}>  
                {
                    (option === "Light") 
                        ? <img 
                                src={context.mode === "Light" ? sunIcon : sunIconDark} 
                                alt="sun" /> 
                        : option === "Dark" ? <img 
                                                    src={context.mode === "Light" ? moonIcon : moonIconDark} 
                                                    alt="moon" /> 
                        : undefined
                }
                <StyledMark>{option}</StyledMark>
            </StyledLabel>
        </StyledContainer>
    )
};
 
export default SettingsButton;

const StyledInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;
const StyledLabel = styled.label`
    top: 0;
    left: 0;
    display: flex;
    border: 1px solid;
    border-color: var(--dark-grey);
    line-height: 20px; 
    letter-spacing: 0.1px;
    border-radius: 8px;
    padding: 6px 8px;
    cursor: pointer;
    ${props => props.$mode === "Light" && css`
        color: var(--light-grey-text);
    `};
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-light-grey-text);
    `};
`;
const StyledMark = styled.span`
    padding: 0px 8px;
    font-weight: 600;
    cursor: pointer;
`;
const StyledContainer = styled.div`
    display: block;
    position: relative;
    margin-right: 5px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    &:hover ${StyledInput} ~ ${StyledLabel} {
        ${props => props.$mode === "Light" && css`
            background-color: var(--transparent-grey-text);
        `};
        ${props => props.$mode === "Dark" && css`
            background-color: var(--dark-mode-transparent-grey-text);
        `};
    };
    & ${StyledInput}:checked ~ ${StyledLabel} {
        border: 1px solid;
        ${props => props.$mode === "Light" && css`
            background-color: var(--primary-lavender);
            color: var(--dark-purple-button-text);
            border-color: var(--primary-lavender);
        `};
        ${props => props.$mode === "Dark" && css`
            background-color: var(--dark-grayish-lavender);
            color: var(--light-lavender);
            border-color: var(--dark-grayish-lavender);
        `};
    };
`;