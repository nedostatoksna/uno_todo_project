import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../../ui/StyledCheckbox";
import styled, { css } from "styled-components";
import { AppContext } from "../../context/context";
import { changeCompleted, changeImportant } from "../../store/actionCreators/dataListActionCreators.js";
import { setActiveTodoAndOpenEditPanel } from "../../store/actionCreators/todoPanelActionCreators";
import { fullMonths } from "../../data/calendar";
import FlexWrapper from "../../styled/FlexWrapper.jsx";

const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);
    const deadLineForDisplay = todo.deadline.deadlineString;

    const presetActiveTodoAndOpenEditPanel = (e) => {
        if (!e.target.id.includes("input")) {
            dispatch(setActiveTodoAndOpenEditPanel(
                                                    todo.id, 
                                                    todo.parentListId,
                                                    fullMonths[todo.deadline.deadlineObj.getMonth()].title, 
                                                    fullMonths[todo.deadline.deadlineObj.getMonth()].id, 
                                                    todo.deadline.deadlineObj.getFullYear(), 
                                                    todo.deadline.deadlineObj.getDate())) 
        }
    }

    return (
        <StyledItemBox 
            $mode={context.mode} 
            $active={todo.id === activeTodoId}
            onClick={(e) => presetActiveTodoAndOpenEditPanel(e)}
        >
        <StyledWrapper>
            <Checkbox 
                    labelPrimary 
                    checkedPrimary
                    margin={"10px 16px 10px 0px"} 
                    isChecked={todo.isCompleted}
                    todoId={todo.id}
                    onChangeHandler={() => {dispatch(changeCompleted(todo.parentListId, todo.id, !todo.isCompleted))}} 
                />
                <FlexWrapper $Calcheight $flexStart $padding={"8px 0px"}>
                    <StyledItemTitle $mode={context.mode}>{todo.title}</StyledItemTitle>
                    <StyledNoteDateBox>
                        <StyledText $grey $mode={context.mode}>{deadLineForDisplay}</StyledText>
                        {
                            deadLineForDisplay && todo.note.length ? <StyledText $grey $mode={context.mode}>-</StyledText> : undefined
                        }
                        <StyledText $coral $mode={context.mode}>{todo.note}</StyledText>
                    </StyledNoteDateBox>
                </FlexWrapper>
        </StyledWrapper>
            <Checkbox 
                labelStar 
                starChecked 
                margin={"10px 0px 10px 16px"} 
                isChecked={todo.isImportant}
                todoId={todo.id}
                onChangeHandler={() => {dispatch(changeImportant(todo.parentListId, todo.id, !todo.isImportant))}}
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
    background-color: ${props => props.$mode === "Light" && props.$active === false ? "var(--white)"  
    : props.$active && props.$mode === "Light" ? "var(--transparent-lavender)" 
    : props.$active && props.$mode === "Dark" ? "var(--dark-mode-transparent-grey-text-medium-variant)" : "var(--dark-mode-background)"};
    margin-bottom: 5px;
`;
const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
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
const StyledNoteDateBox = styled.div`
    display: flex;
    flex-direction: row;
`;

