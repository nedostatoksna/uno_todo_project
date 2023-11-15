import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleRenamingList } from "../../store/actionCreators/todoListActionCreators";
import { renameList } from "../../store/actionCreators/dataListActionCreators.js.js";
import ModalInput from "../../ui/ModalInput";
import { AppContext } from "../../context/context";
import Button from "../../ui/Button";
import Modal from "../../styled/divs/Modal";
import ModalContent from "../../styled/divs/ModalContent";
import ModalHeader from "../../styled/headers/ModalHeader";
import styled from "styled-components";

const RenameModal = ({ listId }) => {

    const context = useContext(AppContext);

    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const preSaveNewName = (listId, value) => {
        dispatch(renameList(listId, value));
        dispatch(toggleRenamingList());
    };

    return (
        <Modal>
            <ModalContent $mode={context.mode}>
                <ModalHeader $mode={context.mode}>Rename list</ModalHeader>
                <ModalInput $mode={context.mode} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Rename list" />
                <ButtonGroupWrapper>
                        <Button $white $mode={context.mode} onClick={() => {dispatch(toggleRenamingList())}}>Cancel</Button>
                        <Button onClick={() => preSaveNewName(listId, value)} $primary $mode={context.mode}>Rename</Button>
                </ButtonGroupWrapper>
            </ModalContent>
        </Modal>
    )
};

export default RenameModal;

const ButtonGroupWrapper = styled.div`
    padding: 20px 4px 0px 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;