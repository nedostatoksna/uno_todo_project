import { SWITCH_TO_PREV_MONTH, 
         SWITCH_TO_NEXT_MONTH, 
         CHANGE_SELECTED_DATE, 
         TOGGLE_IS_EDITING_DATE,
         CHANGE_SELECTED_MONTH } from "../actions/calendarActions";
import calendarInitialState from "../states/calendarIInitialState";

const calendarReducer = (state = calendarInitialState, {type, payload}) => {
    switch (type) {
        case SWITCH_TO_PREV_MONTH: return {
            ...state, activeListId: payload.listId
        }
        case SWITCH_TO_NEXT_MONTH: return {
            ...state, isRenamingList: !state.isRenamingList
        }
        case CHANGE_SELECTED_DATE: return {
            ...state, selectedDate: payload.selectedDate
        }
        case TOGGLE_IS_EDITING_DATE: return {
            ...state, isEditingDate: !state.isEditingDate
        }
        case CHANGE_SELECTED_MONTH: return {
            ...state, activeMonth: payload.selectedMonth
        }
        default: return state;
    }
};

export default calendarReducer;

