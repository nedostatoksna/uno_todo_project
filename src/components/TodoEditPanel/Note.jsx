import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { changeNote } from "../../store/actionCreators/dataListActionCreators.js";
import { useRef } from "react";
import FlexColumnWrapper from "../../styled/FlexColumnWrapper";

const Note = ({ todoId, listId, note }) => {

    const textareaFocus = useRef(null);
    const context = useContext(AppContext);
    const dispatch = useDispatch();

    return (
        <FlexColumnWrapper $padding={"12px 0px 0px 0px"} $mode={context.mode}>
        {
            note && <NoteHeader htmlFor="note" $mode={context.mode}>Note</NoteHeader>
        }
            <NoteText 
                ref={textareaFocus}
                id={todoId}
                name="note" 
                $mode={context.mode} 
                placeholder="Add Note" 
                $black
                $grey={!note}
                value={note}
                onChange={(e) => {dispatch(changeNote({ listId, todoId, todoNote: e.target.value }))}}
            >
            </NoteText>
        </FlexColumnWrapper>
    )
};

export default Note;
 
const NoteHeader = styled.label`
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
`;
const NoteText = styled.textarea`
    min-height: 240px;
    border: none;
    resize: none;
    background: transparent;
    ${props => props.$mode === "Light" && css`
        ${props => props.$grey && css `
            color: var(--transparent-grey-text-dark-variant);
        `}
        ${props => props.$black && css `
            color: var(--black);
        `}
    `}
    ${props => props.$mode === "Dark" && css`
        ${props => props.$grey && css `
            color: var(--dark-mode-transparent-grey-text-dark-variant);
        `}
        ${props => props.$black && css `
            color: var(--dark-mode-white-text);
        `}
    `}
`;