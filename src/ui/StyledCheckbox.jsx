import React, { useContext } from "react";
import styled, { css } from "styled-components";
import starUnfilled from "../images/starUnfilled.svg";
import starUnfilledDark from "../images/starUnfilledForDark.svg";
import starFilled from "../images/starFilled.svg";
import starFilledDark from "../images/starFilledForDark.svg";
import starGrey from "../images/starIconGrey.svg";
import starGreyForDark from "../images/starIconGreyDark.svg";
import filledCheckbox from "../images/filledCheckbox.svg";
import filledCheckboxDark from "../images/filledCheckboxForDark.svg";
import { AppContext } from "../context/context";

const Checkbox = ({ labelPrimary, 
                    labelStarGrey, 
                    labelStar, 
                    todoId,
                    sidebar,
                    checkedPrimary,
                    leftPosition,
                    rightPosition,
                    starChecked, 
                    onChangeHandler, 
                    isChecked }) => { 

    const context = useContext(AppContext);

    const setId = () => {
        const id = labelPrimary && sidebar ? "sidebarPrimary" + todoId
        : labelStarGrey ? "sidebarStar" + todoId
        : labelStar ? "star" + todoId
        : "primary" + todoId
        return id
    }

    return (
        <StyledContainer $mode={context.mode} $leftPosition={leftPosition} $rightPosition={rightPosition} $checked={checkedPrimary} $starChecked={starChecked}>
                <StyledInput 
                    $mode={context.mode} 
                    type="checkbox" 
                    checked={isChecked} 
                    id={setId()} 
                    onChange={() => onChangeHandler()} 
                />
                <StyledLabel 
                    $primary={labelPrimary}
                    $star={labelStar}
                    $starGrey={labelStarGrey}
                    $mode={context.mode} 
                    htmlFor={setId()}
                ></StyledLabel>
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
        border-color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-dark-variant)" : "var(--dark-mode-transparent-grey-text-dark-variant)"};
        border-radius: 4px;
    `}
    ${props => props.$star && css `
        background-image: ${props.$mode === "Light" ? `url(${starUnfilled})` : `url(${starUnfilledDark})`};
        background-position: center;
        background-repeat: no-repeat;
    `}
    ${props => props.$starGrey && css `
        background-image: ${props.$mode === "Light" ? `url(${starGrey})` : `url(${starGreyForDark})`};
        background-position: center;
        background-repeat: no-repeat;
    `}
`;
const StyledContainer = styled.div`
    padding: 10px 10px;
    margin: 10px 0;
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${props => props.$leftPosition && css `
        margin-right: 16px;
    `}
    ${props => props.$rightPosition && css `
        margin-left: 16px;
    `}
    & ${StyledInput}:checked ~ ${StyledLabel} {
        ${props => props.$starChecked && css `
            background-image: ${props.$mode === "Light" ? `url(${starFilled})` : `url(${starFilledDark})`};
            background-position: center;
            background-repeat: no-repeat;
        `}
        ${props => props.$checked && css `
            background-image: ${props.$mode === "Light" ? `url(${filledCheckbox})` : `url(${filledCheckboxDark})`};
            border-color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
            background-position: center;
            background-repeat: no-repeat;
        `}
    };
`;
