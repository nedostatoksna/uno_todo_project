import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Modal";
import DateDisplay from "./DateDisplay";
import CalendarSheet from "./CalendarSheet";
import MonthSelector from "./MonthSelector";
import MonthSwitcher from "./MonthSwitcher";
import { toggleIsShowingCalendar } from "../../../store/actionCreators/todoPanelActionCreators";
import { useState } from "react";
import FlexColumnWrapper from "../../../ui/FlexColumnWrapper";
import FlexRowWrapper from "../../../ui/FlexRowWrapper";
import { setDeadlineAndCloseCalendar } from "../../../store/actionCreators/thunks";
import { 
    findActiveMonthId, 
    prepareDateStringForDisplay } from "../../../helpers/calendarRenderPrep";

const Calendar = () => {

    const dispatch = useDispatch();
    const activeMonth = useSelector(state => state.calendarUI.activeMonth);
    const year = useSelector(state => state.calendarUI.activeYear);

    const [chosenDay, setChosenDay] = useState(null);

    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);
    const activeListId = useSelector(state => state.todoListUI.activeListId);

    const preSave = (chosenDay) => {
        if (chosenDay) {
            const dateForDateString = new Date(year, chosenDay.month, chosenDay.date);
            const dateString = prepareDateStringForDisplay(dateForDateString);
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
                    <MonthSelector activeMonth={activeMonth} />
                    <MonthSwitcher activeMonthId={findActiveMonthId(activeMonth)} />
                </FlexRowWrapper>
                <CalendarSheet 
                    activeMonthId={findActiveMonthId(activeMonth)} 
                    year={year} 
                    setChosenDay={setChosenDay} 
                />
            </FlexColumnWrapper>
        </Modal>
    )
};

export default Calendar;
