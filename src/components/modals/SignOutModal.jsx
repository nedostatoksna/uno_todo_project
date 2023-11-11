import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { changeIsLoggingOut } from "../../store/actionCreators/userPanelActionCreators";
import CancelButton from "../../ui/buttons/CancelButton";
import PrimaryButton from "../../ui/buttons/Button";
import ButtonsWrapper from "../../ui/divs/ButtonsWrapper";
import ModalHeader from "../../ui/headers/ModalHeader";
import Modal from "../../ui/divs/Modal";
import ModalContent from "../../ui/divs/ModalContent";
import SubText from "../../ui/SubText";
import { AppContext } from "../../context/context";

const SignOutModal = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <Modal $zIndex={"1"}>
            <ModalContent $width={"310px"} $mode={context.mode}>
                <ModalHeader $mode={context.mode}>Sign Out</ModalHeader>
                <SubText $mode={context.mode}>Are you sure you would like to sign out?</SubText>
                <ButtonsWrapper>
                    <CancelButton onClick={() => {dispatch(changeIsLoggingOut())}} $mode={context.mode} />
                    <PrimaryButton onClick={() => {dispatch(changeIsLoggingOut())}} $btnColor={"#F85977"}>Sigh Out</PrimaryButton>
                </ButtonsWrapper>
            </ModalContent>
        </Modal>
    )
};

export default SignOutModal;