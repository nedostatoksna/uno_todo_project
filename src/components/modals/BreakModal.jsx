import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIsSigningOut } from "../../store/actionCreators/userPanelActionCreators";
import { AppContext } from "../../context/context";
import { toggleDeletingList } from "../../store/actionCreators/todoListActionCreators";
import { toggleDeletingTodo } from "../../store/actionCreators/todoPanelActionCreators";
import { deleteList, deleteTodo } from "../../store/actionCreators/dataListActionCreators.js";
import Modal from "../../ui/Modal";
import styled from "styled-components";

const BreakModal = ({ actionType }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeListId = useSelector(state => state.todoListUI.activeListId);

    const preDeleteList = () => {
        dispatch(deleteList(activeListId))
        dispatch(toggleDeletingList())
    };

    const preDeleteTodo = () => {
        dispatch(deleteTodo(activeListId))
        dispatch(toggleDeletingTodo())
    };

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
            case "deleteList": return preDeleteList()
            default: return preDeleteTodo()
        }
    }

    return (
        <Modal 
            boxWidth={"310px"} 
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
