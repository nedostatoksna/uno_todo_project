import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIsSigningOut } from "../../store/actionCreators/userPanelActionCreators";
import Button from "../../ui/Button";
import SubText from "../../styled/SubText";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import { toggleDeletingList } from "../../store/actionCreators/todoListActionCreators";
import { toggleDeletingTodo } from "../../store/actionCreators/todoPanelActionCreators";
import { deleteList, deleteTodo } from "../../store/actionCreators/dataListActionCreators.js";
import Background from "../../styled/Background";
import ContentBox from "../../styled/ContentBox";
import Header from "../../styled/Header";

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
        <Background $darkTransparent $zIndex={"1"}>
            <ContentBox $primary $width={"310px"} $mode={context.mode}>
                <Header $mode={context.mode} $margin={"0px 0px 16px 0px"}>{header}</Header>
                <SubText $mode={context.mode}>{subText}</SubText>
                <ButtonGroupWrapper>
                        <Button 
                            $white 
                            $ClearBackground 
                            $paddingSmall 
                            $purpleColor
                            $margin={"0px 10px"}
                            $purpleHover
                            onClick={() => {dispatch(setToggleFunction(actionType))}} 
                            $mode={context.mode}
                        >Cancel</Button>
                        <Button $coral $mode={context.mode} onClick={() => setFunction(actionType)}>{buttonText}</Button>
                </ButtonGroupWrapper>
            </ContentBox>
        </Background>
    )
};

export default BreakModal;

const ButtonGroupWrapper = styled.div`
    padding: 20px 4px 0px 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;