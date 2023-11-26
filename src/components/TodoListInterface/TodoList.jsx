import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const TodoList = ({ list }) => {

    return (
        <TodoListWrapper>
            {
                list.map(todo => (
                    <Todo key={todo.id} todo={todo} />
                ))
            }
        </TodoListWrapper>
    )
};

export default TodoList;

const TodoListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
`;
