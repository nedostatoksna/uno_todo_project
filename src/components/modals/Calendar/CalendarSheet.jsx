import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppContext } from "../../../context/context";
import WeekDays from "./WeekDays";
import CalendarDays from "./CalendarDays";

const CalendarSheet = ( {activeMonth, activeDay} ) => {
    
    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const today = new Date();
    const year = today.getFullYear();
    console.log(activeDay);
    const getNumberOfDays = () => {
        let numberOfDays;
        let daysArray = [];
        if (activeMonth.title === "January" || "March" || "May" || "July" || "August" || "October" || "December") {
            numberOfDays = 31;
        } else if (activeMonth.title === "February") {
            if (year % 4 === 0) {
                numberOfDays = 29;
            } else {
                numberOfDays = 28;
            }
        } else {
            numberOfDays = 30;
        }
        for (let i = 1; i < numberOfDays + 1; i++) {
            daysArray.push(i);
        }
        return daysArray;
    }

    return (
        <CalendarWrapper>
        <WeekDays />
        <CalendarDays daysOfTheMonth={getNumberOfDays()} activeDay={activeDay} activeMonth={activeMonth} />

        </CalendarWrapper>
    )
};

export default CalendarSheet;

const CalendarWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0px 12px;
`;


