import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCreatingTodo } from "../../store/actionCreators/todoListActionCreators";
import { addTodoToList } from "../../store/actionCreators/dataListActionCreators.js.js";

import CancelButton from "../../ui/CancelButton";
import SavePlusButton from "../../ui/SavePlusButton";
import ButtonsWrapper from "../../ui/ButtonsWrapper";
import ModalInput from "../../ui/ModalInput";
import ModalHeader from "../../ui/ModalHeader";
import Modal from "../../ui/Modal";
import ModalContent from "../../ui/ModalContent";
import { AppContext } from "../../context/context";

const AddTodoModal = () => {

    const context = useContext(AppContext);
    console.log(context.mode);

    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const preAddNewTodo = (value) => {
        dispatch(addTodoToList(value));
        dispatch(toggleCreatingTodo());
    };

    return (
            <Modal>
                <ModalContent $mode={context.mode}>
                    <ModalHeader $mode={context.mode}>Add a task</ModalHeader>
                    <ModalInput $mode={context.mode} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Add a task"/>
                    <ButtonsWrapper>
                        <CancelButton onClick={() => {dispatch(toggleCreatingTodo())}} $mode={context.mode} />
                        <SavePlusButton  onClick={() => preAddNewTodo(value)} $text={"Add"} />
                    </ButtonsWrapper>
                </ModalContent>
            </Modal>
    )
};

export default AddTodoModal;