import { 
    CHANGE_ACTIVE_TODO_ID,
    TOGGLE_EDITING_TITLE,
    TOOGLE_DELETING_TODO,
    TOGGLE_TODO_EDIT_PANEL, 
    TOGGLE_CHOOSE_DEADLINE_MODAL, 
    OPEN_CALENDAR } from "../actions/todoPanelActions";

const changeActiveTodoId = (todoId) => ({ type: CHANGE_ACTIVE_TODO_ID, payload : { todoId } });
const toggleEditingTitle = () => ({ type: TOGGLE_EDITING_TITLE });
const toggleDeletingTodo = () => ({ type: TOOGLE_DELETING_TODO });
const toggleTodoEditPanel = () => ({ type: TOGGLE_TODO_EDIT_PANEL });
const toggleChooseDeadlinePanel = () => ({ type: TOGGLE_CHOOSE_DEADLINE_MODAL });
const openCalendar = () => ({ type: OPEN_CALENDAR });

export { 
    changeActiveTodoId,
    toggleEditingTitle,
    toggleDeletingTodo,
    toggleTodoEditPanel,
    toggleChooseDeadlinePanel,
    openCalendar };