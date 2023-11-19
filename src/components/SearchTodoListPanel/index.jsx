import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SearchResultsList from "./SearchResultsList";
import Notice from "./Notice";
import Header from "../../styled/Header";

const SearchTodoListPanel = () => {

    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);
    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const searchString = useSelector(state => state.todoListUI.searchQuery);

    const resultsArr = [];
    const makeResultsArray = () => {
        lists.map(list => 
            (list.id === activeListId)
                ? list.todos.map(todo => (
                    todo.title.includes(searchString) ? resultsArr.push(todo) : undefined
                )) : undefined )
    };
    makeResultsArray();

    return (
        <SearchTodoListWrapper $mode={context.mode}>
            <Header $darkGrey $margin={"18px 0px"}>Search</Header>
            {
                searchString.length > 0 && resultsArr.length > 0 ? <SearchResultsList lists={lists}/> : <Notice />
            }
        </SearchTodoListWrapper>
    )
};

export default SearchTodoListPanel;

const SearchTodoListWrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "#F4F4F4" : "#252429"};
    padding: 20px;
    width: calc(100vw - 280px);
`;
