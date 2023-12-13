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

const switchActiveTodoListId = (payload) => ({ type: SWITCH_ACTIVE_TODOLIST_ID, payload });
const toggleCreatingTodo = () => ({ type: TOOGLE_CREATING_TODO });
const toggleCreatingList = () => ({ type: TOOGLE_CREATING_LIST });
const toggleDeletingList = () => ({ type: TOOGLE_DELETING_LIST });
const toggleVisibleCompleted = () => ({ type: SWITCH_VISIBLE_COMPLETED });
const switchVisibleImportant = (payload) => ({ type: SWITCH_VISIBLE_IMPORTANT, payload });
const toggleShowingAllTodos = (payload) => ({ type: TOGGLE_SHOWING_ALL_TODOS, payload });
const setSearchQuery = (payload) => ({ type: SET_SEARCH_QUERY, payload });
const toggleIsSearching = (payload) => ({ type: TOOGLE_IS_SEARCHING, payload });
const toggleRenamingList = () => ({ type: TOGGLE_RENAMING_LIST });

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
    toggleRenamingList };
