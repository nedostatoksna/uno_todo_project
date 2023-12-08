import React from "react";
import Todo from "../TodoListInterface/Todo";
import FlexColumnWrapper from "../../styled/FlexColumnWrapper";

const AllTodosList = ({ todos }) => {

    return (
        <FlexColumnWrapper $smallPaddingTop>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo} /> )
            }
        </FlexColumnWrapper>
    )
};

export default AllTodosList;
