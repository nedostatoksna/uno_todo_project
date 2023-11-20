import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import Todo from "../TodoListInterface/Todo";

const ImportantTodoList = () => {

    const lists = useSelector(state => state.dataLists);
    const activeListId = useSelector(state => state.todoListUI.activeListId);

    return (
        <StyledListWrapper>
            {
                lists.map(list => 
                    (list.id === activeListId)
                        ? list.todos.map(todo => (
                            todo.isImportant
                            ? <Todo key={todo.id} todo={todo} /> : undefined
                        )) : undefined )
            }
        </StyledListWrapper>
    )
};

export default ImportantTodoList;

const StyledListWrapper = styled.ul`

`;
const StyledListItem = styled.ul`

`;

