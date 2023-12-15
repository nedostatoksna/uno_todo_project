import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleRenamingList } from "../../../store/actionCreators/todoListActionCreators";
import TextInput from "../../../ui/TextInput";
import { AppContext } from "../../../context/context"; 
import Modal from "../../../ui/Modal";
import { renameTaskAndCloseModal } from "../../../store/actionCreators/thunks.js";

const RenameModal = ({ listId, activeList }) => {

    const context = useContext(AppContext);

    const [value, setValue] = useState(activeList[0].title);
    const dispatch = useDispatch();

    return (
        <Modal
            saveModal
            header={"Rename list"} 
            buttonText={"Rename"} 
            primarySaveBtn
            onCancelClickHandler={() => {dispatch(toggleRenamingList())}} 
            onСonfirmationClick={() => dispatch(renameTaskAndCloseModal({ listId, listTitle: value }))}
        >
            <TextInput id="saveModalInput" $mode={context.mode} value={value} onChange={(e) => setValue(e.target.value)} placeholder={"Rename list"}/>
        </Modal>
    )
};

export default RenameModal;