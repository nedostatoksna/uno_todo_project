import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import UserCard from "./UserCard";
import { AppContext } from "../../../context/context";
import Divider from "../../../ui/Divider";
import Modal from "../../../ui/Modal";
import { save, toggleUserPanel } from "../../../store/actionCreators/userPanelActionCreators";
import About from "./About";
import styled from "styled-components";
import GeneralSettings from "./GeneralSettings";

const UserInterface = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const [dynamicContext, setDynamicContext] = useState(context);

    return (
        <Modal 
            boxPadding={"20px"}
            header={"Settings"} 
            buttonText={"Save"} 
            primarySaveBtn
            onCancelClickHandler={() => {dispatch(toggleUserPanel())}} 
            onСonfirmationClick={() => {dispatch(save(dynamicContext))}}
        >
            <UserCard />
            <Divider $mode={context.mode} $height={"1px"} />
            <StyledContainer>
                <GeneralSettings dynamicContext={dynamicContext} setDynamicContext={setDynamicContext} />
                <Divider $mode={context.mode} $height={"1px"} />
                <About />
            </StyledContainer> 
        </Modal> 
    )
};

export default UserInterface; 

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
`;

