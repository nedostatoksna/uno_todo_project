import React from "react";
import styled, { css } from "styled-components";
import starUnfilled from "../images/starUnfilled.svg";
import starUnfilledDark from "../images/starUnfilledForDark.svg";
import starFilled from "../images/starFilled.svg";
import starFilledDark from "../images/starFilledForDark.svg";
import filledCheckbox from "../images/filledCheckbox.svg";
import filledCheckboxDark from "../images/filledCheckboxForDark.svg";

const Checkbox = ( props ) => { 
    return (
        <StyledContainer {...props}>
                <StyledInput {...props} type="checkbox" value="option"/>
                <StyledLabel {...props} htmlFor="option"></StyledLabel>
        </StyledContainer>
    )
};

export default Checkbox;

const StyledInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 20px;
    width: 20px;
`;
const StyledLabel = styled.label`
    top: 0;
    left: 0;
    display: flex;
    height: 20px;
    width: 20px;

    ${props => props.$primary && css `
        border: 2px solid;
        border-color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.6)" : "rgba(230, 225, 229, 0.6)"};
        border-radius: 4px;
    `}
    ${props => props.$star && css `
        background-image: ${props.$mode === "Light" ? `url(${starUnfilled})` : `url(${starUnfilledDark})`};
        background-position: center;
        background-repeat: no-repeat;

    `}
`;
const StyledContainer = styled.div`
    padding: 10px 10px;
    margin: ${props => props.$margin};
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    & ${StyledInput}:checked ~ ${StyledLabel} {
        ${props => props.$starChecked && css `
            background-image: ${props.$mode === "Light" ? `url(${starFilled})` : `url(${starFilledDark})`};
            background-position: center;
            background-repeat: no-repeat;
        `}
        ${props => props.$checked && css `
            background-image: ${props.$mode === "Light" ? `url(${filledCheckbox})` : `url(${filledCheckboxDark})`};
            border-color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
            background-position: center;
            background-repeat: no-repeat;
        `}
    };
`;
