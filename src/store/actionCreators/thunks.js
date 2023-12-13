import { changeSelectedDate, changeSelectedMonth, changeSelectedYear, switchToNextMonth, switchToPrevMonth } from "./calendarActionCreators.js";
import { chooseDeadline, deleteTodo } from "./dataListActionCreators.js.js";
import { setSearchQuery, switchActiveTodoListId, switchVisibleImportant, toggleIsSearching, toggleShowingAllTodos } from "./todoListActionCreators.js";
import { changeActiveTodoId, toggleChooseDeadlinePanel, toggleIsShowingCalendar, toggleTodoEditPanel } from "./todoPanelActionCreators.js";
import { changeIsSigningOut, toggleUserPanel } from "./userPanelActionCreators.js";

const switchActiveTodoList = (payload) => {
    return (dispatch) => {
        dispatch(switchActiveTodoListId(payload))
        dispatch(toggleShowingAllTodos(false))
        dispatch(switchVisibleImportant(false))
        dispatch(toggleTodoEditPanel(false))
        dispatch(toggleIsSearching(false))
        dispatch(changeActiveTodoId(""))
    }
}
const openImportantTodoListPanel = () => {
    return (dispatch) => {
        dispatch(switchActiveTodoListId(""))
        dispatch(toggleShowingAllTodos(false))
        dispatch(switchVisibleImportant(true))
        dispatch(changeActiveTodoId(""))
    }
}
const openAllTodosPanel = () => {
    return (dispatch) => {
        dispatch(switchActiveTodoListId(""))
        dispatch(switchVisibleImportant(false))
        dispatch(toggleShowingAllTodos(true))
        dispatch(changeActiveTodoId(""))
    }
}
const openSearchPanel = () => {
    return (dispatch) => {
        dispatch(changeActiveTodoId(""))
        dispatch(toggleIsSearching(true))
    }
}
const cancelSearchAndCloseSearchPanel = () => {
    return (dispatch) => {
        dispatch(toggleIsSearching(false))
        dispatch(setSearchQuery(""))
    }
}
const setActiveTodoAndOpenTodoEditPanel = (payload) => {
    return (dispatch) => {
        dispatch(changeActiveTodoId(payload)) 
        dispatch(switchActiveTodoListId(payload))
        dispatch(toggleTodoEditPanel(true))
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
        dispatch(toggleTodoEditPanel(false))
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
        dispatch(saveUserSettings(payload))
        dispatch(toggleUserPanel())
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
    saveUserSettings
};