import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCreatingList, toggleCreatingTodo, toggleRenamingList } from "../../store/actionCreators/todoListActionCreators";
import { addTodoToList, createList, renameList } from "../../store/actionCreators/dataListActionCreators.js.js";
import TextInput from "../../ui/TextInput";
import { AppContext } from "../../context/context"; 
import Modal from "../../ui/Modal";

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
        <Modal
            header={header} 
            buttonText={buttonText} 
            whitePlusForBtn={actionType === "createList" || actionType === "createTodo"}
            primarySaveBtn
            paddingForPlusBtn={actionType === "createList" || actionType === "createTodo"}
            onCancelClickHandler={() => {dispatch(setToggleFunction(actionType))}} 
            onСonfirmationClick={() => setFunction(actionType)}
        >
            <TextInput id="saveModalInput" $mode={context.mode} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}/>
        </Modal>
    )
};

export default SaveModal;

