import todoListInitialState from "../states/todoListInitialState";
import {
    SWITCH_ACTIVE_TODOLIST_ID, 
    SWITCH_VISIBLE_COMPLETED, 
    SWITCH_VISIBLE_IMPORTANT, 
    TOGGLE_RENAMING_LIST,
    TOOGLE_DELETING_LIST,
    TOOGLE_CREATING_LIST,
    TOOGLE_CREATING_TODO,
    TOOGLE_IS_SEARCHING,
    SET_SEARCH_QUERY } from "../actions/todoListActions";

const todoListReducer = (state = todoListInitialState, {type, payload}) => {
    switch (type) {
        case SWITCH_ACTIVE_TODOLIST_ID: return {
            ...state, activeListId: payload.listId
        }
        case TOGGLE_RENAMING_LIST: return {
            ...state, isRenamingList: !state.isRenamingList
        }
        case TOOGLE_DELETING_LIST: return {
            ...state, isDeletingList: !state.isDeletingList
        }
        case TOOGLE_CREATING_LIST: return {
            ...state, isCreatingList: !state.isCreatingList
        }
        case TOOGLE_CREATING_TODO: return {
            ...state, isCreatingTodo: !state.isCreatingTodo
        }
        case SWITCH_VISIBLE_COMPLETED: return {
            ...state, isShowingCompleted: !state.isShowingCompleted
        }
        case SWITCH_VISIBLE_IMPORTANT: return {
            ...state, isShowingImportant: !state.isShowingImportant
        }
        case SET_SEARCH_QUERY: return {
            ...state, searchQuery: payload.searchString 
        }
        case TOOGLE_IS_SEARCHING: return {
            ...state, isSearching: !state.isSearching
        }
        default: return state;
    }
};

export default todoListReducer;

