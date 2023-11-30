import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/context";
import { oneLettersWeekDays } from "../../../context/calendar";

const WeekDays = () => {
    
    const context = useContext(AppContext);

    return (
        <CalendarWrapper>
        {
            oneLettersWeekDays.map(day => (
                <StyledWeekDay $mode={context.mode}>{day}</StyledWeekDay>
            ))
        } 
        </CalendarWrapper>
    )
};

export default WeekDays;

const CalendarWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const StyledWeekDay = styled.li`
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-dark-variant)" : "var(--dark-mode-transparent-grey-text-dark-variant)"};
    padding: 8px 15px;
`;

