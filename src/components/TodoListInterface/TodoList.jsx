import React from "react";
import Todo from "./Todo";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";

const TodoList = ({ list }) => {

    return (
        <FlexColumnWrapper as="ul" $smallPaddingTop>
            {
                list.map(todo => (
                    <Todo key={todo.id} todo={todo} />
                ))
            }
        </FlexColumnWrapper>
    )
};

export default TodoList;


