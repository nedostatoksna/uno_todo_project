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
    const isShowingEditPanel = useSelector(state => state.todoPanelUI.isShowingEditPanel);

    const resultsArr = [];
    const makeArray = () => {
        lists.map(list => 
            (list.id === activeListId)
                ? list.todos.map(todo => (
                    todo.isImportant ? resultsArr.push(todo) : undefined
                )) : undefined )
    };

    makeArray();


    return (
        <ImportantTodoListWrapper $mode={context.mode} $width={isShowingEditPanel ? "60vw" : "80vw"}>
            <Header $mode={context.mode} $white $margin={"18px 0px"}>Important</Header>
            <StyledWrapper>
                {
                    resultsArr.length > 0 ? <ImportantTodoList /> : <Notice />
                }
                <AddTodoBtn />
            </StyledWrapper>
        </ImportantTodoListWrapper>
    )
};

export default ImportantTodoListPanel;

const ImportantTodoListWrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "#F85977" : "#D9415E"};
    padding: 20px;
    width: ${props => props.$width};
`;
const StyledWrapper = styled.div`
    height: calc(100% - 64px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;