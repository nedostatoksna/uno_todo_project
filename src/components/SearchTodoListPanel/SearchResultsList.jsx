import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "../TodoListInterface/Todo";

const SearchResultsList = ({ lists }) => {
    const searchString = useSelector(state => state.todoListUI.searchQuery);
    const activeListId = useSelector(state => state.todoListUI.activeListId);
    return (
        <StyledListWrapper>
            {
                lists.map(list => 
                    (list.id === activeListId)
                        ? list.todos.map(todo => (
                            todo.title.includes(searchString)
                            ? <Todo key={todo.id} todo={todo} /> : undefined
                        )) : undefined )
            }
        </StyledListWrapper>
    )
};

export default SearchResultsList;

const StyledListWrapper = styled.ul`

`;
const StyledListItem = styled.ul`

`;