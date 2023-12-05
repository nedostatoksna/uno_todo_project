import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SearchResultsList from "./SearchResultsList";
import Notice from "./Notice";
import StyledHeader from "../../styled/StyledHeader";

const SearchTodoListPanel = () => {

    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);
    const searchString = useSelector(state => state.todoListUI.searchQuery);
    const todos = lists.map(list => list.todos).flat(1);
    const serchedTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchString.toLowerCase()));

    return (
        <SearchTodoListWrapper $mode={context.mode} $width={"80vw"}>
            <StyledHeader $darkGrey>Search</StyledHeader>
            {
                serchedTodos.length && searchString ? <SearchResultsList lists={serchedTodos}/> : <Notice />
            }
        </SearchTodoListWrapper>
    )
};

export default SearchTodoListPanel;

const SearchTodoListWrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "var(--search-background)" : "var(--dark-mode-search-background)"};
    padding: 20px;
    width: ${props => props.$width};
`;
