import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../../context/context";
import { changeSelectedDate, changeSelectedDateInUIAndInData } from "../../../store/actionCreators/calendarActionCreators";
import { fullMonths, threeLettersWeekDays } from "../../../context/calendar";

const CalendarDay = ({ day, todo }) => {
    
    const context = useContext(AppContext);
    // const selectedDay = useSelector(state => state.calendarUI.selectedDate.getDate());
    // const selectedDayMonth = useSelector(state => state.calendarUI.selectedDate.getMonth());
    // const year = useSelector(state => state.calendarUI.activeYear);


    const selectedDay = todo.deadline.deadlineObj.getDate();
    const selectedDayMonth = todo.deadline.deadlineObj.getMonth();
    const year = todo.deadline.deadlineObj.getFullYear();

    const dispatch = useDispatch();
    const todayDate = new Date().getDate();
    const todayMonth = new Date().getMonth();
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);
    const activeListId = useSelector(state => state.todoListUI.activeListId);

    const prepareDateStringForDisplay = (y, m, d) => {
        let dateForDisplay;
        const date = new Date(y, m, d);
        const dayOfTheWeek = threeLettersWeekDays[date.getDay()];
        const month = fullMonths[date.getMonth()].title.slice(0, 3);
        const day = date.getDate();
        dateForDisplay = dayOfTheWeek + ", " + month + " " + day;

        return dateForDisplay;
    }
    const dateString = prepareDateStringForDisplay(year, day.month, day.date);
    const dateObj = new Date(year, day.month, day.date);

    return (
        <Wrapper 
            $prevNext={!day.activeMonth} 
            $mode={context.mode}
            $active={day.date === selectedDay && day.month === selectedDayMonth}
            $isToday={day.date === todayDate && day.month === todayMonth}
            onClick={() => {dispatch(changeSelectedDateInUIAndInData(dateObj, activeListId, activeTodoId, dateString))}}
        >
            {day.date}
        </Wrapper>
    )
};

export default CalendarDay;

const Wrapper = styled.li`
    display: flex;
    padding: 2px;
    width: 40px;
    height: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.5px;
    cursor: pointer;
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};

    ${props => props.$isToday && css `
            border-radius: 35px;
            border: 1px solid;
            background-color: transparent;
        `}
    ${props => props.$mode === "Light" && css`
        ${props => props.$prevNext && css `
            color: var(--transparent-grey-text-medium-variant);
        `}
        ${props => props.$active && css `
            background-color: var(--primary-purple);
        `}
        ${props => props.$isToday && css `
            border-color: var(--black);
        `}
    `}
    ${props => props.$mode === "Dark" && css`
        ${props => props.$prevNext && css `
            color: var(--dark-mode-transparent-grey-text-medium-variant);
        `}
        ${props => props.$active && css `
            background-color: var(--dark-mode-primary-purple);
        `}
        ${props => props.$isToday && css `
            border-color: var(--dark-mode-background);
        `}
    `}
    ${props => props.$active && css `
        border-radius: 35px;
        color: var(--white);
    `}
`;