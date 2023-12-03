import { 
    SWITCH_ACTIVE_TODOLIST_ID, 
    TOOGLE_CREATING_TODO, 
    TOOGLE_CREATING_LIST, 
    TOOGLE_DELETING_LIST, 
    SWITCH_VISIBLE_COMPLETED, 
    SWITCH_VISIBLE_IMPORTANT, 
    SET_SEARCH_QUERY, 
    TOOGLE_IS_SEARCHING,
    TOGGLE_SHOWING_ALL_TODOS,
    TOGGLE_RENAMING_LIST } from "../actions/todoListActions";
import { changeActiveTodoId, toggleTodoEditPanel } from "./todoPanelActionCreators";

const switchActiveTodoListId = (listId) => ({ type: SWITCH_ACTIVE_TODOLIST_ID, payload: { listId } });
const toggleCreatingTodo = () => ({ type: TOOGLE_CREATING_TODO });
const toggleCreatingList = () => ({ type: TOOGLE_CREATING_LIST });
const toggleDeletingList = () => ({ type: TOOGLE_DELETING_LIST });
const toggleVisibleCompleted = () => ({ type: SWITCH_VISIBLE_COMPLETED });
const switchVisibleImportant = (boolean) => ({ type: SWITCH_VISIBLE_IMPORTANT, payload: { boolean } });
const toggleShowingAllTodos = (boolean) => ({ type: TOGGLE_SHOWING_ALL_TODOS, payload: { boolean } });
const setSearchQuery = (searchString) => ({ type: SET_SEARCH_QUERY, payload: { searchString } });
const toggleIsSearching = (boolean) => ({ type: TOOGLE_IS_SEARCHING, payload: { boolean }  });
const toggleRenamingList = () => ({ type: TOGGLE_RENAMING_LIST });

const preSwitchActiveTodoList = (listId) => {
    return (dispatch) => {
        dispatch(switchActiveTodoListId(listId))
        dispatch(toggleShowingAllTodos(false))
        dispatch(switchVisibleImportant(false))
        dispatch(toggleTodoEditPanel(false))
        dispatch(toggleIsSearching(false))
        dispatch(changeActiveTodoId(""))
    }
}; 

const preShowImportant = () => {
    return (dispatch) => {
        dispatch(switchActiveTodoListId(""))
        dispatch(toggleShowingAllTodos(false))
        dispatch(switchVisibleImportant(true))
        dispatch(changeActiveTodoId(""))
    }
};

const preShowAllTodos = () => {
    return (dispatch) => {
        dispatch(switchActiveTodoListId(""))
        dispatch(switchVisibleImportant(false))
        dispatch(toggleShowingAllTodos(true))
        dispatch(changeActiveTodoId(""))
    }
};

const preToggleSearch = () => {
    return (dispatch) => {
        dispatch(changeActiveTodoId(""))
        dispatch(toggleIsSearching(true))
    }
};

const cancelSearch = () => {
    return (dispatch) => {
        dispatch(toggleIsSearching(false))
        dispatch(setSearchQuery(""))
    }
};

export { 
    switchActiveTodoListId,
    toggleCreatingTodo,
    toggleCreatingList,
    toggleDeletingList,
    toggleVisibleCompleted,
    switchVisibleImportant,
    setSearchQuery,
    toggleIsSearching,
    toggleShowingAllTodos,
    preSwitchActiveTodoList,
    preShowImportant,
    preShowAllTodos,
    cancelSearch,
    preToggleSearch,
    toggleRenamingList };
