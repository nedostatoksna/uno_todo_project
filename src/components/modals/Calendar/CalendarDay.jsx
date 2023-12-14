import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../../context/context";
import { changeSelectedDate } from "../../../store/actionCreators/calendarActionCreators";

const CalendarDay = ({ day, year, setChosenDay }) => {
    
    const context = useContext(AppContext);
    const selectedDay = useSelector(state => state.calendarUI.selectedDate.getDate());
    const selectedDayMonth = useSelector(state => state.calendarUI.selectedDate.getMonth());
    const dispatch = useDispatch();
    const todayDate = new Date().getDate();
    const todayMonth = new Date().getMonth();

    const preChangeSelectedDate = (day) => {
        setChosenDay(day)
        dispatch(changeSelectedDate({ activeYear: year, activeMonthId: day.month, activeDate: day.date }))
    }

    return (
        <Wrapper 
            $prevNext={!day.activeMonth} 
            $mode={context.mode}
            $active={day.date === selectedDay && day.month === selectedDayMonth}
            $isToday={day.date === todayDate && day.month === todayMonth}
            onClick={() => preChangeSelectedDate(day)}
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
    cursor: pointer;
    ${props => props.$isToday && css `
            border-radius: 35px;
            border: 1px solid;
            background-color: transparent;
        `}
    ${props => props.$mode === "Light" && css`
        color: var(--black);
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
        color: var(--dark-mode-white-text);
        ${props => props.$prevNext && css `
            color: var(--dark-mode-transparent-grey-text-medium-variant);
        `}
        ${props => props.$active && css `
            background-color: var(--dark-mode-primary-purple);
        `}
        ${props => props.$isToday && css `
            border-color: var(--dark-mode-white-text);
        `}
    `}
    ${props => props.$active && css `
        border-radius: 35px;
        color: var(--white);
    `}
`;