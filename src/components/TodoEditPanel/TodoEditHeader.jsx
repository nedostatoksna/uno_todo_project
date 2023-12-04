import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled, { css } from "styled-components";
import Checkbox from "../../ui/StyledCheckbox";
import { changeCompleted, changeImportant, changeTitle } from "../../store/actionCreators/dataListActionCreators.js";
import { toggleEditingTitle } from "../../store/actionCreators/todoPanelActionCreators";

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
        <TodoEditHeaderWrapper $mode={context.mode}>
            <Checkbox
                $primary 
                $checked 
                $mode={context.mode} 
                checked={todo.isCompleted}
                id={todo.id}
                onChange={() => {dispatch(changeCompleted(activeListId, activeTodoId, !todo.isCompleted))}} />
            <StyledTitleWrapper $mode={context.mode} $isEditing={isEditingTitle ? true : false}>
                { isEditingTitle ? <StyledLabel htmlFor="titleInput" $mode={context.mode}>Task Name</StyledLabel> : undefined }
                <StyledItemTitle 
                    ref={titleInputFocus} 
                    $mode={context.mode} 
                    $isEditing={isEditingTitle ? true : false}
                    value={todo.title} 
                    onChange={(e) => dispatch(changeTitle(activeListId, activeTodoId, e.target.value))} 
                    id="titleInput"
                />
            </StyledTitleWrapper>
            <Checkbox 
                $mode={context.mode} 
                $starGrey
                $starChecked 
                checked={todo.isImportant}
                id={todo.id}
                onChange={() => {dispatch(changeImportant(activeListId, todo.id, !todo.isImportant))}} />
        </TodoEditHeaderWrapper>
    )
};

export default TodoEditHeader;
 
const TodoEditHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;
const StyledItemTitle = styled.input`
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
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
    margin: 0px 10px;
    padding: 8px 16px;
    width: calc(20vw - 120px);
    background-color: ${props => props.$mode === "Light" ? "var(--white)" : "var(--dark-mode-background)"};  
    ${props => props.$isEditing && css `
        border-bottom: 2px solid;
        border-color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
        background-color: ${props => props.$mode === "Light" ? "var(--white)" : "var(--dark-grayish-lavender-variant)"};
    `}
`;
const StyledLabel = styled.label` 
    color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
`;


