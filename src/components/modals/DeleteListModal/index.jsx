import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../../context/context";
import { toggleDeletingList } from "../../../store/actionCreators/todoListActionCreators";
import Modal from "..";
import { deleteListAndCloseModal } from "../../../store/actionCreators/thunks";
import SubText from "../../../ui/SubText";

const DeleteListModal = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeListId = useSelector(state => state.todoListUI.activeListId);

    return (
        <Modal 
            breakModal
            header={"Are you sure?"} 
            buttonText={"Delete"} 
            onCancelClickHandler={() => {dispatch(toggleDeletingList())}} 
            onСonfirmationClick={() => {dispatch(deleteListAndCloseModal({ listId: activeListId }))}}
        >
            <SubText $mode={context.mode}>
                Task will be permanently deleted
            </SubText>
        </Modal>
    )
};

export default DeleteListModal;


