import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleRenamingList } from "../../store/actionCreators/todoListActionCreators";
import { renameList } from "../../store/actionCreators/dataListActionCreators.js.js";
import ModalInput from "../../ui/ModalInput";
import ModalHeader from "../../ui/headers/ModalHeader";
import Modal from "../../ui/divs/Modal";
import ModalContent from "../../ui/divs/ModalContent";
import { AppContext } from "../../context/context";
import Button from "../../ui/buttons/Button";
import Flex from "../../ui/divs/Flex";
import Wrapper from "../../ui/divs/Wrapper";

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
                <Wrapper $buttons>
                    <Flex $buttons>
                        <Button $cancel $mode={context.mode} onClick={() => {dispatch(toggleRenamingList())}}>Cancel</Button>
                        <Button onClick={() => preSaveNewName(listId, value)} $primary $mode={context.mode}>Rename</Button>
                    </Flex>
                </Wrapper>
            </ModalContent>
        </Modal>
    )
};

export default RenameModal;