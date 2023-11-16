import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled from "styled-components";

const ImportantTodoList = ({listsArr}) => {

    const lists = useSelector(state => state.dataLists);
    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const context = useContext(AppContext);

    return (
        <StyledListWrapper>
            {
                lists.map(list => 
                    (list.id === activeListId)
                        ? list.todos.map(todo => (
                            todo.isImportant
                            ? <StyledListItem key={todo.id}>{todo.title}</StyledListItem> : undefined
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

