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

const createList = (listTitle) => ({ type: CREATE_LIST, payload: { listTitle } });
const renameList = (listId, listTitle) => ({ type: RENAME_LIST, payload: { listId, listTitle } });
const deleteList = (listId) => ({ type: DELETE_LIST, payload: { listId } });
const addTodoToList = (listId, todoTitle) => ({ type: ADD_TODO_TO_LIST, payload: { listId, todoTitle } });

const changeCompleted = (listId, todoId, isCompleted) => ({ type: CHANGE_COMPLETED, payload: { listId, todoId, isCompleted } });
const changeImportant = (listId, todoId, isImportant) => ({ type: CHANGE_IMPORTANT, payload: { listId, todoId, isImportant } });
const changeTitle = (listId, todoId, todoTitle) => ({ type: CHANGE_TITLE, payload: { listId, todoId, todoTitle } });
const changeNote = (listId, todoId, todoNote) => ({ type: CHANGE_NOTE, payload: { listId, todoId, todoNote } });
const chooseDeadline = (listId, todoId, todoDeadlineDate) => ({ type: CHOOSE_DEADLINE, payload: { listId, todoId, todoDeadlineDate } });
const deleteDeadline = (listId, todoId) => ({ type: DELETE_DEADLINE, payload: { listId, todoId } });
const deleteTodo = (listId, todoId) => ({ type: DELETE_TODO, payload: { listId, todoId } });

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