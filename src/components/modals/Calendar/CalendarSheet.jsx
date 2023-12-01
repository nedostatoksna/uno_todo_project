import React from "react";
import styled from "styled-components";
import WeekDays from "./WeekDays";
import CalendarDays from "./CalendarDays";

const CalendarSheet = ( { activeMonthId, todo } ) => {

    return (
        <CalendarWrapper>
            <WeekDays />
            <CalendarDays activeMonthId={activeMonthId} todo={todo} />
        </CalendarWrapper>
    )
};

export default CalendarSheet;

const CalendarWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0px 12px;
`;


