import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleRenamingList } from "../../../store/actionCreators/todoListActionCreators";
import TextInput from "../../../ui/TextInput";
import { AppContext } from "../../../context/context"; 
import Modal from "../../Modal";
import { renameTaskAndCloseModal } from "../../../store/actionCreators/thunks.js";

const RenameModal = ({ listId, activeList }) => {

    const context = useContext(AppContext);
    const inputFocus = useRef(null);

    const [value, setValue] = useState(activeList[0].title);
    const dispatch = useDispatch();
    useEffect(() => {
        const input = inputFocus.current;
        input.focus();
        return () => input.blur();
    }, []);


    return (
        <Modal
            saveModal
            header={"Rename list"} 
            buttonText={"Rename"} 
            primarySaveBtn
            onCancelClickHandler={() => {dispatch(toggleRenamingList())}} 
            onСonfirmationClick={() => dispatch(renameTaskAndCloseModal({ listId, listTitle: value }))}
        >
            <TextInput 
                ref={inputFocus} 
                id="saveModalInput" 
                $mode={context.mode} 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder={"Rename list"}
            />
        </Modal>
    )
};

export default RenameModal;