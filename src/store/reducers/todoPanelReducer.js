import todoPanelInitialState from "../states/todoPanelInitialState";
import { 
    CHANGE_ACTIVE_TODO_ID,
    TOOGLE_DELETING_TODO,
    TOGGLE_TODO_EDIT_PANEL, 
    TOGGLE_CHOOSE_DEADLINE_MODAL, 
    OPEN_CALENDAR } from "../actions/todoPanelActions";

const todoPanelReducer = (state = todoPanelInitialState, { type, payload }) => {
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
        case CHANGE_ACTIVE_TODO_ID: return {
            ...state, activeTodoId: payload.todoId
        }
        default: return state;
    }
};

export default todoPanelReducer;