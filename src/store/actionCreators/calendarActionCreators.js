import { 
    SWITCH_TO_PREV_MONTH, 
    SWITCH_TO_NEXT_MONTH, 
    CHANGE_SELECTED_DATE, 
    TOGGLE_IS_EDITING_DATE,
    CHANGE_SELECTED_MONTH } from "../actions/calendarActions";
import { chooseDeadline } from "./dataListActionCreators.js";
import { toggleIsShowingCalendar } from "./todoPanelActionCreators";

const switchToNextMonth = (newActiveMonth) => ({ type: SWITCH_TO_NEXT_MONTH, payload: { newActiveMonth } });
const switchToPrevMonth = (newActiveMonth) => ({ type: SWITCH_TO_PREV_MONTH, payload: { newActiveMonth } });
const toggleIsEditingDate = () => ({ type: TOGGLE_IS_EDITING_DATE });
const changeSelectedDate = (selectedDate) => ({ type: CHANGE_SELECTED_DATE, payload: { selectedDate } });
const changeSelectedMonth = (selectedMonth) => ({ type: CHANGE_SELECTED_MONTH, payload: { selectedMonth } });

const saveDeadlineandClose = (listId, todoId, todoDeadlineDate) => {
    return (dispatch) => {
        dispatch(chooseDeadline(listId, todoId, todoDeadlineDate))
        dispatch(toggleIsShowingCalendar())
    }
}; 

export { 
    switchToNextMonth, 
    switchToPrevMonth, 
    toggleIsEditingDate,
    changeSelectedDate,
    saveDeadlineandClose,
    changeSelectedMonth
};