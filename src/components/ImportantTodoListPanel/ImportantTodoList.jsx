import React from "react";
import Todo from "../TodoListInterface/Todo";

const ImportantTodoList = ({ todos }) => {

    return (
        <>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo} /> )
            }
        </>
    )
};

export default ImportantTodoList;


