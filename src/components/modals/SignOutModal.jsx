import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { changeIsLoggingOut } from "../../store/actionCreators/userPanelActionCreators";
import Button from "../../ui/Button";
import SubText from "../../ui/SubText";
import { AppContext } from "../../context/context";
import Modal from "../../styled/divs/Modal";
import ModalContent from "../../styled/divs/ModalContent";
import ModalHeader from "../../styled/headers/ModalHeader";
import styled from "styled-components";

const SignOutModal = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <Modal $zIndex={"1"}>
            <ModalContent $width={"310px"} $mode={context.mode}>
                <ModalHeader $mode={context.mode}>Sign Out</ModalHeader>
                <SubText $mode={context.mode}>Are you sure you would like to sign out?</SubText>
                <ButtonGroupWrapper>
                        <Button $white onClick={() => {dispatch(changeIsLoggingOut())}} $mode={context.mode}>Cancel</Button>
                        <Button $coral $mode={context.mode} onClick={() => {dispatch(changeIsLoggingOut())}}>Sigh Out</Button>
                </ButtonGroupWrapper>
            </ModalContent>
        </Modal>
    )
};

export default SignOutModal;

const ButtonGroupWrapper = styled.div`
    padding: 20px 4px 0px 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;