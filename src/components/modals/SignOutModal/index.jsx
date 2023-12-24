import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../../context/context";
import Modal from "../../../ui/Modal";
import { changeIsSigningOut } from "../../../store/actionCreators/userPanelActionCreators";
import SubText from "../../../ui/SubText";

const SignOutModal = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <Modal 
            signOut
            breakModal
            header={"Sign Out"} 
            buttonText={"Sign Out"} 
            onCancelClickHandler={() => {dispatch(changeIsSigningOut())}} 
            onСonfirmationClick={() => {dispatch(changeIsSigningOut())}}
        >
            <SubText $mode={context.mode}>
                Are you sure you would like to sign out?
            </SubText>
        </Modal>
    )
};

export default SignOutModal;

