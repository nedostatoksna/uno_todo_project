import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import ImportantTodoList from "./ImportantTodoList";
import Notice from "./Notice";
import Header from "../../styled/Header";

const ImportantTodoListPanel = () => {
    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);
    const isShowingEditPanel = useSelector(state => state.todoPanelUI.isShowingEditPanel);

    const todos = lists.map(list => list.todos).flat(1);
    const importantTodos = todos.filter(todo => todo.isImportant);

    return (
        <ImportantTodoListWrapper $mode={context.mode} $width={isShowingEditPanel ? "60vw" : "80vw"}>
            <Header $mode={context.mode} $white $margin={"18px 0px"}>Important</Header>
            <StyledWrapper>
                {
                    importantTodos.length ? <ImportantTodoList todos={importantTodos} /> : <Notice />
                }
            </StyledWrapper>
        </ImportantTodoListWrapper>
    )
};

export default ImportantTodoListPanel;

const ImportantTodoListWrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "var(--coral)" : "var(--dark-mode-coral)"};
    padding: 20px;
    width: ${props => props.$width};
`;
const StyledWrapper = styled.div`
    height: calc(100% - 104px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;