import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CalendarDay from "./CalendarDay";

const PrevMonthDays = ({ activeTodo, activeMonthId, selectedDay }) => {

    const year = useSelector(state => state.calendarUI.activeYear);

    const findWeekDay = (y, m, d) => {
        return new Date(y, m, d).getDay();
     };
    const findTotalMonthDays = (y, m, d) => {
        return new Date(y, m, d).getDate();
     };

     let numberOfDaysInPrevMonth = findTotalMonthDays(year, activeMonthId, 0);
     let weekdayOfFirstDay = findWeekDay(year, activeMonthId, 1);

     const fillPrevMonthDays = () => {
        let resultArr = [];
        if (weekdayOfFirstDay !== 0) {
            for (let i = 0; i < weekdayOfFirstDay; i++) {
                const date = numberOfDaysInPrevMonth - i;
                const dateObj = {
                    date: date,
                    month: activeMonthId - 1,
                    weekDay: new Date(year, activeMonthId - 1, date).getDay(),
                    activeMonth: false,
                };
                resultArr.unshift(dateObj);
            }
        }
        return resultArr;
     }
        const prevArr = fillPrevMonthDays();

    return (
        <Wrapper>
            {
                prevArr.map(day => (
                    <CalendarDay day={day} key={day.date} />
              
                ))
            }
        </Wrapper>
    )
};

export default PrevMonthDays;

const Wrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 4px 0px;
`;