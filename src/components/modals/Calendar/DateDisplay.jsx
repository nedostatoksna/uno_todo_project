import React, { useContext } from "react";
import styled, { css } from "styled-components";
import IconButton from "../../../ui/IconButton";
import { AppContext } from "../../../context/context";
import { fullMonths, threeLettersWeekDays } from "../../../data/calendar";
import FlexRowWrapper from "../../../ui/FlexRowWrapper";

const DateDisplay = () => {

    const context = useContext(AppContext);

    const prepareDateStringForDisplay = () => {
        let dateForDisplay;
        const today = new Date();
        const dayOfTheWeek = threeLettersWeekDays[today.getDay()];
        const month = fullMonths[today.getMonth()].title.slice(0, 3);
        const day = today.getDate();
        dateForDisplay = dayOfTheWeek + ", " + month + " " + day;

        return dateForDisplay;
    }

    return (
        <FlexRowWrapper 
            $flexStart 
            $spaceBetween 
            $paddingTopBottomLarge 
            $paddingRightMedium 
            $paddingLeft
        >
                <StyledDate $mode={context.mode}>
                    {prepareDateStringForDisplay()}
                </StyledDate>
                <IconButton 
                    $mode={context.mode} 
                    $type={"editGrey"} 
                    $large 
                ></IconButton>
        </FlexRowWrapper>
    )
};

export default DateDisplay;
  
const StyledDate= styled.p`
    font-size: 32px;
    line-height: 40px; 
    ${props => props.$mode === "Light" && css`
        color: var(--black);
    `}
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-white-text);
    `}
    background-color: transparent;
    width: calc(100% - 88px);
`;


