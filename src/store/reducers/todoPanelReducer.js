import todoPanelInitialState from "../states/todoPanelInitialState";
import { 
    TOGGLE_TODO_EDIT_PANEL, 
    TOGGLE_CHOOSE_DEADLINE_MODAL, 
    OPEN_CALENDAR } from "../actions/todoPanelActions";

const todoPanelReducer = (state = todoPanelInitialState, { type }) => {
    switch (type) {
        case TOGGLE_TODO_EDIT_PANEL: return {
            ...state, isShowingEditPanel: !state.isShowingEditPanel
        }
        case TOGGLE_CHOOSE_DEADLINE_MODAL: return {
            ...state, isShowingChooseDeadlineModal: !state.isShowingChooseDeadlineModal
        }
        case OPEN_CALENDAR: return {
            ...state, isShowingCalendar: !state.isShowingCalendar
        }
        default: return state;
    }
};

export default todoPanelReducer;