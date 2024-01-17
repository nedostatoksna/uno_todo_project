import React from "react";
import Tabs from "./Tabs";
import AddTodoBtn from "./AddTodoBtn";
import ListEditPanel from "./ListEditPanel";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";

const TodoListPanel = ({ list }) => {

    const allTodosOfList = list.todos;
    const completedTodos = list.todos.filter(todo => todo.isCompleted);
    const isShowingCompleted = useSelector(state => state.todoListUI.isShowingCompleted);

    return (
        <>
            <div>
                <ListEditPanel list={list} />
                <Tabs />
                <TodoList list={isShowingCompleted ? completedTodos : allTodosOfList} />  
            </div> 
            <AddTodoBtn />
        </>
    )
};

export default TodoListPanel;

