import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled, { css } from "styled-components";
import Checkbox from "../../ui/StyledCheckbox";
import { changeCompleted, changeImportant, changeTitle } from "../../store/actionCreators/dataListActionCreators.js";
import { toggleEditingTitle } from "../../store/actionCreators/todoPanelActionCreators";
import FlexRowWrapper from "../../ui/FlexRowWrapper.jsx";

const TodoEditHeader = ({ todo }) => {

    const titleInputFocus = useRef(null);
    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);
    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const isEditingTitle = useSelector(state => state.todoPanelUI.isEditingTitle);

    const cashedPreEdit = useCallback(() => {
        dispatch(toggleEditingTitle());
    }, [dispatch]);

    useEffect(() => {
        const input = titleInputFocus.current;
        input.addEventListener("focus", cashedPreEdit);
        return () => input.removeEventListener("focus", cashedPreEdit);
    }, [cashedPreEdit]);

    return (
        <FlexRowWrapper $center $margin={"0px 0px 10px 0px"} $spaceBetween>
            <Checkbox
                sidebar
                labelPrimary 
                checkedPrimary 
                isChecked={todo.isCompleted}
                todoId={todo.id}
                onChangeHandler={() => {dispatch(changeCompleted({ listId: activeListId, todoId: activeTodoId, isCompleted: !todo.isCompleted }))}}
            />
            <StyledTitleWrapper $mode={context.mode} $isEditing={isEditingTitle ? true : false}>
                { isEditingTitle ? <StyledLabel htmlFor="titleInput" $mode={context.mode}>Task Name</StyledLabel> : undefined }
                <StyledTodoTitle 
                    ref={titleInputFocus} 
                    $mode={context.mode} 
                    $isEditing={isEditingTitle ? true : false}
                    value={todo.title} 
                    onChange={(e) => dispatch(changeTitle({ listId: activeListId, todoId: activeTodoId, todoTitle: e.target.value }))} 
                    id="titleInput"
                />
            </StyledTitleWrapper>
            <Checkbox 
                labelStarGrey
                starChecked 
                isChecked={todo.isImportant}
                todoId={todo.id}
                onChangeHandler={() => {dispatch(changeImportant({ listId: activeListId, todoId: todo.id, isImportant: !todo.isImportant }))}} 
            />
        </FlexRowWrapper>
    )
};

export default TodoEditHeader;
 
const StyledTodoTitle = styled.input`
    font-size: 22px;
    line-height: 28px; 
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
    margin: 0px 10px;
    width: calc(20vw - 140px);
    background-color: transparent;
    ${props => props.$isEditing && css `
        margin: 0px;
    `}
`;
const StyledTitleWrapper = styled.div`
    font-size: 22px;
    line-height: 28px; 
    margin: 0px 10px;
    padding: 8px 16px;
    width: calc(20vw - 120px);
    ${props => props.$isEditing && css `
        border-bottom: 2px solid;
    `}
    ${props => props.$mode === "Light" && css `
        color: var(--black);
        background-color: var(--white);

        ${props => props.$isEditing && css `
            border-color: var(--primary-purple);
            background-color: var(--white);
        `}
    `}
    ${props => props.$mode === "Dark" && css `
        color: var(--dark-mode-white-text);
        background-color: var(--dark-mode-background);

        ${props => props.$isEditing && css `
            border-color: var(--dark-mode-primary-purple);
            background-color: var(--dark-grayish-lavender-variant);
        `}
    `}
`;
const StyledLabel = styled.label` 
    color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
`;


