import React from "react";
import Todo from "../TodoListInterface/Todo";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";

const ImportantTodoList = ({ todos }) => {

    return (
        <FlexColumnWrapper>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo} /> )
            }
        </FlexColumnWrapper>
    )
};

export default ImportantTodoList;

