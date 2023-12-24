import React from "react";
import styled from "styled-components";
import CalendarDay from "./CalendarDay";

const CalendarDays = ({ activeMonthId, year, setChosenDay }) => {

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
                    month: activeMonthId === 0 ? 11 : activeMonthId - 1,
                    weekDay: new Date(year, activeMonthId === 0 ? 11 : activeMonthId - 1, date).getDay(),
                    year: activeMonthId === 0 ? year - 1 : year,
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
                year: year,
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
                month: activeMonthId === 11 ? 0 : activeMonthId + 1,
                weekDay: new Date(year, activeMonthId === 11 ? 0 : activeMonthId + 1, date).getDay(),
                year: activeMonthId === 11 ? year + 1 : year,
                activeMonth: false,
            };
            resultArr.push(dateObj);
        }
        return resultArr;
     };
        const prevArr = fillPrevMonthDays();
        const activeArr = fillActiveMonthDays();
        const nextArr = fillNextMonthDays();
        const visibleDays = [];
        visibleDays.push(prevArr);
        visibleDays.push(activeArr);
        visibleDays.push(nextArr);

    return (
        <DaysWrapper>
            {
                visibleDays.map(daysArray =>
                    daysArray.map(day => (
                        <CalendarDay 
                            day={day} 
                            key={day.date} 
                            setChosenDay={setChosenDay} 
                        />
                    ))
                )
            }
        </DaysWrapper>
    )
};

export default CalendarDays;

const DaysWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 4px 0px;
`;