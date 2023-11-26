import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../../ui/StyledCheckbox";
import styled, { css } from "styled-components";
import { AppContext } from "../../context/context";
import { changeCompleted, changeImportant } from "../../store/actionCreators/dataListActionCreators.js";
import { changeActiveTodoId, toggleTodoEditPanel } from "../../store/actionCreators/todoPanelActionCreators";

const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);

    const isShowingEditPanel = useSelector(state => state.todoPanelUI.isShowingEditPanel);

    const setActiveTodoAndOpenEditPanel = (e) => {
        if (!e.target.id.includes("input")) {
            dispatch(changeActiveTodoId(todo.id)) 
            if  (isShowingEditPanel === false) dispatch(toggleTodoEditPanel()) 
        }
    }

    return (
        <StyledItemBox 
            $mode={context.mode} 
            $active={todo.id === activeTodoId}
            onClick={(e) => setActiveTodoAndOpenEditPanel(e)}
        >
            <Checkbox 
                $primary 
                $checked 
                $mode={context.mode} 
                $margin={"10px 16px 10px 0px"} 
                checked={todo.isCompleted}
                id={todo.id}
                onChange={() => {dispatch(changeCompleted(todo.parentListId, todo.id, !todo.isCompleted))}} />
            <StyledItemTextBox>
                <StyledItemTitle $mode={context.mode}>{todo.title}</StyledItemTitle>
                <StyledNoteDateBox>
                    <StyledText $grey $mode={context.mode}>{todo.deadlineDate}</StyledText>
                    <StyledText $grey $mode={context.mode}>-</StyledText>
                    <StyledText $coral $mode={context.mode}>{todo.note}</StyledText>
                </StyledNoteDateBox>
            </StyledItemTextBox>
            <Checkbox 
                $mode={context.mode} 
                $star 
                $starChecked 
                $margin={"10px 0px 10px 16px"} 
                checked={todo.isImportant}
                id={todo.id}
                onChange={() => {dispatch(changeImportant(todo.parentListId, todo.id, !todo.isImportant))}} />
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
const StyledItemTitle = styled.p`
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
`;
const StyledItemTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 8px 0px;
    width: calc(100% - 102px);
`;
const StyledText = styled.p`
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.25px;
    padding: 2px;

    ${props => props.$grey && css `
        color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-dark-variant)" : "var(--dark-mode-transparent-grey-text-dark-variant)"};
    `}
    ${props => props.$coral && css `
        color: ${props => props.$mode === "Light" ? "var(--coral)" : "var(--dark-mode-coral)"};
    `}
`;
const StyledNoteDateBox = styled.div`
    display: flex;
    flex-direction: row;
`;

