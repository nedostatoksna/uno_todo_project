import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../../ui/StyledCheckbox";
import styled, { css } from "styled-components";
import { AppContext } from "../../context/context";
import { fullMonths } from "../../data/calendar";
import FlexColumnWrapper from "../../styled/FlexColumnWrapper";
import { changeCompleted, changeImportant } from "../../store/actionCreators/dataListActionCreators.js";
import FlexRowWrapper from "../../styled/FlexRowWrapper.jsx";
import { setActiveTodoAndOpenTodoEditPanel } from "../../store/actionCreators/thunks.js";

const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);
    const deadLineForDisplay = todo.deadline.deadlineString;

    const presetActiveTodoAndOpenEditPanel = (e) => {
        if (e.target.tagName !== "INPUT") {
            dispatch(setActiveTodoAndOpenTodoEditPanel({
                                                    todoId: todo.id, 
                                                    activeListId: todo.parentListId,
                                                    activeMonth: fullMonths[todo.deadline.deadlineObj.getMonth()].title, 
                                                    activeMonthId: fullMonths[todo.deadline.deadlineObj.getMonth()].id, 
                                                    activeYear: todo.deadline.deadlineObj.getFullYear(), 
                                                    activeDate: todo.deadline.deadlineObj.getDate() })) 
        }
    }

    return (
        <StyledItemBox $mode={context.mode} $active={todo.id === activeTodoId} onClick={(e) => presetActiveTodoAndOpenEditPanel(e)}>
        <FlexRowWrapper>
            <Checkbox 
                    labelPrimary 
                    checkedPrimary
                    leftPosition
                    isChecked={todo.isCompleted}
                    todoId={todo.id}
                    onChangeHandler={() => {dispatch(changeCompleted({ listId: todo.parentListId, todoId: todo.id, isCompleted: !todo.isCompleted }))}} 
                />
                <FlexColumnWrapper $Calcheight $flexStart $padding={"8px 0px"}>
                    <StyledItemTitle $mode={context.mode}>{todo.title}</StyledItemTitle>
                    <FlexRowWrapper>
                        <StyledText $grey $mode={context.mode}>{deadLineForDisplay}</StyledText>
                        {
                            deadLineForDisplay && todo.note.length ? <StyledText $grey $mode={context.mode}>-</StyledText> : undefined
                        }
                        <StyledText $coral $mode={context.mode}>{todo.note}</StyledText>
                    </FlexRowWrapper>
                </FlexColumnWrapper>
        </FlexRowWrapper>
            <Checkbox 
                labelStar 
                starChecked 
                rightPosition
                isChecked={todo.isImportant}
                todoId={todo.id}
                onChangeHandler={() => {dispatch(changeImportant({ listId: todo.parentListId, todoId: todo.id, isImportant: !todo.isImportant }))}}
            />
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
const StyledItemTitle = styled.p`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px; 
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
`;
const StyledText = styled.p`
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.25px;
    padding: 2px;
    ${props => props.$mode === "Light" && css `
        ${props => props.$grey && css `
            color: var(--transparent-grey-text-dark-variant);
        `}
        ${props => props.$coral && css `
            color: var(--coral);
        `}
    `}
    ${props => props.$mode === "Dark" && css `
        ${props => props.$grey && css `
            color: var(--dark-mode-transparent-grey-text-dark-variant);
        `}
        ${props => props.$coral && css `
            color: var(--dark-mode-coral);
        `}
    `}
`;

