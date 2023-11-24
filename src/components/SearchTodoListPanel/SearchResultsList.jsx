import React from "react";
import styled from "styled-components";
import Todo from "../TodoListInterface/Todo";

const SearchResultsList = ({ lists }) => {

    return (
        <StyledListWrapper>
            {
                lists.map(todo => <Todo key={todo.id} todo={todo} /> )
            }
        </StyledListWrapper>
    )
};

export default SearchResultsList;

const StyledListWrapper = styled.ul`

`;
