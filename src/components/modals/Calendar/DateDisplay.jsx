import React, { useContext } from "react";
import styled from "styled-components";
import IconButton from "../../../ui/IconButton";
import { AppContext } from "../../../context/context";
import { fullMonths, threeLettersWeekDays } from "../../../context/calendar";

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
        <DateEditPanelWrapper>
                <StyledDate $mode={context.mode}>
                    {prepareDateStringForDisplay()}
                </StyledDate>
                <IconButton $mode={context.mode} $type={"editGrey"} $large ></IconButton>
        </DateEditPanelWrapper>
    )
};

export default DateDisplay;

const DateEditPanelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 16px 14px 16px 20px;
`;
const StyledDate= styled.p`
    font-size: 32px;
    line-height: 40px; 
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
    background-color: transparent;
    width: calc(100% - 88px);
`;


