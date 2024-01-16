import React, { useContext } from "react";
import { useSelector } from "react-redux";
import SideBar from "../SideBar";
import TodoListInterface from "../TodoListInterface";
import styled, { css } from "styled-components";
import { AppContext } from "../../context/context";
import SearchTodoListPanel from "../SearchTodoListPanel";
import ImportantTodoListPanel from "../ImportantTodoListPanel";
import TodoEditPanel from "../TodoEditPanel";
import AllTodosPanel from "../AllTodosPanel";
import NoListsNoActiveListsNotice from "../NoListsNoActiveListsNotice";
import ModalCases from "../ModalCases";

const TodoApp = () => {

    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);
    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);

    const isSearching = useSelector(state => state.todoListUI.isSearching);
    const isShowingImportant  = useSelector(state => state.todoListUI.isShowingImportant);
    const isShowingAllTodos = useSelector(state => state.todoListUI.isShowingAllTodos);
    const isShowingEditPanel = useSelector(state => state.todoPanelUI.isShowingEditPanel);

    return (
        <>
            <ModalCases />
            <Wrapper $mode={context.mode}>
                <SideBar />
                { isSearching 
                    ? <SearchTodoListPanel /> 
                    : isShowingImportant ? <ImportantTodoListPanel /> 
                    : isShowingAllTodos ? <AllTodosPanel />
                    : !lists.length || !activeListId ? <NoListsNoActiveListsNotice />
                    : <TodoListInterface /> 
                }
                { activeTodoId && isShowingEditPanel && <TodoEditPanel /> }
            </Wrapper>
        </>
    )
};

export default TodoApp;

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    ${props => props.$mode === "Light" && css`
        background-color: var(--white);
    `} 
    ${props => props.$mode === "Dark" && css`
        background-color: var(--dark-mode-background);
    `} 
`;