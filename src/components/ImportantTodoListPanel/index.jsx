import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled from "styled-components";

const TaskListInterface = () => {

    const lists = useSelector(state => state.dataLists);
    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const context = useContext(AppContext);

    return (
        <ImportantTodoListWrapper $mode={context.mode}>
            <StyledHeader>Important</StyledHeader>
            {
                    lists.map(list => 
                        (list.id === activeListId)
                            ? list.todos.map(todo => (
                                todo.isImportant
                                ? <li key={todo.id}>{todo.title}</li> : undefined
                            )) : undefined )
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