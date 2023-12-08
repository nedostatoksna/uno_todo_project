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
import FlexColumnWrapper from "../../../styled/FlexColumnWrapper";

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
            <FlexColumnWrapper $smallPaddingTop>
                <GeneralSettings dynamicContext={dynamicContext} setDynamicContext={setDynamicContext} />
                <Divider $mode={context.mode} $height={"1px"} />
                <About />
            </FlexColumnWrapper> 
        </Modal> 
    )
};

export default UserInterface; 



