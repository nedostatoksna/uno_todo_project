import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppContext } from "../../../context/context";

const CalendarDays = ({ daysOfTheMonth, activeMonth, activeDay }) => {
    
    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const today = new Date();
    const year = today.getFullYear();

    let currentDays = [];

    const findFirstDay = (y, m) => {
        return new Date(y, m, 1).getDay();
     };


    const findMonthDays = (y, m) => {
        return new Date(y, m + 1, 0).getDate();
     };


     const weekdayOfFirstDay = findFirstDay(year, activeMonth.id);
     const firstDayOfMonth = new Date(year, activeMonth.id, 1);


     





    return (
        <Wrapper>

        </Wrapper>
    )
};

export default CalendarDays;

const Wrapper = styled.li`
    display: flex;
    flex-direction: column;
    padding: 0px 12px;
`;