import React from "react";
import { useSelector } from "react-redux";
import Tabs from "./Tabs";
import RenameModal from "../modals/RenameModal";
import CreateListModal from "../modals/CreateListModal";
import AddTodoModal from "../modals/AddTodoModal";
import AddTodoBtn from "./AddTodoBtn";
import styled from "styled-components";
import ListEditPanel from "./ListEditPanel";

const TodoListPanel = ({ list }) => {

    // const isRenaming = useSelector(state => state.todoListUI.isRenamingList);
    // const isCreatingList = useSelector(state => state.todoListUI.isCreatingList);
    // const isCreatingTodo = useSelector(state => state.todoListUI.isCreatingTodo);
    return (
        <>
            {/* { isCreatingList && <CreateListModal /> }
            { isCreatingTodo && <AddTodoModal /> }
            { isRenaming && <RenameModal listId={list.id} /> } */}
            <ListInterfaceWrapper>
                <ListWrapper>
                    <ListEditPanel list={list} />
                    <Tabs />
                </ListWrapper>

                <AddTodoBtn />
            </ListInterfaceWrapper>
       </>
    )
};

export default TodoListPanel;

const ListInterfaceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
`;
const ListWrapper = styled.div`
    width: 100%;
    height: 100%;
`;
