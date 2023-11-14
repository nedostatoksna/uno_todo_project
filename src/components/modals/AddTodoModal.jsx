import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCreatingTodo } from "../../store/actionCreators/todoListActionCreators";
import { addTodoToList } from "../../store/actionCreators/dataListActionCreators.js.js";
import ModalInput from "../../ui/ModalInput";
import ModalHeader from "../../ui/headers/ModalHeader";
import Modal from "../../ui/divs/Modal";
import ModalContent from "../../ui/divs/ModalContent";
import { AppContext } from "../../context/context";
import PlusButton from "../../ui/buttons/PlusButton";
import Button from "../../ui/buttons/Button";
import Wrapper from "../../ui/divs/Wrapper";
import Flex from "../../ui/divs/Flex";

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
                <Wrapper $buttons>
                    <Flex $buttons>
                        <Button $cancel onClick={() => {dispatch(toggleCreatingTodo())}} $mode={context.mode}>Cancel</Button>
                        <PlusButton  onClick={() => preAddNewTodo(value)} $modal $mode={context.mode}>Add</PlusButton>
                    </Flex>
                </Wrapper>
            </ModalContent>
        </Modal>
    )
};

export default AddTodoModal;