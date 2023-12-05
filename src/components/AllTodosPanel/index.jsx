import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import AllTodosList from "./AllTodosList";
import Tabs from "../TodoListInterface/Tabs";
import StyledHeader from "../../styled/StyledHeader";

const AllTodosPanel = () => {
    const context = useContext(AppContext);
    const isShowingCompleted = useSelector(state => state.todoListUI.isShowingCompleted);

    const lists = useSelector(state => state.dataLists);
    const allTodos = lists.map(list => list.todos).flat(1);
    const completedTodos = allTodos.filter(todo => todo.isCompleted);

    return (
        <AllTodosWrapper $mode={context.mode} $width={"80vw"}>
            <StyledHeader $mode={context.mode} $white>Tasks</StyledHeader>
            <Tabs />
            <StyledWrapper>
                <AllTodosList todos={isShowingCompleted ? completedTodos : allTodos} /> 
            </StyledWrapper>
        </AllTodosWrapper>
    )
};

export default AllTodosPanel;

const AllTodosWrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "var(--lavender-background)" : "var(--dark-mode-lavender-background)"};
    padding: 20px;
    width: ${props => props.$width};
`;
const StyledWrapper = styled.div`
    height: calc(100% - 104px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;