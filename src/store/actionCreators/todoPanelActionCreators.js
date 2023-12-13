import { 
    CHANGE_ACTIVE_TODO_ID,
    TOGGLE_EDITING_TITLE,
    TOOGLE_DELETING_TODO,
    TOGGLE_TODO_EDIT_PANEL, 
    TOGGLE_CHOOSE_DEADLINE_MODAL, 
    TOGGLE_IS_SHOWING_CALENDAR } from "../actions/todoPanelActions";

const changeActiveTodoId = (payload) => ({ type: CHANGE_ACTIVE_TODO_ID, payload });
const toggleEditingTitle = () => ({ type: TOGGLE_EDITING_TITLE });
const toggleDeletingTodo = () => ({ type: TOOGLE_DELETING_TODO });
const toggleTodoEditPanel = (payload) => ({ type: TOGGLE_TODO_EDIT_PANEL, payload });
const toggleChooseDeadlinePanel = () => ({ type: TOGGLE_CHOOSE_DEADLINE_MODAL });
const toggleIsShowingCalendar = () => ({ type: TOGGLE_IS_SHOWING_CALENDAR });

export { 
    changeActiveTodoId,
    toggleEditingTitle,
    toggleDeletingTodo,
    toggleTodoEditPanel,
    toggleChooseDeadlinePanel,
    toggleIsShowingCalendar };