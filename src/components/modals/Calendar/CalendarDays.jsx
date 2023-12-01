import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppContext } from "../../../context/context";
import CalendarDay from "./CalendarDay";

const CalendarDays = ({ activeTodo, activeMonthId, activeDay }) => {

    const year = useSelector(state => state.calendarUI.activeYear);
    const prevMonthId = activeMonthId === 0 ? 11 : activeMonthId - 1;
    const nextMonthId = activeMonthId === 11 ? 0 : activeMonthId + 1;
    console.log(" prev month id : ", prevMonthId);
    console.log(" active month id : ", activeMonthId);
    console.log(" next month id : ", nextMonthId);
    console.log(year);

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
                    activeMonth: false
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
                activeMonth: true
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
                activeMonth: false
            };
            resultArr.push(dateObj);
        }
        return resultArr;
     };

        let currentDays = [];
        const prevArr = fillPrevMonthDays();
        const activeArr = fillActiveMonthDays();
        const nextArr = fillNextMonthDays();
        currentDays.push(prevArr);
        currentDays.push(activeArr);
        currentDays.push(nextArr);
        const flatDays = currentDays.flat(1);


     console.log(" number of days in active month : ", numberOfDaysInActiveMonth);
     console.log(" number of days in prev month : ", numberOfDaysInPrevMonth);

     console.log(" week day last day of active month : ", weekdayOfLastDay);
     console.log(" week day first day of active month : ", weekdayOfFirstDay);

     console.log(" prev month days : ", prevArr);
     console.log(" active month days : ", activeArr);
     console.log(" next month days : ", nextArr);
     console.log(" all days for display : ", flatDays);

    return (
        <Wrapper>
            {
                prevArr.map(day => (
                    <CalendarDay day={day} key={day.date} />
              
                ))
            }
            {
                activeArr.map(day => (
                    <CalendarDay day={day} key={day.date} />
              
                ))
            }
            {
                nextArr.map(day => (
                    <CalendarDay day={day} key={day.date} />
              
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