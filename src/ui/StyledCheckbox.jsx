import React, { useContext } from "react";
import styled, { css } from "styled-components";
import starUnfilled from "../resources/images/starUnfilled.svg";
import starUnfilledDark from "../resources/images/starUnfilledForDark.svg";
import starFilled from "../resources/images/starFilled.svg";
import starFilledDark from "../resources/images/starFilledForDark.svg";
import starGrey from "../resources/images/starIconGrey.svg";
import starGreyForDark from "../resources/images/starIconGreyDark.svg";
import filledCheckbox from "../resources/images/filledCheckbox.svg";
import filledCheckboxDark from "../resources/images/filledCheckboxForDark.svg";
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
        <StyledContainer 
            $mode={context.mode} 
            $leftPosition={leftPosition} 
            $rightPosition={rightPosition} 
            $checked={checkedPrimary} 
            $starChecked={starChecked}
        >
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
        border-radius: 4px;
        ${props => props.$mode === "Light" && css`
            border-color: var(--transparent-grey-text-dark-variant);
        `} 
        ${props => props.$mode === "Dark" && css`
            border-color: var(--dark-mode-transparent-grey-text-dark-variant);
        `} 
    `}
    ${props => props.$star && css `
        background-position: center;
        background-repeat: no-repeat;
        ${props => props.$mode === "Light" && css`
            background-image: url(${starUnfilled});
        `} 
        ${props => props.$mode === "Dark" && css`
            background-image: url(${starUnfilledDark});
        `} 
    `}
    ${props => props.$starGrey && css `
        background-position: center;
        background-repeat: no-repeat;
        ${props => props.$mode === "Light" && css`
            background-image: url(${starGrey});
        `} 
        ${props => props.$mode === "Dark" && css`
            background-image: url(${starGreyForDark});
        `} 
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
            background-position: center;
            background-repeat: no-repeat;
            ${props => props.$mode === "Light" && css`
                background-image: url(${starFilled});
            `} 
            ${props => props.$mode === "Dark" && css`
                background-image: url(${starFilledDark});
            `} 
        `}
        ${props => props.$checked && css `
            background-position: center;
            background-repeat: no-repeat;
            ${props => props.$mode === "Light" && css`
                background-image: url(${filledCheckbox});
                border-color: var(--primary-purple);
            `} 
            ${props => props.$mode === "Dark" && css`
                background-image: url(${filledCheckboxDark});
                border-color: var(--dark-mode-primary-purple);
            `} 
        `}
    };
`;
