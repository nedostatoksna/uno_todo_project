import { changeSelectedDate, changeSelectedMonth, changeSelectedYear} from "./calendarActionCreators.js";
import { addTodoToList, chooseDeadline, createList, deleteList, deleteTodo, renameList } from "./dataListActionCreators.js";
import { setSearchQuery, switchActiveTodoListId, switchVisibleImportant, toggleCreatingList, toggleCreatingTodo, toggleDeletingList, toggleIsSearching, toggleRenamingList, toggleShowingAllTodos } from "./todoListActionCreators.js";
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
        dispatch(switchVisibleImportant({ boolean: false }))
        dispatch(toggleShowingAllTodos({ boolean: false }))
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
const switchMonthAndYear = (payload) => {
    return (dispatch) => {
        dispatch(changeSelectedMonth(payload))
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
const createNewListAndCloseModal = (payload) => {
    return (dispatch) => {
        dispatch(createList(payload));
        dispatch(toggleCreatingList());
    }
}
const addNewTodoAndCloseModal = (payload) => {
    return (dispatch) => {
        dispatch(addTodoToList(payload));
        dispatch(toggleCreatingTodo());
    }
}
const renameTaskAndCloseModal = (payload) => {
    return (dispatch) => {
        dispatch(renameList(payload));
        dispatch(toggleRenamingList());
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
    switchMonthAndYear,
    setDeadlineAndCloseCalendar,
    saveUserSettings,
    deleteListAndCloseModal,
    deleteTodoAndCloseModal,
    createNewListAndCloseModal,
    addNewTodoAndCloseModal,
    renameTaskAndCloseModal
};