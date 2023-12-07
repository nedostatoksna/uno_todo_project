import React from "react";
import Todo from "./Todo";
import FlexWrapper from "../../styled/FlexWrapper";

const TodoList = ({ list }) => {

    return (
        <FlexWrapper as="ul" $smallPaddingTop>
            {
                list.map(todo => (
                    <Todo key={todo.id} todo={todo} />
                ))
            }
        </FlexWrapper>
    )
};

export default TodoList;


