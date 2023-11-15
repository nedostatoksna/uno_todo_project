import React, { useContext } from "react";
import SideBar from "../SideBar";
import TaskListInterface from "../TodoListInterface";
import styled from "styled-components";
import { AppContext } from "../../context/context";
import { useSelector } from "react-redux";
import SearchTodoListPanel from "../SearchTodoListPanel";
import ImportantTodoListPanel from "../ImportantTodoListPanel";
import SaveModal from "../modals/SaveModal";

const TodoApp = () => {

    const context = useContext(AppContext);
    const isSearching = useSelector(state => state.todoListUI.isSearching);
    const isShowingImportant  = useSelector(state => state.todoListUI.isShowingImportant);

    const isRenaming = useSelector(state => state.todoListUI.isRenamingList);
    const isCreatingList = useSelector(state => state.todoListUI.isCreatingList);
    const isCreatingTodo = useSelector(state => state.todoListUI.isCreatingTodo);
    const activeList = useSelector(state => state.todoListUI.activeListId);

    const setActionType = () => {
        const type = isCreatingList ? "createList"
        : isCreatingTodo ? "createTodo"
        : "renameList";

        return type;
    }

    console.log(setActionType());

    return (
        <>
            { 
                isCreatingList || isRenaming || isCreatingTodo ? <SaveModal actionType={setActionType()} listId={activeList} /> : undefined
            }

            <Wrapper $mode={context.mode}>
                    <SideBar />
                    { isSearching ? <SearchTodoListPanel /> : isShowingImportant ? <ImportantTodoListPanel /> : <TaskListInterface />  }
            </Wrapper>
        </>
    )
};

export default TodoApp;

const Wrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "#fff" : "#201F24"};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;