import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import TextInput from "../../../ui/TextInput";
import { AppContext } from "../../../context/context"; 
import Modal from "../../../ui/Modal";
import { toggleCreatingList } from "../../../store/actionCreators/todoListActionCreators.js";
import { createNewListAndCloseModal } from "../../../store/actionCreators/thunks.js";

const CreateListModal = () => {

    const context = useContext(AppContext);

    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    return (
        <Modal
            saveModal
            header={"New list"} 
            buttonText={"Create"} 
            whitePlusForBtn
            primarySaveBtn
            paddingForPlusBtn
            onCancelClickHandler={() => {dispatch(toggleCreatingList())}} 
            onСonfirmationClick={() => dispatch(createNewListAndCloseModal({ listTitle: value }))}
        >
            <TextInput 
                id="saveModalInput" 
                $mode={context.mode} 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder={"Enter list title"} 
            />
        </Modal>
    )
};

export default CreateListModal;