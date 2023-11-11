import React, { useContext } from "react";
import { save, toggleUserPanel } from "../../store/actionCreators/userPanelActionCreators";
import CancelButton from "../../ui/buttons/CancelButton";
import PrimaryButton from "../../ui/buttons/PrimaryButton";
import ButtonsWrapper from "../../ui/divs/ButtonsWrapper";
import { AppContext } from "../../context/context";

const SaveCancelBtns = ({dispatch, dynamicContext}) => {

    const context = useContext(AppContext);

    return (
        <ButtonsWrapper $padding={"20px 4px 0px 4px"}>
            <CancelButton onClick={() => {dispatch(toggleUserPanel())}} $mode={context.mode} />
            <PrimaryButton onClick={() => {dispatch(save(dynamicContext))}} $btnColor={"#F85977"} $mode={context.mode}>Save</PrimaryButton>
        </ButtonsWrapper>
    )
};

export default SaveCancelBtns;