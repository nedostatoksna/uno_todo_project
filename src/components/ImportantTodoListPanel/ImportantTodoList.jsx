import React from "react";
import styled from "styled-components";
import Todo from "../TodoListInterface/Todo";

const ImportantTodoList = ({ todos }) => {

    return (
        <StyledListWrapper>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo} /> )
            }
        </StyledListWrapper>
    )
};

export default ImportantTodoList;

const StyledListWrapper = styled.ul`

`;


