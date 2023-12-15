import { 
    CHANGE_SELECTED_DATE, 
    TOGGLE_IS_EDITING_DATE,
    CHANGE_SELECTED_MONTH,
    CHANGE_SELECTED_YEAR } from "../actions/calendarActions";

const toggleIsEditingDate = () => ({ type: TOGGLE_IS_EDITING_DATE });
const changeSelectedDate = (payload) => ({ type: CHANGE_SELECTED_DATE, payload });         
const changeSelectedMonth = (payload) => ({ type: CHANGE_SELECTED_MONTH, payload });
const changeSelectedYear = (payload) => ({ type: CHANGE_SELECTED_YEAR, payload });

export { 
    toggleIsEditingDate,
    changeSelectedDate,
    changeSelectedMonth,
    changeSelectedYear
};