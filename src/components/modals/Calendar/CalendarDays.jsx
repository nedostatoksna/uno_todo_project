import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/context";

const CalendarDays = ({ activeMonth, activeDay }) => {

    const today = new Date();
    const year = today.getFullYear();
    const chosenDate = new Date(year, activeMonth.id, activeDay);

    let currentDays = [];

    const findWeekDay = (y, m, d) => {
        return new Date(y, m, d).getDay();
     };
    const findTotalMonthDays = (y, m, d) => {
        return new Date(y, m, d).getDate();
     };

     let daysOfTheActiveMonth = findTotalMonthDays(year, activeMonth.id + 1, 0);
     let daysOfThePrevMonth = findTotalMonthDays(year, activeMonth.id, 0);
     let weekdayOfFirstDay = findWeekDay(year, activeMonth.id, 1);
     let weekdayOfLastDay = findWeekDay(year, activeMonth.id, daysOfTheActiveMonth);

     const fillPrevMonthDays = () => {
        let resultArr = [];
        if (weekdayOfFirstDay !== 0) {
            for (let i = 0; i < weekdayOfFirstDay; i++) {
                const date = daysOfThePrevMonth--;
                const dateObj = {
                    date: date,
                    month: activeMonth.id - 1,
                    weekDay: new Date(year, activeMonth.id - 1, date).getDay(),
                    activeMonth: false
                };
                resultArr.unshift(dateObj);
            }
        }
        return resultArr;
     }

     const fillActiveMonthDays = () => {
        let resultArr = [];
        for (let i = 1; i < daysOfTheActiveMonth + 1; i++) {
            let date = i;
            const dateObj = {
                date: date,
                month: activeMonth.id,
                weekDay: new Date(year, activeMonth.id, date).getDay(),
                activeMonth: true
            };
            resultArr.push(dateObj);
        }
        return resultArr;
     }
     const fillNextMonthDays = () => {
        let resultArr = [];
        let num;
        if (weekdayOfLastDay === 0) {
            num = 7;
        } else {
            num = 6 - weekdayOfLastDay;
        }
        
        for (let i = 1; i < num; i++) {
            let date = i;
            const dateObj = {
                date: date,
                month: activeMonth.id + 1,
                weekDay: new Date(year, activeMonth.id + 1, date).getDay(),
                activeMonth: false
            };
            resultArr.push(dateObj);
        }
        return resultArr;
     };

     console.log(daysOfTheActiveMonth);
     console.log(daysOfThePrevMonth);
     console.log(weekdayOfLastDay);
     console.log(weekdayOfFirstDay);

     const prevArr = fillPrevMonthDays();
     const activeArr = fillActiveMonthDays();
     const nextArr = fillNextMonthDays();
     currentDays.push(prevArr);
     currentDays.push(activeArr);
     currentDays.push(nextArr);
     const flatDays = currentDays.flat(Infinity);
     console.log(flatDays);

    



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