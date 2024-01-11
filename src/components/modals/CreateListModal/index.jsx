import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import TextInput from "../../../ui/TextInput";
import { AppContext } from "../../../context/context"; 
import Modal from "../../Modal";
import { toggleCreatingList } from "../../../store/actionCreators/todoListActionCreators.js";
import { createNewListAndCloseModal } from "../../../store/actionCreators/thunks.js";

const CreateListModal = () => {

    const context = useContext(AppContext);
    const inputFocus = useRef(null);

    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const input = inputFocus.current;
        input.focus();
        return () => input.blur();
    }, []);


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
                ref={inputFocus} 
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