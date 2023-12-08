import React, { useContext } from "react";
import styled from "styled-components";
import sunIcon from "../images/sunIcon.svg";
import sunIconDark from "../images/sunIconForDark.svg";
import moonIcon from "../images/moonIcon.svg";
import moonIconDark from "../images/moonIconForDark.svg";
import { AppContext } from "../context/context";

const SettingsButton = ({ option, onChange, checked }) => { 

    const context = useContext(AppContext);

    return (
        <>
            <StyledContainer $mode={context.mode}>
                <StyledInput $mode={context.mode} type="radio" value={option} id={option} onChange={onChange} checked={checked}/>
                <StyledLabel $mode={context.mode} htmlFor={option}>  
                    {
                        (option === "Light") ? <img src={context.mode === "Light" ? sunIcon : sunIconDark} alt="sun" /> 
                            : option === "Dark" ? <img src={context.mode === "Light" ? moonIcon : moonIconDark} alt="moon" /> 
                            : undefined
                    }
                    <StyledMark>{option}</StyledMark>
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
    line-height: 20px; 
    letter-spacing: 0.1px;
    border-radius: 8px;
    padding: 6px 8px;
`;
const StyledMark = styled.span`
    padding: 0px 8px;
    font-weight: 600;
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
        background-color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text)" : "var(--dark-mode-transparent-grey-text)"};
    };
    & ${StyledInput}:checked ~ ${StyledLabel} {
        background-color: ${props => props.$mode === "Light" ? "var(--primary-lavender)" : "var(--dark-grayish-lavender)"};
        color: ${props => props.$mode === "Light" ? "var(--dark-purple-button-text)" : "var(--light-lavender)"};
        border: 1px solid;
        border-color: ${props => props.$mode === "Light" ? "var(--primary-lavender)" : "var(--dark-grayish-lavender)"};
    };
`;