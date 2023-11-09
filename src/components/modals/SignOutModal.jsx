import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { changeIsLoggingOut } from "../../store/actionCreators/userPanelActionCreators";
import CancelButton from "../../ui/CancelButton";
import PrimaryButton from "../../ui/PrimaryButton";
import ButtonsWrapper from "../../ui/ButtonsWrapper";
import ModalHeader from "../../ui/ModalHeader";
import Modal from "../../ui/Modal";
import ModalContent from "../../ui/ModalContent";
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
                    <PrimaryButton onClick={() => {dispatch(changeIsLoggingOut())}} $text={"Sigh Out"} $btnColor={"#F85977"} />
                </ButtonsWrapper>
            </ModalContent>
        </Modal>
    )
};

export default SignOutModal;