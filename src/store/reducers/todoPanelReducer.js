import todoPanelInitialState from "../states/todoPanelInitialState";
import { 
    TOOGLE_DELETING_TODO,
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
        case TOOGLE_DELETING_TODO: return {
            ...state, isDeletingTodo: !state.isDeletingTodo
        }
        default: return state;
    }
};

export default todoPanelReducer;