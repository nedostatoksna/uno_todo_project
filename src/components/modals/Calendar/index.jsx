import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "..";
import DateDisplay from "./DateDisplay";
import CalendarSheet from "./CalendarSheet";
import MonthYearSelector from "./MonthYearSelector";
import { fullMonths, threeLettersWeekDays }  from "../../../data/calendar";
import MonthSwitcher from "./MonthSwitcher";
import { toggleIsShowingCalendar } from "../../../store/actionCreators/todoPanelActionCreators";
import { useState } from "react";
import FlexColumnWrapper from "../../../ui/FlexColumnWrapper";
import FlexRowWrapper from "../../../ui/FlexRowWrapper";
import { setDeadlineAndCloseCalendar } from "../../../store/actionCreators/thunks";

const Calendar = () => {

    const dispatch = useDispatch();
    const activeMonth = useSelector(state => state.calendarUI.activeMonth);
    const year = useSelector(state => state.calendarUI.activeYear);

    const [chosenDay, setChosenDay] = useState(null);

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
                dispatch(setDeadlineAndCloseCalendar({ 
                    newDate: dateObj,                           
                    listId: activeListId, 
                    todoId: activeTodoId, 
                    todoDeadlineWord: dateString
                }))
           } else {
                dispatch(toggleIsShowingCalendar())
           }
        }

    return (
        <Modal 
            $smallSize
            header={"select date"} 
            calendar
            smallUppercase
            buttonText={"Ok"}
            onCancelClickHandler={() => {dispatch(toggleIsShowingCalendar())}} 
            onСonfirmationClick={() => preSave(chosenDay)} 
        >
            <FlexColumnWrapper>
            <DateDisplay />
                <FlexRowWrapper 
                    $spaceBetween 
                    $paddingTopBottomSmall 
                    $paddingLeft 
                    $paddingRightSmall
                >
                    <MonthYearSelector activeMonth={activeMonth} />
                    <MonthSwitcher activeMonthId={findActiveMonthId()} />
                </FlexRowWrapper>
                <CalendarSheet 
                    activeMonthId={findActiveMonthId()} 
                    year={year} 
                    setChosenDay={setChosenDay} 
                />
            </FlexColumnWrapper>
        </Modal>
    )
};

export default Calendar;
