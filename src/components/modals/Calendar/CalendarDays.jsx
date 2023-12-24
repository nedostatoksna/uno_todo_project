import React from "react";
import styled from "styled-components";
import CalendarDay from "./CalendarDay";
import { 
    findTotalMonthDays, 
    findWeekDay } from "../../../helpers/calendarRenderPrep";

const CalendarDays = ({ activeMonthId, year, setChosenDay }) => {

    let numberOfDaysInActiveMonth = findTotalMonthDays(year, activeMonthId + 1, 0);
    let numberOfDaysInPrevMonth = findTotalMonthDays(year, activeMonthId, 0);
    let weekdayOfFirstDay = findWeekDay(year, activeMonthId, 1);
    let weekdayOfLastDay = findWeekDay(year, activeMonthId, numberOfDaysInActiveMonth);

     const fillPrevMonthDays = () => {
        const daysInThisMonth = Array.from({ length: numberOfDaysInPrevMonth }, (_, index) => index + 1);
        return daysInThisMonth.map((date) => {
            const dateObj = {
                date: date,
                month: activeMonthId === 0 ? 11 : activeMonthId - 1,
                weekDay: new Date(year, activeMonthId === 0 ? 11 : activeMonthId - 1, date).getDay(),
                year: activeMonthId === 0 ? year - 1 : year,
                activeMonth: false
            }
            return dateObj
        })
     }
     const fillActiveMonthDays = () => {
        const daysInThisMonth = Array.from({ length: numberOfDaysInActiveMonth }, (_, index) => index + 1);
        return daysInThisMonth.map((date) => {
            const dateObj = {
                date: date,
                month: activeMonthId,
                weekDay: new Date(year, activeMonthId, date).getDay(),
                year: year,
                activeMonth: true
            }
            return dateObj
        })
     }
     const fillNextMonthDays = () => {
        const daysInThisMonth = Array.from({ length: 7 }, (_, index) => index + 1);
        return daysInThisMonth.map((date) => {
            const dateObj = {
                date: date,
                month: activeMonthId === 11 ? 0 : activeMonthId + 1,
                weekDay: new Date(year, activeMonthId === 11 ? 0 : activeMonthId + 1, date).getDay(),
                year: activeMonthId === 11 ? year + 1 : year,
                activeMonth: false
            }
            return dateObj
        })
     }

        const prevArr = weekdayOfFirstDay === 0 
            ? fillPrevMonthDays().slice(numberOfDaysInPrevMonth - 7, numberOfDaysInPrevMonth)
            : fillPrevMonthDays().slice(numberOfDaysInPrevMonth - weekdayOfFirstDay, numberOfDaysInPrevMonth)
        const activeArr = fillActiveMonthDays();
        const nextArr = weekdayOfLastDay === 6 
            ? fillNextMonthDays()
            : fillNextMonthDays().slice(0, 6 - weekdayOfLastDay)
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