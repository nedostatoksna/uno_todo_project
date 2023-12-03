import { 
    CHANGE_ACTIVE_TODO_ID,
    TOGGLE_EDITING_TITLE,
    TOOGLE_DELETING_TODO,
    TOGGLE_TODO_EDIT_PANEL, 
    TOGGLE_CHOOSE_DEADLINE_MODAL, 
    TOGGLE_IS_SHOWING_CALENDAR } from "../actions/todoPanelActions";
import { changeSelectedDate, changeSelectedMonth, changeSelectedYear } from "./calendarActionCreators.js";
import { chooseDeadline, deleteTodo } from "./dataListActionCreators.js";
import { switchActiveTodoListId } from "./todoListActionCreators.js";

const changeActiveTodoId = (todoId) => ({ type: CHANGE_ACTIVE_TODO_ID, payload : { todoId } });
const toggleEditingTitle = () => ({ type: TOGGLE_EDITING_TITLE });
const toggleDeletingTodo = () => ({ type: TOOGLE_DELETING_TODO });
const toggleTodoEditPanel = (boolean) => ({ type: TOGGLE_TODO_EDIT_PANEL, payload : { boolean } });
const toggleChooseDeadlinePanel = () => ({ type: TOGGLE_CHOOSE_DEADLINE_MODAL });
const toggleIsShowingCalendar = () => ({ type: TOGGLE_IS_SHOWING_CALENDAR });

const setActiveTodoAndOpenEditPanel = (todoId,activeListId, activeMonth, activeMonthId, activeYear, activeDate) => {
    return (dispatch) => {
        dispatch(changeActiveTodoId(todoId)) 
        dispatch(switchActiveTodoListId(activeListId))
        dispatch(toggleTodoEditPanel(true))
        dispatch(changeSelectedMonth(activeMonth))
        dispatch(changeSelectedYear(activeYear))
        dispatch(changeSelectedDate(new Date(activeYear, activeMonthId, activeDate)))
    }
};
const toggleDaedlinePanelAndSetDeadline = (listId, todoId, deadline, deadlineObj) => {
    return (dispatch) => {
        dispatch(chooseDeadline(listId, todoId, deadline, deadlineObj))
        dispatch(toggleChooseDeadlinePanel())
    }
};
const toggleDaedlinePanelAndOpenCalendar = () => {
    return (dispatch) => {
        dispatch(toggleChooseDeadlinePanel())
        dispatch(toggleIsShowingCalendar())
    }
};
const toggleTodoEditPanelAndDeleteTodo = (listId, todoId) => {
    return (dispatch) => {
        dispatch(toggleTodoEditPanel(false))
        dispatch(deleteTodo(listId, todoId))
    }
};

export { 
    changeActiveTodoId,
    toggleEditingTitle,
    toggleDeletingTodo,
    toggleTodoEditPanel,
    toggleChooseDeadlinePanel,
    setActiveTodoAndOpenEditPanel,
    toggleDaedlinePanelAndSetDeadline,
    toggleDaedlinePanelAndOpenCalendar,
    toggleTodoEditPanelAndDeleteTodo,
    toggleIsShowingCalendar };