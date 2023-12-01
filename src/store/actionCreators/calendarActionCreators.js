import { 
    SWITCH_TO_PREV_MONTH, 
    SWITCH_TO_NEXT_MONTH, 
    CHANGE_SELECTED_DATE, 
    TOGGLE_IS_EDITING_DATE,
    CHANGE_SELECTED_MONTH,
    CHANGE_SELECTED_YEAR } from "../actions/calendarActions";
import { chooseDeadline } from "./dataListActionCreators.js";
import { toggleIsShowingCalendar } from "./todoPanelActionCreators";

const switchToNextMonth = (newActiveMonth) => ({ type: SWITCH_TO_NEXT_MONTH, payload: { newActiveMonth } });
const switchToPrevMonth = (newActiveMonth) => ({ type: SWITCH_TO_PREV_MONTH, payload: { newActiveMonth } });
const toggleIsEditingDate = () => ({ type: TOGGLE_IS_EDITING_DATE });
const changeSelectedDate = (selectedDate) => ({ type: CHANGE_SELECTED_DATE, payload: { selectedDate } });
const changeSelectedMonth = (selectedMonth) => ({ type: CHANGE_SELECTED_MONTH, payload: { selectedMonth } });
const changeSelectedYear = (selectedYear) => ({ type: CHANGE_SELECTED_YEAR, payload: { selectedYear } });

const saveDeadlineandClose = (listId, todoId, todoDeadlineDate) => {
    return (dispatch) => {
        dispatch(chooseDeadline(listId, todoId, todoDeadlineDate))
        dispatch(toggleIsShowingCalendar())
    }
}; 

const switchToNextMonthAndYear = (monthTitle, selectedYear) => {
    return (dispatch) => {
        dispatch(switchToNextMonth(monthTitle))
        dispatch(changeSelectedYear(selectedYear))
    }
}
const switchToPrevMonthAndYear = (monthTitle, selectedYear) => {
    return (dispatch) => {
        dispatch(switchToPrevMonth(monthTitle))
        dispatch(changeSelectedYear(selectedYear))
    }
}
const changeSelectedDateInUIAndInData = (newDate, listId, todoId, todoDeadlineWord) => {
    return (dispatch) => {
        dispatch(changeSelectedDate(newDate))
        dispatch(chooseDeadline(listId, todoId, todoDeadlineWord, newDate))
    }
}

export { 
    switchToNextMonth, 
    switchToPrevMonth, 
    toggleIsEditingDate,
    changeSelectedDate,
    saveDeadlineandClose,
    changeSelectedMonth,
    changeSelectedYear,
    switchToNextMonthAndYear,
    switchToPrevMonthAndYear,
    changeSelectedDateInUIAndInData
};