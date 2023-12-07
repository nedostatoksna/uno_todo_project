import React from "react";
import styled from "styled-components";
import WeekDays from "./WeekDays";
import CalendarDays from "./CalendarDays";

const CalendarSheet = ( { activeMonthId, year, setChosenDay } ) => {

    return (
        <CalendarWrapper>
            <WeekDays />
            <CalendarDays activeMonthId={activeMonthId} year={year} setChosenDay={setChosenDay} />
        </CalendarWrapper>
    )
};

export default CalendarSheet;

const CalendarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 12px;
`;
