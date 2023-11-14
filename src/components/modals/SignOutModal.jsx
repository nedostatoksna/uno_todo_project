import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { changeIsLoggingOut } from "../../store/actionCreators/userPanelActionCreators";
import Button from "../../ui/buttons/Button";
import ModalHeader from "../../ui/headers/ModalHeader";
import Modal from "../../ui/divs/Modal";
import ModalContent from "../../ui/divs/ModalContent";
import SubText from "../../ui/SubText";
import { AppContext } from "../../context/context";
import Flex from "../../ui/divs/Flex";
import Wrapper from "../../ui/divs/Wrapper";

const SignOutModal = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <Modal $zIndex={"1"}>
            <ModalContent $width={"310px"} $mode={context.mode}>
                <ModalHeader $mode={context.mode}>Sign Out</ModalHeader>
                <SubText $mode={context.mode}>Are you sure you would like to sign out?</SubText>
                <Wrapper $buttons>
                    <Flex $buttons>
                        <Button $cancel onClick={() => {dispatch(changeIsLoggingOut())}} $mode={context.mode}>Cancel</Button>
                        <Button $coral $mode={context.mode} onClick={() => {dispatch(changeIsLoggingOut())}}>Sigh Out</Button>
                    </Flex>
                </Wrapper>
            </ModalContent>
        </Modal>
    )
};

export default SignOutModal;