import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CalendarDay from "./CalendarDay";

const CalendarDays = ({ activeMonthId, todo }) => {

    const year = useSelector(state => state.calendarUI.activeYear);

    const findWeekDay = (y, m, d) => {
        return new Date(y, m, d).getDay();
     };
    const findTotalMonthDays = (y, m, d) => {
        return new Date(y, m, d).getDate();
     };

    let numberOfDaysInActiveMonth = findTotalMonthDays(year, activeMonthId + 1, 0);
    let numberOfDaysInPrevMonth = findTotalMonthDays(year, activeMonthId, 0);
    let weekdayOfFirstDay = findWeekDay(year, activeMonthId, 1);
    let weekdayOfLastDay = findWeekDay(year, activeMonthId, numberOfDaysInActiveMonth);

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

     const fillActiveMonthDays = () => {
        let resultArr = [];
        for (let i = 1; i < numberOfDaysInActiveMonth + 1; i++) {
            let date = i;
            const dateObj = {
                date: date,
                month: activeMonthId,
                weekDay: new Date(year, activeMonthId, date).getDay(),
                activeMonth: true,
            };
            resultArr.push(dateObj);
        }
        return resultArr;
     }
     const fillNextMonthDays = () => {
        let resultArr = [];
        
        for (let i = 1; i < 7 - weekdayOfLastDay; i++) {
            let date = i;
            const dateObj = {
                date: date,
                month: activeMonthId + 1,
                weekDay: new Date(year, activeMonthId + 1, date).getDay(),
                activeMonth: false,
            };
            resultArr.push(dateObj);
        }
        return resultArr;
     };
        const prevArr = fillPrevMonthDays();
        const activeArr = fillActiveMonthDays();
        const nextArr = fillNextMonthDays();

    return (
        <Wrapper>
            {
                prevArr.map(day => (
                    <CalendarDay day={day} key={day.date} todo={todo} />
              
                ))
            }
            {
                activeArr.map(day => (
                    <CalendarDay day={day} key={day.date} todo={todo} />
              
                ))
            }
            {
                nextArr.map(day => (
                    <CalendarDay day={day} key={day.date} todo={todo} />
              
                ))
            }
        </Wrapper>
    )
};

export default CalendarDays;

const Wrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 4px 0px;
`;