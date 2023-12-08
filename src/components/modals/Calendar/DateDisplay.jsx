import React, { useContext } from "react";
import styled from "styled-components";
import IconButton from "../../../ui/IconButton";
import { AppContext } from "../../../context/context";
import { fullMonths, threeLettersWeekDays } from "../../../data/calendar";
import FlexRowWrapper from "../../../styled/FlexRowWrapper";

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
        <FlexRowWrapper $flexStart $spaceBetween $padding={"16px 14px 16px 20px"}>
                <StyledDate $mode={context.mode}>
                    {prepareDateStringForDisplay()}
                </StyledDate>
                <IconButton $mode={context.mode} $type={"editGrey"} $large ></IconButton>
        </FlexRowWrapper>
    )
};

export default DateDisplay;
  
const StyledDate= styled.p`
    font-size: 32px;
    line-height: 40px; 
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
    background-color: transparent;
    width: calc(100% - 88px);
`;


