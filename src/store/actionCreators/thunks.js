import { changeSelectedDate, changeSelectedMonth, changeSelectedYear, switchToNextMonth, switchToPrevMonth } from "./calendarActionCreators.js";
import { chooseDeadline, deleteList, deleteTodo } from "./dataListActionCreators.js";
import { setSearchQuery, switchActiveTodoListId, switchVisibleImportant, toggleDeletingList, toggleIsSearching, toggleShowingAllTodos } from "./todoListActionCreators.js";
import { changeActiveTodoId, toggleChooseDeadlinePanel, toggleDeletingTodo, toggleIsShowingCalendar, toggleTodoEditPanel } from "./todoPanelActionCreators.js";
import { saveSettings, toggleUserPanel } from "./userPanelActionCreators.js";

const switchActiveTodoList = (payload) => {
    return (dispatch) => {
        dispatch(switchActiveTodoListId(payload))
        dispatch(toggleShowingAllTodos({ boolean: false }))
        dispatch(switchVisibleImportant({ boolean: false }))
        dispatch(toggleTodoEditPanel({ boolean: false }))
        dispatch(toggleIsSearching({ boolean: false }))
        dispatch(changeActiveTodoId({ todoId: "" }))
    }
}
const openImportantTodoListPanel = () => {
    return (dispatch) => {
        dispatch(switchActiveTodoListId({ listId: "" }))
        dispatch(toggleShowingAllTodos({ boolean: false }))
        dispatch(switchVisibleImportant({ boolean: true }))
        dispatch(changeActiveTodoId({ todoId: "" }))
    }
}
const openAllTodosPanel = () => {
    return (dispatch) => {
        dispatch(switchActiveTodoListId({ listId: "" }))
        dispatch(switchVisibleImportant({ boolean: false }))
        dispatch(toggleShowingAllTodos({ boolean: true }))
        dispatch(changeActiveTodoId({ todoId: "" }))
    }
}
const openSearchPanel = () => {
    return (dispatch) => {
        dispatch(changeActiveTodoId({ todoId: "" }))
        dispatch(toggleIsSearching({ boolean: true }))
    }
}
const cancelSearchAndCloseSearchPanel = () => {
    return (dispatch) => {
        dispatch(toggleIsSearching({ boolean: false }))
        dispatch(setSearchQuery({ searchString: "" }))
    }
}
const setActiveTodoAndOpenTodoEditPanel = (payload) => {
    return (dispatch) => {
        dispatch(changeActiveTodoId(payload)) 
        dispatch(switchActiveTodoListId(payload))
        dispatch(toggleTodoEditPanel({ boolean: true }))
        dispatch(changeSelectedMonth(payload))
        dispatch(changeSelectedYear(payload))
        dispatch(changeSelectedDate(payload))
    }
}
const setDeadlineAndCloseDeadlineModal = (payload) => {
    return (dispatch) => {
        dispatch(chooseDeadline(payload))
        dispatch(changeSelectedDate(payload))
        dispatch(toggleChooseDeadlinePanel())
    }
}
const closeDeadlineModalAndOpenCalendar = () => {
    return (dispatch) => {
        dispatch(toggleChooseDeadlinePanel())
        dispatch(toggleIsShowingCalendar())
    }
}
const deleteTodoAndCloseTodoEditPanel = (payload) => {
    return (dispatch) => {
        dispatch(toggleTodoEditPanel({ boolean: false }))
        dispatch(deleteTodo(payload))
    }
}
const switchToNextMonthAndYear = (payload) => {
    return (dispatch) => {
        dispatch(switchToNextMonth(payload))
        dispatch(changeSelectedYear(payload))
    }
}
const switchToPrevMonthAndYear = (payload) => {
    return (dispatch) => {
        dispatch(switchToPrevMonth(payload))
        dispatch(changeSelectedYear(payload))
    }
}
const setDeadlineAndCloseCalendar = (payload) => {
    return (dispatch) => {
        dispatch(chooseDeadline(payload))
        dispatch(toggleIsShowingCalendar())
    }
}
const saveUserSettings = (payload) => {
    return (dispatch) => {
        dispatch(saveSettings(payload))
        dispatch(toggleUserPanel())
    }
}
const deleteListAndCloseModal = (payload) => {
    return (dispatch) => {
        dispatch(deleteList(payload))
        dispatch(switchActiveTodoListId({listId: ""}))
        dispatch(toggleDeletingList())
    }
}
const deleteTodoAndCloseModal = (payload) => {
    return (dispatch) => {
        dispatch(deleteTodo(payload))
        dispatch(toggleTodoEditPanel({ boolean: false }))
        dispatch(toggleDeletingTodo())
    }
}

export {
    switchActiveTodoList,
    openImportantTodoListPanel,
    openAllTodosPanel,
    openSearchPanel,
    cancelSearchAndCloseSearchPanel,
    setActiveTodoAndOpenTodoEditPanel,
    setDeadlineAndCloseDeadlineModal,
    closeDeadlineModalAndOpenCalendar,
    deleteTodoAndCloseTodoEditPanel,
    switchToNextMonthAndYear,
    switchToPrevMonthAndYear,
    setDeadlineAndCloseCalendar,
    saveUserSettings,
    deleteListAndCloseModal,
    deleteTodoAndCloseModal
};