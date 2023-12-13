import { 
    CREATE_LIST, 
    RENAME_LIST, 
    DELETE_LIST,
    ADD_TODO_TO_LIST } from "../actions/dataListActions";
import  { 
    CHANGE_COMPLETED,
    CHANGE_IMPORTANT, 
    CHANGE_TITLE, 
    CHANGE_NOTE, 
    CHOOSE_DEADLINE, 
    DELETE_DEADLINE, 
    DELETE_TODO } from "../actions/dataTodoActions";

const createList = (payload) => ({ type: CREATE_LIST, payload });
const renameList = (payload) => ({ type: RENAME_LIST, payload });
const deleteList = (payload) => ({ type: DELETE_LIST, payload });
const addTodoToList = (payload) => ({ type: ADD_TODO_TO_LIST, payload });

const changeCompleted = (payload) => ({ type: CHANGE_COMPLETED, payload });
const changeImportant = (payload) => ({ type: CHANGE_IMPORTANT, payload });
const changeTitle = (payload) => ({ type: CHANGE_TITLE, payload });
const changeNote = (payload) => ({ type: CHANGE_NOTE, payload });
const deleteTodo = (payload) => ({ type: DELETE_TODO, payload });
const chooseDeadline = (payload) => ({ type: CHOOSE_DEADLINE, payload });
const deleteDeadline = (payload) => ({ type: DELETE_DEADLINE, payload });

export { 
    createList, 
    renameList, 
    deleteList, 
    addTodoToList, 
    changeCompleted, 
    changeImportant, 
    changeTitle, 
    changeNote, 
    chooseDeadline, 
    deleteDeadline, 
    deleteTodo };