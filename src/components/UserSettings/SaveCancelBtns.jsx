import React, { useContext } from "react";
import { save, toggleUserPanel } from "../../store/actionCreators/userPanelActionCreators";
import { AppContext } from "../../context/context";
import Button from "../../ui/Button";
import styled from "styled-components";

const SaveCancelBtns = ({dispatch, dynamicContext}) => {

    const context = useContext(AppContext);

    return (
        <ButtonGroupWrapper>
                <Button $white onClick={() => {dispatch(toggleUserPanel())}} $mode={context.mode}>Cancel</Button>
                <Button onClick={() => {dispatch(save(dynamicContext))}} $primary $mode={context.mode}>Save</Button>
        </ButtonGroupWrapper>
    )
};

export default SaveCancelBtns;

const ButtonGroupWrapper = styled.div`
    padding: 20px 4px 0px 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;