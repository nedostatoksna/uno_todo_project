import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { AppContext } from "../../context/context";
import { fullMonths } from "../../data/calendar";
import FlexRowWrapper from "../../ui/FlexRowWrapper.jsx";
import { setActiveTodoAndOpenTodoEditPanel } from "../../store/actionCreators/thunks.js";
import TodoCheckbox from "./TodoChecbox.jsx";
import TodoContent from "./TodoContent.jsx";

const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);

    const presetActiveTodoAndOpenEditPanel = (e) => {
        if (e.target.tagName !== "INPUT") {
            dispatch(setActiveTodoAndOpenTodoEditPanel({
                todoId: todo.id, 
                listId: todo.parentListId,
                activeMonth: fullMonths[todo.deadline.deadlineObj.getMonth()].title, 
                activeMonthId: fullMonths[todo.deadline.deadlineObj.getMonth()].id, 
                activeYear: todo.deadline.deadlineObj.getFullYear(), 
                activeDate: todo.deadline.deadlineObj.getDate() })) 
        }
    }

    return (
        <StyledItemBox 
            $mode={context.mode} 
            $active={todo.id === activeTodoId} 
            onClick={(e) => presetActiveTodoAndOpenEditPanel(e)}
        >
            <FlexRowWrapper>
                <TodoCheckbox todo={todo} completed />
                <TodoContent todo={todo} />
            </FlexRowWrapper>
            <TodoCheckbox todo={todo} important />
        </StyledItemBox>
    )
};

export default Todo;

const StyledItemBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 10px;
    border-radius: 10px;
    margin-bottom: 5px;
    cursor: pointer;
    ${props => props.$mode === "Light" && css`
        background-color: var(--white);

        ${props => props.$active && css`
            background-color: var(--transparent-lavender-active-todo);
        `}
    `}
    ${props => props.$mode === "Dark" && css`
        background-color: var(--dark-mode-background);

        ${props => props.$active && css`
            background-color: var(--dark-mode-transparent-grey-text-medium-variant);
        `}
    `}
`;


