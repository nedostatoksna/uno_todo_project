import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../../context/context";
import { toggleDeletingTodo } from "../../../store/actionCreators/todoPanelActionCreators";
import Modal from "../../Modal";
import { deleteTodoAndCloseModal } from "../../../store/actionCreators/thunks";
import SubText from "../../../ui/SubText";

const DeleteTaskModal = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);

    return (
        <Modal 
            breakModal
            header={"Are you sure?"} 
            buttonText={"Delete"} 
            onCancelClickHandler={() => {dispatch(toggleDeletingTodo())}} 
            onСonfirmationClick={() => {dispatch(deleteTodoAndCloseModal({
                listId: activeListId, 
                todoId: activeTodoId }))}}
        >
            <SubText $mode={context.mode}>
                Task will be permanently deleted
            </SubText>
        </Modal>
    )
};

export default DeleteTaskModal;

