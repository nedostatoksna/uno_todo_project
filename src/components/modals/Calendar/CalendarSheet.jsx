import React from "react";
import WeekDays from "./WeekDays";
import CalendarDays from "./CalendarDays";
import FlexColumnWrapper from "../../../styled/FlexColumnWrapper";

const CalendarSheet = ( { activeMonthId, year, setChosenDay } ) => {

    return (
        <FlexColumnWrapper $padding={"0px 12px"}>
            <WeekDays />
            <CalendarDays activeMonthId={activeMonthId} year={year} setChosenDay={setChosenDay} />
        </FlexColumnWrapper>
    )
};

export default CalendarSheet;


