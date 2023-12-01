import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppContext } from "../../../context/context";
import WeekDays from "./WeekDays";
import CalendarDays from "./CalendarDays";

const CalendarSheet = ( { activeTodo, activeDay, activeMonthId} ) => {
    
    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const today = new Date();
    const year = today.getFullYear();

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


