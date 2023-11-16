import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import ImportantTodoList from "./ImportantTodoList";
import Notice from "./Notice";

const TaskListInterface = () => {

    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);
    const arr = [];
    const makeImportantArray = () => {
        lists.map(list => 
            (list.id === activeListId)
                ? list.todos.map(todo => (
                    todo.isImportant ? arr.push(todo) : undefined
                )) : undefined )
    };

    return (
        <ImportantTodoListWrapper $mode={context.mode}>
            <StyledHeader>Important</StyledHeader>
            {
                arr.length > 0 ? <ImportantTodoList listsArr={makeImportantArray()}/> : <Notice />
            }
        </ImportantTodoListWrapper>
    )
};

export default TaskListInterface;

const ImportantTodoListWrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "#F85977" : "#D9415E"};
    padding: 20px;
    width: calc(100vw - 280px);
`;
const StyledHeader = styled.div`


`;