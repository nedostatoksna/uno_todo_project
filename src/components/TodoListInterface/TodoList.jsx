import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const List = ({ list }) => {

    return (
        <>
            <TodoListWrapper>
                {
                    list.todos.map(todo => (
                        <Todo key={todo.id} todo={todo} />
                    ))
                }
            </TodoListWrapper>
       </>
    )
};

export default List;

const TodoListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    height: 100%;
`;
