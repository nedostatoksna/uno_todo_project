import React from "react";
import styled from "styled-components";
import WeekDays from "./WeekDays";
import CalendarDays from "./CalendarDays";

const CalendarSheet = ( { activeTodo, activeDay, activeMonthId} ) => {

    return (
        <CalendarWrapper>
        <WeekDays />
        <CalendarDays activeTodo={activeTodo} activeDay={activeDay} activeMonthId={activeMonthId} />

        </CalendarWrapper>
    )
};

export default CalendarSheet;

const CalendarWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0px 12px;
`;


