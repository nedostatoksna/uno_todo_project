import React from "react";
import styled from "styled-components";
import sunIcon from "../images/sunIcon.svg";
import sunIconDark from "../images/sunIconForDark.svg";
import moonIcon from "../images/moonIcon.svg";
import moonIconDark from "../images/moonIconForDark.svg";

const SettingsButton = ( props ) => { 
    return (
        <>
            <StyledContainer {...props}>
                <StyledInput {...props} type="radio" value={props.$option} id={props.$option}/>
                <StyledLabel {...props} htmlFor={props.$option}>  
                    {
                        (props.$option === "Light") ? <img {...props} src={props.$mode === "Light" ? sunIcon : sunIconDark} alt="sun" /> 
                            : props.$option === "Dark" ? <img {...props} src={props.$mode === "Light" ? moonIcon : moonIconDark} alt="moon" /> 
                            : undefined
                    }
                    <StyledMark {...props}>{props.$option}</StyledMark>
                </StyledLabel>
            </StyledContainer>
        </>
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
    color: ${props => props.$mode === "Light" ? "var(--light-grey-text)" : "var(--dark-mode-light-grey-text)"};
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.1px;
    border-radius: 8px;
    padding: 6px 8px;
`;
const StyledMark = styled.span`
    padding: 0px 8px;
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
    &:hover ${StyledInput} ~ ${StyledLabel} {
        background-color: ${props => props.$mode === "Light" ? "var(--transparent-light-grey-text)" : "var(--dark-mode-transparent-light-grey-text)"};
    };
    & ${StyledInput}:checked ~ ${StyledLabel} {
        background-color: ${props => props.$mode === "Light" ? "var(--primary-lavender)" : "var(--dark-grayish-lavender)"};
        color: ${props => props.$mode === "Light" ? "var(--dark-purple-button-text)" : "var(--light-lavender)"};
        border: 1px solid;
        border-color: ${props => props.$mode === "Light" ? "var(--primary-lavender)" : "var(--dark-grayish-lavender)"};
    };
`;