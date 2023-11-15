import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCreatingTodo } from "../../store/actionCreators/todoListActionCreators";
import { addTodoToList } from "../../store/actionCreators/dataListActionCreators.js.js";
import ModalInput from "../../ui/ModalInput";
import { AppContext } from "../../context/context";
import Button from "../../ui/buttons/Button";
import Modal from "../../styled/divs/Modal";
import ModalContent from "../../styled/divs/ModalContent";
import ModalHeader from "../../styled/headers/ModalHeader";
import styled from "styled-components";


const SaveModal = () => {

    const context = useContext(AppContext);
    const activeListId = useSelector(state => state.todoListUI.activeListId);

    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const preAddNewTodo = (value) => {
        dispatch(addTodoToList(activeListId, value));
        dispatch(toggleCreatingTodo());
    };

    return (
        <Modal>
            <ModalContent $mode={context.mode}>
                <ModalHeader $mode={context.mode}>Add a task</ModalHeader>
                <ModalInput $mode={context.mode} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Add a task"/>
                <ButtonGroupWrapper>
                        <Button $white onClick={() => {dispatch(toggleCreatingTodo())}} $mode={context.mode}>Cancel</Button>
                        <Button  onClick={() => preAddNewTodo(value)} $plusBtnPurple $mode={context.mode}>Add</Button>
                </ButtonGroupWrapper>
            </ModalContent>
        </Modal>
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