import React, { useContext } from "react";
import UserSettingsButton from "./UserSettingsButton";
import styled from "styled-components";
import { AppContext } from "../../../context/context";

const SettingsBar = ({ setting, name, dynamicContext, setDynamicContext }) => {

    const context = useContext(AppContext);

    return (
        <RadioGroupContainer>
            <RadioGroupHeader $mode={context.mode}>{setting.header}</RadioGroupHeader>
            <RadioButtonsWrapper>
                {
                    setting.options.map(option => (
                        <UserSettingsButton
                            option={option} 
                            name={name}                   
                            dynamicContext={dynamicContext}
                            setDynamicContext={setDynamicContext}
                            key={option}
                        />
                    ))
                }
            </RadioButtonsWrapper>
            { setting.header === "Language" ? <StyledNotice $mode={context.mode}>Change will be applied at next app restart</StyledNotice> : undefined }
        </RadioGroupContainer>
    )
};

export default SettingsBar;

const RadioGroupContainer = styled.div`
    margin-bottom: 20px;
`;
const RadioGroupHeader = styled.h4`
    font-family: "Roboto";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.4px;
    margin-bottom: 5px;
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-transparent-grey-text-medium-variant)"};
`;
const RadioButtonsWrapper = styled.h4`
    display: flex;
    flex-direction: row;
`;
const StyledNotice = styled.h4`
    font-family: "Roboto";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-medium-variant)" : "var(--dark-mode-transparent-grey-text-medium-variant)"};
    margin-top: 5px;
`;