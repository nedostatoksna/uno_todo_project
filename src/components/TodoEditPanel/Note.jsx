import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { useState } from "react";
import { changeNote } from "../../store/actionCreators/dataListActionCreators.js";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Note = ({ todo }) => {

    const textareaFocus = useRef(null);
    const context = useContext(AppContext);
    const dispatch = useDispatch();
    const [textValue, setTextValue] = useState(todo.note);

    const cashedChangeNote = useCallback(() => {
        dispatch(changeNote(todo.parentListId, todo.id, textValue));
    }, [dispatch, todo.parentListId, todo.id, textValue ]);

    useEffect(() => {
        const textarea = textareaFocus.current;
        textarea.addEventListener("change", cashedChangeNote);
        return () => textarea.removeEventListener("change", cashedChangeNote);
    }, [cashedChangeNote]);

    return (
        <NoteWrapper $mode={context.mode}>
        {
            todo.note && <NoteHeader htmlFor="note" $mode={context.mode}>Note</NoteHeader>
        }
            <NoteText 
                ref={textareaFocus}
                id={todo.id}
                name="note" 
                $mode={context.mode} 
                placeholder="Add Note" 
                $black
                $grey={!todo.note}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
            >
            </NoteText>
        </NoteWrapper>
    )
};

export default Note;
 
const NoteWrapper = styled.div`
    padding-top: 12px;
    display: flex;
    flex-direction: column;
`;
const NoteHeader = styled.label`
    font-family: "Roboto";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; 
    letter-spacing: 0.4px;
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
`;
const NoteText = styled.textarea`
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
    letter-spacing: 0.5px;
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