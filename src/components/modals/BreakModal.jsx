import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIsSigningOut } from "../../store/actionCreators/userPanelActionCreators";
import { AppContext } from "../../context/context";
import { toggleDeletingList } from "../../store/actionCreators/todoListActionCreators";
import { toggleDeletingTodo } from "../../store/actionCreators/todoPanelActionCreators";
import Modal from "../../ui/Modal";
import styled from "styled-components";
import { deleteListAndCloseModal, deleteTodoAndCloseModal } from "../../store/actionCreators/thunks";

const BreakModal = ({ actionType }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);

    const header = actionType === "signOut" ? "Sign Out" : "Are you sure?";

    const subText = actionType === "signOut" ? "Are you sure you would like to sign out?"
    : actionType === "deleteList" ? "List will be permanently deleted"
    : "Task will be permanently deleted";

    const buttonText = actionType === "signOut" ? "Sign Out" : "Delete";

    const setToggleFunction = (type) => {
        switch (type) {
            case "signOut": return changeIsSigningOut()
            case "deleteList": return toggleDeletingList()
            default: return toggleDeletingTodo()
        }
    }
    const setFunction = (type) => {
        switch (type) {
            case "signOut": return dispatch(changeIsSigningOut())
            case "deleteList": return dispatch(deleteListAndCloseModal({ listId: activeListId }))
            default: return dispatch(deleteTodoAndCloseModal({listId: activeListId, todoId: activeTodoId }))
        }
    }

    return (
        <Modal 
            boxWidth={"310px"} 
            signOut
            breakModal
            header={header} 
            buttonText={buttonText} 
            onCancelClickHandler={() => {dispatch(setToggleFunction(actionType))}} 
            onСonfirmationClick={() => setFunction(actionType)}
        >
            <StyledSubText $mode={context.mode}>{subText}</StyledSubText>
        </Modal>
    )
};

export default BreakModal;

const StyledSubText = styled.p` 
    color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-medium-variant)" : "var(--dark-mode-transparent-grey-text-medium-variant)"};
    line-height: 20px;
    letter-spacing: 0.25px;
    margin-bottom: 20px;
`;
