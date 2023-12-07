import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../../context/context";
import Modal from "../../../ui/Modal";
import styled from "styled-components";
import DateDisplay from "./DateDisplay";
import CalendarSheet from "./CalendarSheet";
import MonthYearSelector from "./MonthYearSelector";
import { fullMonths, threeLettersWeekDays }  from "../../../context/calendar";
import NextPrevSwitcher from "./NextPrevSwitcher";
import { toggleIsShowingCalendar } from "../../../store/actionCreators/todoPanelActionCreators";
import { changeDeadlineAndCloseCalendar } from "../../../store/actionCreators/calendarActionCreators";
import { useState } from "react";

const Calendar = ({ todo }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeMonth = useSelector(state => state.calendarUI.activeMonth);
    const year = todo.deadline.deadlineObj.getFullYear();
    const [chosenDay, setChosenDay] = useState(null);
    console.log(chosenDay);

        const findActiveMonthId = () => {
            let activeMonthId;
            for (let i = 0; i < fullMonths.length; i++) {
               if (fullMonths[i].title === activeMonth) {
                    activeMonthId = fullMonths[i].id
                }
            }
            return activeMonthId
        }

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

        const preSave = (chosenDay) => {
           if (chosenDay) {
                const dateString = prepareDateStringForDisplay(year, chosenDay.month, chosenDay.date);
                const dateObj = new Date(year, chosenDay.month, chosenDay.date);
                dispatch(changeDeadlineAndCloseCalendar(dateObj, activeListId, activeTodoId, dateString))
           } else {
                dispatch(toggleIsShowingCalendar())
           }
        }

    return (
        <Modal 
            $zIndex={"1"} 
            $boxWidth={"328px"} 
            $boxPadding={"16px 4px 4px 4px"}
            $header={"select date"} 
            $smallUppercase
            $okButton
            $buttonText={"Ok"}
            $mode={context.mode} 
            $onCancelClickHandler={() => {dispatch(toggleIsShowingCalendar())}} 
            $onСonfirmationClick={() => preSave(chosenDay)} 
        >
            <StyledConteiner>
            <DateDisplay />
                <StyledConteinerSwitchers>
                    <MonthYearSelector activeMonth={activeMonth} />
                    <NextPrevSwitcher activeMonthId={findActiveMonthId()} />
                </StyledConteinerSwitchers>
                <CalendarSheet activeMonthId={findActiveMonthId()} todo={todo} setChosenDay={setChosenDay} />
            </StyledConteiner>
        </Modal>
    )
};

export default Calendar;

const StyledConteiner = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyledConteinerSwitchers = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 12px 8px 20px;
`;