import React from "react";
import Todo from "../TodoListInterface/Todo";
import styled from "styled-components";

const AllTodosList = ({ todos }) => {

    return (
        <Wrapper>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo} /> )
            }
        </Wrapper>
    )
};

export default AllTodosList;

const Wrapper = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
`;