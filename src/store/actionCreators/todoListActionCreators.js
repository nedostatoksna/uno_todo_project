import { 
    SWITCH_ACTIVE_TODOLIST_ID, 
    TOOGLE_CREATING_TODO, 
    TOOGLE_CREATING_LIST, 
    TOOGLE_DELETING_LIST, 
    SWITCH_VISIBLE_COMPLETED, 
    SWITCH_VISIBLE_IMPORTANT, 
    SEARCH, 
    TOOGLE_IS_SEARCHING,
    TOGGLE_RENAMING_LIST } from "../actions/todoListActions";

const switchActiveTodoId = (listId) => ({ type: SWITCH_ACTIVE_TODOLIST_ID, payload: { listId } });
const toggleCreatingTodo = () => ({ type: TOOGLE_CREATING_TODO });
const toggleCreatingList = () => ({ type: TOOGLE_CREATING_LIST });
const toggleDeletingList = () => ({ type: TOOGLE_DELETING_LIST });
const switchVisibleCompleted = () => ({ type: SWITCH_VISIBLE_COMPLETED });
const switchVisibleImportant = () => ({ type: SWITCH_VISIBLE_IMPORTANT });
const search = (searchString) => ({ type: SEARCH, payload: { searchString } });
const toggleIsSearching = () => ({ type: TOOGLE_IS_SEARCHING });
const toggleRenamingList = () => ({ type: TOGGLE_RENAMING_LIST });

export { 
    switchActiveTodoId,
    toggleCreatingTodo,
    toggleCreatingList,
    toggleDeletingList,
    switchVisibleCompleted,
    switchVisibleImportant,
    search,
    toggleIsSearching,
    toggleRenamingList };
