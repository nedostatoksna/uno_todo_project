import React, { useContext } from "react";
import SideBar from "../SideBar";
import TodoListInterface from "../TodoListInterface";
import styled from "styled-components";
import { AppContext } from "../../context/context";
import { useSelector } from "react-redux";
import SearchTodoListPanel from "../SearchTodoListPanel";
import ImportantTodoListPanel from "../ImportantTodoListPanel";
import SaveModal from "../modals/SaveModal";
import BreakModal from "../modals/BreakModal";
import TodoEditPanel from "../TodoEditPanel";
import AllTodosPanel from "../AllTodosPanel";
import UserInterface from "../modals/UserInterface";
import AddDueDate from "../modals/AddDueDateModal";
import Calendar from "../modals/Calendar";
import { CalendarContext } from "../../context/calendarContext";
import { useState } from "react";

const TodoApp = () => {

    const context = useContext(AppContext);
    const isSearching = useSelector(state => state.todoListUI.isSearching);
    const isShowingImportant  = useSelector(state => state.todoListUI.isShowingImportant);
    const isShowingAllTodos = useSelector(state => state.todoListUI.isShowingAllTodos);

    const isRenaming = useSelector(state => state.todoListUI.isRenamingList);
    const isCreatingList = useSelector(state => state.todoListUI.isCreatingList);
    const isCreatingTodo = useSelector(state => state.todoListUI.isCreatingTodo);
    const activeList = useSelector(state => state.todoListUI.activeListId);

    const isDeletingTodo = useSelector(state => state.todoPanelUI.isDeletingTodo);
    const isDeletingList = useSelector(state => state.todoListUI.isDeletingList);
    const isSigningOut = useSelector(state => state.userPanelUI.isSigningOut);

    const isShowingEditPanel = useSelector(state => state.todoPanelUI.isShowingEditPanel);
    const isShowinguserPanel = useSelector(state => state.userPanelUI.isShowingUserPanel);
    const isShowingChooseDeadlineModal = useSelector(state => state.todoPanelUI.isShowingChooseDeadlineModal);
    const isShowingCalendar = useSelector(state => state.todoPanelUI.isShowingCalendar);

    const lists = useSelector(state => state.dataLists);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);

    const setActionType = () => {
        const type = isCreatingList ? "createList"
        : isCreatingTodo ? "createTodo"
        : isRenaming ? "renameList"
        : isDeletingList ? "deleteList"
        : isDeletingTodo ? "deleteTodo"
        : "signOut";

        return type;
    }

    const setActiveTodo = () => {
        let result
        lists.map(list => 
            (list.id === activeList)
                ? list.todos.map(todo => (
                    (todo.id === activeTodoId)
                    ? result = todo : undefined
                )) : undefined )
        return result;
    };

    const activeTodo = setActiveTodo();
   
    
    return (
        <>
            { 
                isCreatingList || isRenaming || isCreatingTodo ? <SaveModal actionType={setActionType()} listId={activeList} /> : undefined
            }
            {
                isDeletingList || isDeletingTodo || isSigningOut ? <BreakModal actionType={setActionType()} /> : undefined
            }
            {
                isShowinguserPanel && <UserInterface /> 
            }
            {
                isShowingChooseDeadlineModal && <AddDueDate todo={activeTodo} />
    
            }
            {
                isShowingCalendar && <Calendar todo={activeTodo} /> 

            }

            <Wrapper $mode={context.mode}>
                    <SideBar />
                    { isSearching 
                        ? <SearchTodoListPanel /> 
                        : isShowingImportant ? <ImportantTodoListPanel /> 
                        : isShowingAllTodos ? <AllTodosPanel />
                        : <TodoListInterface />  }
                    { activeTodoId.length && isShowingEditPanel ? <TodoEditPanel /> : undefined }
            </Wrapper>
        </>
    )
};

export default TodoApp;

const Wrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "var(--white)" : "var(--dark-mode-background)"};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;