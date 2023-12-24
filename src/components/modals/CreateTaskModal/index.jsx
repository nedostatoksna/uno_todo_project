import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import TextInput from "../../../ui/TextInput";
import { AppContext } from "../../../context/context"; 
import Modal from "../index.jsx";
import { toggleCreatingTodo } from "../../../store/actionCreators/todoListActionCreators.js";
import { addNewTodoAndCloseModal } from "../../../store/actionCreators/thunks.js";

const CreateTaskModal = ({ listId }) => {

    const context = useContext(AppContext);

    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    return (
        <Modal
            saveModal
            header={"Add a task"} 
            buttonText={"Add"} 
            whitePlusForBtn
            primarySaveBtn
            paddingForPlusBtn
            onCancelClickHandler={() => {dispatch(toggleCreatingTodo())}} 
            onСonfirmationClick={() => dispatch(addNewTodoAndCloseModal({ listId, todoTitle: value }))}
        >
            <TextInput 
                id="saveModalInput" 
                $mode={context.mode} 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder={"Add a task"}
            />
        </Modal>
    )
};

export default CreateTaskModal;