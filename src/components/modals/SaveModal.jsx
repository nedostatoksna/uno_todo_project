import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCreatingList, toggleCreatingTodo, toggleRenamingList } from "../../store/actionCreators/todoListActionCreators";
import { addTodoToList, createList, renameList } from "../../store/actionCreators/dataListActionCreators.js.js";
import TextInput from "../../ui/TextInput";
import { AppContext } from "../../context/context";
import Button from "../../ui/Button";
import styled from "styled-components";
import Background from "../../styled/Background";
import ContentBox from "../../styled/ContentBox";
import Header from "../../styled/Header";

const SaveModal = ({ actionType, listId }) => {
    const context = useContext(AppContext);

    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const preAddNewTodo = () => {
        dispatch(addTodoToList(listId, value));
        dispatch(toggleCreatingTodo());
    };

    const preSaveNewName = () => {
        dispatch(renameList(listId, value));
        dispatch(toggleRenamingList());
    };

        const preCreateNewList = () => {
        dispatch(createList(value));
        dispatch(toggleCreatingList());
    };

    const header = actionType === "createList" ? "New list"
    : actionType === "createTodo" ? "Add a task"
    : "Rename list";

    const placeholder = actionType === "createList" ? "Enter list title"
    : actionType === "createTodo" ? "Add a task"
    : "Rename list";

    const buttonText = actionType === "createList" ? "Create"
    : actionType === "createTodo" ? "Add"
    : "Rename";

    const setToggleFunction = (type) => {
        switch (type) {
            case "createList": return toggleCreatingList()
            case "createTodo": return toggleCreatingTodo()
            default: return toggleRenamingList()
        }
    }
    const setFunction = (type) => {
        switch (type) {
            case "createList": return preCreateNewList()
            case "createTodo": return preAddNewTodo()
            default: return preSaveNewName()
        }
    }

    return (
        <Background $darkTransparent>
            <ContentBox $primary $mode={context.mode}>
                <Header $mode={context.mode}>{header}</Header>
                <TextInput $mode={context.mode} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}/>
                <ButtonGroupWrapper>
                        <Button $white onClick={() => {dispatch(setToggleFunction(actionType))}} $mode={context.mode}>Cancel</Button>
                        {
                            actionType === "createList" || actionType === "createTodo"
                                ? <Button  onClick={() => setFunction(actionType)} $plusBtnPurple $mode={context.mode}>{buttonText}</Button>
                                : <Button onClick={() => setFunction(actionType)} $primary $mode={context.mode}>{buttonText}</Button>
                        }
                </ButtonGroupWrapper>
            </ContentBox>
        </Background>
    )
};

export default SaveModal;

const ButtonGroupWrapper = styled.div`
    padding: 20px 4px 0px 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;