import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import ImportantTodoList from "./ImportantTodoList";
import Notice from "./Notice";
import AddTodoBtn from "../TodoListInterface/AddTodoBtn";
import Header from "../../styled/Header";

const ImportantTodoListPanel = () => {

    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);
    const arr = [];
    const makeArray = () => {
        lists.map(list => 
            (list.id === activeListId)
                ? list.todos.map(todo => (
                    todo.isImportant ? arr.push(todo) : undefined
                )) : undefined )
    };

    return (
        <ImportantTodoListWrapper $mode={context.mode}>
            <Header $mode={context.mode} $white $margin={"18px 0px"}>Important</Header>
            {
                arr.length > 0 ? <ImportantTodoList listsArr={makeArray()}/> : <Notice />
            }
            <AddTodoBtn />
        </ImportantTodoListWrapper>
    )
};

export default ImportantTodoListPanel;

const ImportantTodoListWrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "#F85977" : "#D9415E"};
    padding: 20px;
    width: calc(100vw - 280px);
`;