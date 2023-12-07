import React from "react";
import Todo from "../TodoListInterface/Todo";
import FlexWrapper from "../../styled/FlexWrapper";

const ImportantTodoList = ({ todos }) => {

    return (
        <FlexWrapper>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo} /> )
            }
        </FlexWrapper>
    )
};

export default ImportantTodoList;

