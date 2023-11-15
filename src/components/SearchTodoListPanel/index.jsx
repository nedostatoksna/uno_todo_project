import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import { useSelector } from "react-redux";

const TaskListInterface = () => {

    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);
    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const searchString = useSelector(state => state.todoListUI.searchQuery);
    
    return (
        <SearchTodoListWrapper $mode={context.mode}>
            <StyledHeader>Search</StyledHeader>
            {
                searchString.length > 0 &&
                    lists.map(list => 
                        (list.id === activeListId)
                            ? list.todos.map(todo => (
                                todo.title.includes(searchString)
                                ? <li key={todo.id}>{todo.title}</li> : undefined
                            )) : undefined )
            }
        </SearchTodoListWrapper>
    )
};

export default TaskListInterface;

const SearchTodoListWrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "#F4F4F4" : "#252429"};
    padding: 20px;
    width: calc(100vw - 280px);
`;
const StyledHeader = styled.div`


`;