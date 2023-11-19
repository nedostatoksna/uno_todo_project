import { 
    TOOGLE_DELETING_TODO,
    TOGGLE_TODO_EDIT_PANEL, 
    TOGGLE_CHOOSE_DEADLINE_MODAL, 
    OPEN_CALENDAR } from "../actions/todoPanelActions";

const toggleDeletingTodo = () => ({ type: TOOGLE_DELETING_TODO });
const toggleTodoEditPanel = () => ({ type: TOGGLE_TODO_EDIT_PANEL });
const toggleChooseDeadlinePanel = () => ({ type: TOGGLE_CHOOSE_DEADLINE_MODAL });
const openCalendar = () => ({ type: OPEN_CALENDAR });

export { 
    toggleDeletingTodo,
    toggleTodoEditPanel,
    toggleChooseDeadlinePanel,
    openCalendar };