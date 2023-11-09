import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCreatingList } from "../../store/actionCreators/todoListActionCreators";
import { createList } from "../../store/actionCreators/dataListActionCreators.js.js";
import CancelButton from "../../ui/CancelButton";
import SavePlusButton from "../../ui/SavePlusButton";
import ButtonsWrapper from "../../ui/ButtonsWrapper";
import ModalInput from "../../ui/ModalInput";
import ModalHeader from "../../ui/ModalHeader";
import Modal from "../../ui/Modal";
import ModalContent from "../../ui/ModalContent";
import { AppContext } from "../../context/context";

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
                    <ButtonsWrapper>
                        <CancelButton onClick={() => {dispatch(toggleCreatingList())}} $mode={context.mode} />
                        <SavePlusButton onClick={() => preCreateNewName(value)} $text={"Create"} />
                    </ButtonsWrapper>
                </ModalContent>
            </Modal>
    )
};

export default CreateListModal;