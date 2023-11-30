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

    return (
        <CalendarWrapper>
        <WeekDays />
        <CalendarDays activeDay={activeDay} activeMonth={activeMonth} />

        </CalendarWrapper>
    )
};

export default CalendarSheet;

const CalendarWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0px 12px;
`;


