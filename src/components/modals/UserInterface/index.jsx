import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import UserCard from "./UserCard";
import { AppContext } from "../../../context/context";
import Divider from "../../../ui/Divider";
import Modal from "../../Modal";
import { toggleUserPanel } from "../../../store/actionCreators/userPanelActionCreators";
import About from "./About";
import GeneralSettings from "./GeneralSettings";
import FlexColumnWrapper from "../../../ui/FlexColumnWrapper";
import { saveUserSettings } from "../../../store/actionCreators/thunks";

const UserInterface = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const dynamicContextObj = {
        palette: context.palette,
        lang: context.lang,
        mode: context.mode,
    };
    const [dynamicContext, setDynamicContext] = useState(dynamicContextObj);

    return (
        <Modal 
            header={"Settings"} 
            buttonText={"Save"} 
            settings
            primarySaveBtn
            onCancelClickHandler={() => {dispatch(toggleUserPanel())}} 
            onСonfirmationClick={() => {dispatch(saveUserSettings({ dynamicContext }))}}
        >
            <UserCard />
            <Divider $mode={context.mode} $heightSmall />
            <FlexColumnWrapper $smallPaddingTop>
                <GeneralSettings 
                    dynamicContext={dynamicContext} 
                    setDynamicContext={setDynamicContext} 
                />
                <Divider $mode={context.mode} $heightSmall />
                <About />
            </FlexColumnWrapper> 
        </Modal> 
    )
};

export default UserInterface; 



