import React from "react";
import Todo from "../TodoListInterface/Todo";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";

const AllTodosList = ({ todos }) => {

    return (
        <FlexColumnWrapper $smallPaddingTop>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo} />)
            }
        </FlexColumnWrapper>
    )
};

export default AllTodosList;
