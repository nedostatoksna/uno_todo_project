import { 
    TOGGLE_TODO_EDIT_PANEL, 
    TOGGLE_CHOOSE_DEADLINE_MODAL, 
    OPEN_CALENDAR, 
    SAVE_CLOSE_CALENDAR, 
    CANCEL_CLOSE_CALENDAR } from "../actions/todoPanelActions";

const toggleTodoEditPanel = () => ({ type: TOGGLE_TODO_EDIT_PANEL });
const toggleChooseDeadlinePanel = () => ({ type: TOGGLE_CHOOSE_DEADLINE_MODAL });
const openCalendar = () => ({ type: OPEN_CALENDAR });
const saveCloseCalendar = () => ({ type: SAVE_CLOSE_CALENDAR });
const cancelCloseCalendar = () => ({ type: CANCEL_CLOSE_CALENDAR });

export { 
    toggleTodoEditPanel,
    toggleChooseDeadlinePanel,
    openCalendar,
    saveCloseCalendar,
    cancelCloseCalendar };