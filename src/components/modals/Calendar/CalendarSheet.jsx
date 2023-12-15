import React from "react";
import WeekDays from "./WeekDays";
import CalendarDays from "./CalendarDays";
import FlexColumnWrapper from "../../../ui/FlexColumnWrapper";

const CalendarSheet = ( { activeMonthId, year, setChosenDay } ) => {

    return (
        <FlexColumnWrapper $paddingOnTheSidesMiddle>
            <WeekDays />
            <CalendarDays activeMonthId={activeMonthId} year={year} setChosenDay={setChosenDay} />
        </FlexColumnWrapper>
    )
};

export default CalendarSheet;


