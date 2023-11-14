import React, { useContext } from "react";
import { save, toggleUserPanel } from "../../store/actionCreators/userPanelActionCreators";
import { AppContext } from "../../context/context";
import Button from "../../ui/buttons/Button";
import Wrapper from "../../ui/divs/Wrapper";
import Flex from "../../ui/divs/Flex";

const SaveCancelBtns = ({dispatch, dynamicContext}) => {

    const context = useContext(AppContext);

    return (
        <Wrapper $buttons>
            <Flex $buttons>
                <Button $cancel onClick={() => {dispatch(toggleUserPanel())}} $mode={context.mode}>Cancel</Button>
                <Button onClick={() => {dispatch(save(dynamicContext))}} $primary $mode={context.mode}>Save</Button>
            </Flex>
        </Wrapper>
    )
};

export default SaveCancelBtns;