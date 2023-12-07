import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/context";
import { settings } from "../../../context/settings";
import SettingsBar from "./SettingsBar";

const GeneralSettings = ({ dynamicContext, setDynamicContext }) => {

    const context = useContext(AppContext);

    return (
        <>
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
        </>
    )
};

export default GeneralSettings;

const StyledHeader = styled.h3`
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.1px;
    color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
    margin-bottom: 12px;
`;
