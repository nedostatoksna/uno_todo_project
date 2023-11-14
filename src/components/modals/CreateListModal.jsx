import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCreatingList } from "../../store/actionCreators/todoListActionCreators";
import { createList } from "../../store/actionCreators/dataListActionCreators.js.js";
import ModalInput from "../../ui/ModalInput";
import ModalHeader from "../../ui/headers/ModalHeader";
import Modal from "../../ui/divs/Modal";
import ModalContent from "../../ui/divs/ModalContent";
import { AppContext } from "../../context/context";
import PlusButton from "../../ui/buttons/PlusButton";
import Button from "../../ui/buttons/Button";
import Wrapper from "../../ui/divs/Wrapper";
import Flex from "../../ui/divs/Flex";

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
                <Wrapper $buttons>
                    <Flex $buttons>
                        <Button $cancel onClick={() => {dispatch(toggleCreatingList())}} $mode={context.mode}>Cancel</Button>
                        <PlusButton onClick={() => preCreateNewName(value)} $modal $mode={context.mode}>Create</PlusButton>
                    </Flex>
                </Wrapper>
            </ModalContent>
        </Modal>
    )
};

export default CreateListModal;