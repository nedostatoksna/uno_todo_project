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
import UserInterface from "../modals/UserInterface";
import AddDueDate from "../modals/AddDueDateModal";
import Calendar from "../modals/Calendar";
import NoListsNoActiveListsNotice from "../NoListsNoActiveListsNotice";
import DeleteListModal from "../modals/DeleteListModal";
import DeleteTaskModal from "../modals/DeleteTaskModal";
import SignOutModal from "../modals/SignOutModal";
import CreateListModal from "../modals/CreateListModal";
import RenameModal from "../modals/RenameModal";
import CreateTaskModal from "../modals/CreateTaskModal";

const TodoApp = () => {

    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);
    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const isSearching = useSelector(state => state.todoListUI.isSearching);
    const isShowingImportant  = useSelector(state => state.todoListUI.isShowingImportant);
    const isShowingAllTodos = useSelector(state => state.todoListUI.isShowingAllTodos);

    const isRenaming = useSelector(state => state.todoListUI.isRenamingList);
    const isCreatingList = useSelector(state => state.todoListUI.isCreatingList);
    const isCreatingTodo = useSelector(state => state.todoListUI.isCreatingTodo);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);

    const isDeletingTodo = useSelector(state => state.todoPanelUI.isDeletingTodo);
    const isDeletingList = useSelector(state => state.todoListUI.isDeletingList);
    const isSigningOut = useSelector(state => state.userPanelUI.isSigningOut);

    const isShowingEditPanel = useSelector(state => state.todoPanelUI.isShowingEditPanel);
    const isShowinguserPanel = useSelector(state => state.userPanelUI.isShowingUserPanel);
    const isShowingChooseDeadlineModal = useSelector(state => state.todoPanelUI.isShowingChooseDeadlineModal);
    const isShowingCalendar = useSelector(state => state.todoPanelUI.isShowingCalendar);
    const activeList = lists.filter(list => list.id ===  activeListId);

    return (
        <>
            { 
                isCreatingList 
                    ? <CreateListModal /> 
                    : isRenaming ? <RenameModal listId={activeListId} activeList={activeList} /> 
                    : isCreatingTodo && <CreateTaskModal listId={activeListId} /> 
            }
            {
                isDeletingList 
                    ? <DeleteListModal /> 
                    : isDeletingTodo ? <DeleteTaskModal /> 
                    : isSigningOut && <SignOutModal /> 
            }
            {
                isShowinguserPanel && <UserInterface /> 
            }
            {
                isShowingChooseDeadlineModal && <AddDueDate todoId={activeTodoId} listId={activeListId} />
            }
            {
                isShowingCalendar && <Calendar /> 
            }

            <Wrapper $mode={context.mode}>
                    <SideBar />
                    { isSearching 
                        ? <SearchTodoListPanel /> 
                        : isShowingImportant ? <ImportantTodoListPanel /> 
                        : isShowingAllTodos ? <AllTodosPanel />
                        : !lists.length || !activeListId ? <NoListsNoActiveListsNotice />
                        : <TodoListInterface />  }
                    { activeTodoId && isShowingEditPanel ? <TodoEditPanel /> : undefined }
            </Wrapper>
        </>
    )
};

export default TodoApp;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    ${props => props.$mode === "Light" && css`
        background-color: var(--white);
    `} 
    ${props => props.$mode === "Dark" && css`
        background-color: var(--dark-mode-background);
    `} 
`;