import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIsSigningOut } from "../../store/actionCreators/userPanelActionCreators";
import SubText from "../../styled/SubText";
import { AppContext } from "../../context/context";
import { toggleDeletingList } from "../../store/actionCreators/todoListActionCreators";
import { toggleDeletingTodo } from "../../store/actionCreators/todoPanelActionCreators";
import { deleteList, deleteTodo } from "../../store/actionCreators/dataListActionCreators.js";
import Modal from "../../ui/Modal";

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
            $zIndex={"2"} 
            $boxWidth={"310px"} 
            $coral
            $header={header} 
            $buttonText={buttonText} 
            $mode={context.mode} 
            $onCancelClickHandler={() => {dispatch(setToggleFunction(actionType))}} 
            $onСonfirmationClick={() => setFunction(actionType)}
        >
            <SubText $mode={context.mode}>{subText}</SubText>
        </Modal>
    )
};

export default BreakModal;
