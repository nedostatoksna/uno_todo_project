import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCreatingList } from "../../store/actionCreators/todoListActionCreators";
import { createList } from "../../store/actionCreators/dataListActionCreators.js.js";
import ModalInput from "../../ui/ModalInput";
import { AppContext } from "../../context/context";
import Modal from "../../styled/divs/Modal";
import ModalContent from "../../styled/divs/ModalContent";
import ModalHeader from "../../styled/headers/ModalHeader";
import styled from "styled-components";
import Button from "../../ui/Button";

const CreateListModal = () => {

    const context = useContext(AppContext);

    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const preCreateNewName = (value) => {
        dispatch(createList(value));
        dispatch(toggleCreatingList());
    };

    return (
        <Modal>
            <ModalContent $mode={context.mode}>
                <ModalHeader $mode={context.mode}>New list</ModalHeader>
                <ModalInput $mode={context.mode} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter list title" />
                <ButtonGroupWrapper>
                        <Button $white onClick={() => {dispatch(toggleCreatingList())}} $mode={context.mode}>Cancel</Button>
                        <Button $plusBtnPurple onClick={() => preCreateNewName(value)} $mode={context.mode}>Create</Button>
                </ButtonGroupWrapper>
            </ModalContent>
        </Modal>
    )
};

export default CreateListModal;

const ButtonGroupWrapper = styled.div`
    padding: 20px 4px 0px 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;