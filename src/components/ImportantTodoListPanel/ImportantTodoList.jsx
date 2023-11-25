import React from "react";
import Todo from "../TodoListInterface/Todo";
import styled from "styled-components";

const ImportantTodoList = ({ todos }) => {

    return (
        <Wrapper>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo} /> )
            }
        </Wrapper>
    )
};

export default ImportantTodoList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;