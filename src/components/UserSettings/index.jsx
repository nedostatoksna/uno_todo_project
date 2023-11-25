import React, { useContext, useState } from "react";
import { settings } from "../../context/settings";
import SettingsBar from "./SettingsBar";
import SaveCancelBtns from "./SaveCancelBtns";
import About from "../UserInterface/About";
import { useDispatch } from "react-redux";
import { AppContext } from "../../context/context";
import Divider from "../../ui/Divider";
import styled from "styled-components";

const UserSettings = () => {
    
    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const [dynamicContext, setDynamicContext] = useState(context);

    return (
        <StyledContainer>
            <StyledHeader $mode={context.mode}>General</StyledHeader>
            {
                settings.map(setting => (
                <SettingsBar 
                    setting={setting} 
                    name={setting.name} 
                    dynamicContext={dynamicContext}
                    setDynamicContext={setDynamicContext}
                    key={setting.name}
                />
                ))
            }
            <Divider $mode={context.mode} $height={"1px"} />
            <About />
            <SaveCancelBtns dispatch={dispatch} dynamicContext={dynamicContext} />
        </StyledContainer> 
    )
};

export default UserSettings;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
`;
const StyledHeader = styled.h3`
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.1px;
    color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
    margin-bottom: 12px;
`;