import { 
    SWITCH_TO_PREV_MONTH, 
    SWITCH_TO_NEXT_MONTH, 
    CHANGE_SELECTED_DATE, 
    TOGGLE_IS_EDITING_DATE,
    CHANGE_SELECTED_MONTH,
    CHANGE_SELECTED_YEAR } from "../actions/calendarActions";

const switchToNextMonth = (payload) => ({ type: SWITCH_TO_NEXT_MONTH, payload });
const switchToPrevMonth = (payload) => ({ type: SWITCH_TO_PREV_MONTH, payload });
const toggleIsEditingDate = () => ({ type: TOGGLE_IS_EDITING_DATE });
const changeSelectedDate = (payload) => ({ type: CHANGE_SELECTED_DATE, payload });         
const changeSelectedMonth = (payload) => ({ type: CHANGE_SELECTED_MONTH, payload });
const changeSelectedYear = (payload) => ({ type: CHANGE_SELECTED_YEAR, payload });

export { 
    switchToNextMonth, 
    switchToPrevMonth, 
    toggleIsEditingDate,
    changeSelectedDate,
    changeSelectedMonth,
    changeSelectedYear
};