import dataInitialState from "../states/dataInitialState";
import { 
    CREATE_LIST, 
    RENAME_LIST, 
    DELETE_LIST, 
    ADD_TODO_TO_LIST } from "../actions/dataListActions";
import { 
    CHANGE_COMPLETED, 
    CHANGE_IMPORTANT, 
    CHANGE_TITLE, 
    CHANGE_NOTE, 
    CHOOSE_DEADLINE, 
    DELETE_DEADLINE, 
    DELETE_TODO } from "../actions/dataTodoActions";
const today = new Date();
const dataListReducer = (state = dataInitialState, {type, payload}) => {
    switch (type) {
        case CREATE_LIST: return [
            ...state, 
            { 
                title: payload.listTitle,
                id: crypto.randomUUID(),
                todos: [] 
            }
        ]
        case RENAME_LIST: return state.map(list => {
            if (list.id === payload.listId) return {
                ...list, title: payload.listTitle
            }
            return list
        })
        case DELETE_LIST: return state.filter(list => list.id !== payload.listId)
        case ADD_TODO_TO_LIST: return state.map(list => {
            if (list.id === payload.listId) return {
                ...list, todos: [
                    ...list.todos, 
                    {
                        id: crypto.randomUUID(),
                        parentListId: payload.listId,
                        title: payload.todoTitle,
                        isCompleted: false,
                        isImportant: false,
                        createDate: new Date(),
                        deadline: {
                            deadlineString: "",
                            deadlineObj: new Date()
                        },
                        note: null
                    }
                ]
            }
            return list
        })
        case CHANGE_COMPLETED: return state.map(list => {
            if (list.id === payload.listId) return {
                ...list,
                    todos: list.todos.map(todo => {
                        if (todo.id === payload.todoId) return {
                            ...todo, isCompleted: payload.isCompleted
                        }
                        return todo
                    })
            }
            return list
        })
        case CHANGE_IMPORTANT: return state.map(list => {
            if (list.id === payload.listId) return {
                ...list,
                    todos: list.todos.map(todo => {
                        if (todo.id === payload.todoId) return {
                            ...todo, isImportant: payload.isImportant
                        }
                        return todo
                    })
            }
            return list
        })
        case CHANGE_TITLE: return state.map(list => {
            if (list.id === payload.listId) return {
                ...list,
                    todos: list.todos.map(todo => {
                        if (todo.id === payload.todoId) return {
                            ...todo, title: payload.todoTitle
                        }
                        return todo
                    })
            }
            return list
        })
        case CHANGE_NOTE: return state.map(list => {
            if (list.id === payload.listId) return {
                ...list,
                    todos: list.todos.map(todo => {
                        if (todo.id === payload.todoId) return {
                            ...todo, note: payload.todoNote
                        }
                        return todo
                    })
            }
            return list
        })
        case CHOOSE_DEADLINE: return state.map(list => {
            if (list.id === payload.listId) return {
                ...list,
                    todos: list.todos.map(todo => {
                        if (todo.id === payload.todoId) return {
                            ...todo, deadline: {
                                deadlineString: payload.todoDeadlineWord,
                                deadlineObj: payload.todoDeadlineWord === "Today" 
                                                ? today 
                                                : payload.todoDeadlineWord === "Tomorrow" 
                                                ? new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
                                                : undefined
                            }
                        }
                        return todo
                    })
            }
            return list
        })
        case DELETE_DEADLINE: return state.map(list => {
            if (list.id === payload.listId) return {
                ...list,
                    todos: list.todos.map(todo => {
                        if (todo.id === payload.todoId) return {
                            ...todo, deadline: {
                                deadlineString: "",
                                deadlineObj: new Date()
                            },
                        }
                        return todo
                    })
            }
            return list
        })
        case DELETE_TODO: return state.map(list => {
            if (list.id === payload.listId) return {
                ...list,
                    todos: list.todos.filter(todo => 
                        todo.id !== payload.todoId 
                    )
            }
            return list
        })

        default: return state;
    }
};

export default dataListReducer;