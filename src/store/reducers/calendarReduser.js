import { CHANGE_SELECTED_DATE, 
         TOGGLE_IS_EDITING_DATE,
         CHANGE_SELECTED_MONTH,
         CHANGE_SELECTED_YEAR } from "../actions/calendarActions";
import calendarInitialState from "../states/calendarIInitialState";

const calendarReducer = (state = calendarInitialState, {type, payload}) => {
    switch (type) {
        case CHANGE_SELECTED_DATE: return {
            ...state, selectedDate: new Date(payload.activeYear, payload.activeMonthId, payload.activeDate)
        }
        case TOGGLE_IS_EDITING_DATE: return {
            ...state, isEditingDate: !state.isEditingDate
        }
        case CHANGE_SELECTED_MONTH: return {
            ...state, activeMonth: payload.activeMonth
        }
        case CHANGE_SELECTED_YEAR: return {
            ...state, activeYear: payload.activeYear
        }
        default: return state;
    }
};

export default calendarReducer;

