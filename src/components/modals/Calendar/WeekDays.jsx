import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/context";
import { oneLettersWeekDays } from "../../../data/calendar";

const WeekDays = () => {
    
    let weekDayId = 0;
    const context = useContext(AppContext);

    return (
        <CalendarWrapper>
        {
            oneLettersWeekDays.map(day => (
                <StyledWeekDay key={weekDayId++} $mode={context.mode}>{day}</StyledWeekDay>
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
    color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-dark-variant)" : "var(--dark-mode-transparent-grey-text-dark-variant)"};
    padding: 8px 15px;
`;


