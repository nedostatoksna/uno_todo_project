import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleRenamingList } from "../../store/actionCreators/todoListActionCreators";
import { renameList } from "../../store/actionCreators/dataListActionCreators.js.js";
import CancelButton from "../../ui/buttons/CancelButton";
import PrimaryButton from "../../ui/buttons/Button";
import ButtonsWrapper from "../../ui/divs/ButtonsWrapper";
import ModalInput from "../../ui/ModalInput";
import ModalHeader from "../../ui/headers/ModalHeader";
import Modal from "../../ui/divs/Modal";
import ModalContent from "../../ui/divs/ModalContent";
import { AppContext } from "../../context/context";

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
                <ButtonsWrapper>
                    <CancelButton onClick={() => {dispatch(toggleRenamingList())}} />
                    <PrimaryButton onClick={() => preSaveNewName(listId, value)} $mode={context.mode}>Rename</PrimaryButton>
                </ButtonsWrapper>
            </ModalContent>
        </Modal>
    )
};

export default RenameModal;